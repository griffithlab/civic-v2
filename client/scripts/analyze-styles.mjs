#!/usr/bin/env node
/**
 * Attribute the global stylesheet's bytes to the ng-zorro components that
 * produced them.
 *
 * `styles.css` is ~42% of the raw initial bundle and, unlike the JS, nothing
 * reports where it comes from. The esbuild metafile is no help: it records
 * `src/styles.less` as one opaque input, because LESS is compiled before esbuild
 * sees it. So the only way to ask "what is in there" is to parse the compiled
 * CSS and attribute each rule by its selector.
 *
 * That attribution is what makes a removal decision possible. `styles.less`
 * imports 47 ng-zorro `style/entry.less` files; this says what each one costs,
 * and `--families` says what a *part* of one costs — the responsive grid's
 * push/pull classes, say, which are 19 kB the app has never used.
 *
 * Two caveats, both load-bearing:
 *
 *   - Entries pull their own style dependencies, so an entry's measured weight
 *     is not the same as what deleting its @import would save. `table`'s entry
 *     drags in `pagination`; `select`'s drags in the shared dropdown styles.
 *     Always measure a removal, never predict it. `--diff` exists for that.
 *   - Attribution is by `.ant-<root>` selector prefix against the ROOTS table
 *     below, because ant's class names do not match its package names
 *     (`date-picker` emits `.ant-picker`, `mention` emits `.ant-mentions`,
 *     `grid` emits `.ant-row`/`.ant-col`). Anything unmatched is reported under
 *     its own first segment and counted, so drift is visible rather than
 *     silently folded into a neighbour.
 *
 * Usage:
 *   yarn build:stats                          # or any --stats-json build
 *   node scripts/analyze-styles.mjs           # per-component breakdown
 *   node scripts/analyze-styles.mjs --families        # rule-family breakdown
 *   node scripts/analyze-styles.mjs --save <name>     # snapshot for later diffing
 *   node scripts/analyze-styles.mjs --diff <before> [after]
 *   node scripts/analyze-styles.mjs --grep <substr>   # which group owns a selector
 *
 * Snapshots live in dist/style-snapshots/<name>.json, gitignored via dist/.
 */
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
} from 'node:fs'
import { join, resolve } from 'node:path'

const DEFAULT_BUILD_DIR = 'dist/stats-build/browser'
const SNAPSHOT_DIR = 'dist/style-snapshots'

const kb = (b) => `${(b / 1024).toFixed(1)} kB`
const pad = (s, n) => String(s).padEnd(n)

/**
 * ant class root -> the ng-zorro package whose `style/entry.less` emits it.
 * Longest match wins, so `input-number` is tested before `input`. Roots absent
 * from `styles.less` (pagination, dropdown-menu) arrive as dependencies of an
 * entry that is imported — which is exactly the point of naming them.
 */
const ROOTS = [
  ['input-number', 'input-number'],
  ['auto-complete', 'auto-complete'],
  ['back-top', 'back-top'],
  ['page-header', 'page-header'],
  ['page', 'page-header'],
  ['otp', 'input'],
  ['drawer', 'drawer'],
  ['tree-select', 'tree-select'],
  ['time-picker', 'date-picker'],
  ['float-btn', 'float-button'],
  ['btn', 'button'],
  ['col', 'grid'],
  ['row', 'grid'],
  ['picker', 'date-picker'],
  ['mentions', 'mention'],
  ['select', 'select'],
  ['table', 'table'],
  ['menu', 'menu'],
  ['input', 'input'],
  ['form', 'form'],
  ['tabs', 'tabs'],
  ['pagination', 'pagination (via table)'],
  ['dropdown', 'dropdown'],
  ['typography', 'typography'],
  ['radio', 'radio'],
  ['tooltip', 'tooltip'],
  ['skeleton', 'skeleton'],
  ['popover', 'popover'],
  ['popconfirm', 'popconfirm'],
  ['image', 'image'],
  ['card', 'card'],
  ['collapse', 'collapse'],
  ['timeline', 'timeline'],
  ['list', 'list'],
  ['modal', 'modal'],
  ['checkbox', 'checkbox'],
  ['badge', 'badge'],
  ['ribbon', 'badge'],
  ['tag', 'tag'],
  ['divider', 'divider'],
  ['spin', 'spin'],
  ['descriptions', 'descriptions'],
  ['alert', 'alert'],
  ['switch', 'switch'],
  ['layout', 'layout'],
  ['avatar', 'avatar'],
  ['breadcrumb', 'breadcrumb'],
  ['comment', 'comment'],
  ['empty', 'empty'],
  ['flex', 'flex'],
  ['statistic', 'statistic'],
  ['result', 'result'],
  ['rate', 'rate'],
  ['resizable', 'resizable'],
  ['space', 'space'],
  ['message', 'message'],
  ['notification', 'notification'],
  ['steps', 'steps'],
  ['slider', 'slider'],
  ['progress', 'progress'],
  ['upload', 'upload'],
  ['transfer', 'transfer'],
  ['tree', 'tree'],
  ['cascader', 'cascader'],
  ['carousel', 'carousel'],
  ['calendar', 'calendar'],
  ['anchor', 'anchor'],
  ['affix', 'affix'],
  ['segmented', 'segmented'],
  ['icon', 'icon'],
  // shared transition classes emitted by the core `style/entry.less`, not by any
  // one component — every dropdown, popover and modal animates through them
  ['wave', 'core: motion'],
  ['click', 'core: motion'],
  ['motion', 'core: motion'],
  ['slide', 'core: motion'],
  ['move', 'core: motion'],
  ['zoom', 'core: motion'],
  ['fade', 'core: motion'],
  ['show', 'core: motion'],
  ['scroll', 'core: motion'],
]

/**
 * Sub-component rule families worth measuring separately, because each maps to
 * a template input the app either uses or does not. Order matters: first match
 * wins.
 *
 * These figures are an upper bound per family, not a partition: a rule whose
 * selector list spans two families (`.ant-btn-background-ghost.ant-btn-dangerous`)
 * is charged whole to whichever matched first. Use them to decide what is worth
 * removing, then measure the removal with `--diff` — never quote a family total
 * as the saving.
 */
const FAMILIES = [
  ['grid: push', /\.ant-col(-(?:xs|sm|md|lg|xl|xxl))?-push-/, 'nzPush'],
  ['grid: pull', /\.ant-col(-(?:xs|sm|md|lg|xl|xxl))?-pull-/, 'nzPull'],
  ['grid: order', /\.ant-col(-(?:xs|sm|md|lg|xl|xxl))?-order-/, 'nzOrder'],
  ['grid: offset', /\.ant-col(-(?:xs|sm|md|lg|xl|xxl))?-offset-/, 'nzOffset'],
  [
    'grid: responsive span',
    /\.ant-col-(?:xs|sm|md|lg|xl|xxl)-\d/,
    'nzXs..nzXXl',
  ],
  ['grid: base + span', /\.ant-col/, 'nzSpan'],
  ['button: ghost', /\.ant-btn-background-ghost/, 'nzGhost'],
  ['button: dangerous', /\.ant-btn-dangerous/, 'nzDanger'],
  ['button: block', /\.ant-btn-block/, 'nzBlock'],
  ['button: shape', /\.ant-btn-(circle|round)/, 'nzShape'],
  ['button: other', /\.ant-btn/, '-'],
]

function findStylesheet(dir) {
  const base = resolve(process.cwd(), dir)
  if (!existsSync(base)) {
    console.error(
      `analyze-styles: no build output at ${base}\n` +
        `Run \`yarn build:stats\` first, or pass the browser output directory.`
    )
    process.exit(1)
  }
  const file = readdirSync(base).find((f) => /^styles.*\.css$/.test(f))
  if (!file) {
    console.error(`analyze-styles: no styles-*.css in ${base}`)
    process.exit(1)
  }
  return join(base, file)
}

/**
 * Walk top-level blocks, recursing into conditional at-rules so a rule nested
 * in `@media` is attributed to its component rather than to "media". Charging
 * the whole `@media` block to one bucket was the first thing tried and it hid
 * 42 kB across every component at once.
 */
function eachRule(css, visit) {
  let i = 0
  let depth = 0
  let start = 0
  let selEnd = -1
  while (i < css.length) {
    const c = css[i]
    if (c === '{') {
      if (depth === 0) selEnd = i
      depth++
    } else if (c === '}') {
      depth--
      if (depth === 0) {
        const selector = css.slice(start, selEnd)
        const body = css.slice(selEnd + 1, i)
        const bytes = i + 1 - start
        if (/^\s*@(media|supports|layer|container)\b/.test(selector)) {
          eachRule(body, visit)
        } else {
          visit(selector, bytes)
        }
        start = i + 1
      }
    }
    i++
  }
}

function classify(selector) {
  const m = selector.match(/\.ant-([a-z0-9]+(?:-[a-z0-9]+)*)/)
  if (m) {
    const name = m[1]
    for (const [root, pkg] of ROOTS) {
      if (name === root || name.startsWith(`${root}-`)) return pkg
    }
    return `UNMAPPED: ant-${name.split('-')[0]}`
  }
  if (/@font-face/.test(selector)) return '(font-face)'
  if (/@(-webkit-)?keyframes/.test(selector)) return '(keyframes)'
  if (/cvc-|\.civic/.test(selector)) return 'CIViC theme'
  return '(other)'
}

function analyse(cssPath) {
  const css = readFileSync(cssPath, 'utf8')
  const byPackage = new Map()
  const byFamily = new Map()
  let rules = 0
  let attributed = 0
  eachRule(css, (selector, bytes) => {
    rules++
    attributed += bytes
    const pkg = classify(selector)
    byPackage.set(pkg, (byPackage.get(pkg) ?? 0) + bytes)
    for (const [name, test] of FAMILIES) {
      if (test.test(selector)) {
        byFamily.set(name, (byFamily.get(name) ?? 0) + bytes)
        break
      }
    }
  })
  return {
    file: cssPath,
    totalBytes: css.length,
    attributedBytes: attributed,
    rules,
    byPackage: Object.fromEntries(byPackage),
    byFamily: Object.fromEntries(byFamily),
  }
}

function printSummary(s) {
  console.log(`\n${s.file}`)
  console.log(`  ${kb(s.totalBytes)} total, ${s.rules} rules`)
  const unattributed = s.totalBytes - s.attributedBytes
  if (unattributed > 512) {
    console.log(
      `  ${kb(unattributed)} outside any rule block (comments, @charset, @import)`
    )
  }
  console.log('\n  by ng-zorro package:')
  const rows = Object.entries(s.byPackage).sort((a, b) => b[1] - a[1])
  for (const [k, v] of rows) {
    if (v < 512) continue
    console.log(`    ${pad(kb(v), 10)} ${k}`)
  }
  const tail = rows.filter(([, v]) => v < 512)
  if (tail.length) {
    console.log(
      `    ${pad(kb(tail.reduce((n, [, v]) => n + v, 0)), 10)} (${tail.length} more under 0.5 kB)`
    )
  }
  const unmapped = rows.filter(([k]) => k.startsWith('UNMAPPED'))
  if (unmapped.length) {
    console.log(
      `\n  ${unmapped.length} unmapped root(s) — add them to ROOTS in this script ` +
        `so they are attributed rather than listed loose.`
    )
  }
}

function printFamilies(s) {
  console.log(`\n${s.file}`)
  console.log('\n  by rule family (each maps to a template input):\n')
  console.log(`    ${pad('bytes', 10)} ${pad('family', 24)} driven by`)
  for (const [k, v] of Object.entries(s.byFamily).sort((a, b) => b[1] - a[1])) {
    const input = FAMILIES.find(([n]) => n === k)?.[2] ?? '-'
    console.log(`    ${pad(kb(v), 10)} ${pad(k, 24)} ${input}`)
  }
  console.log(
    `\n  A family with no live consumer is removable in postcss-strip-unused.cjs.\n` +
      `  Check usage with: grep -rl "nzPush" src --include='*.html'`
  )
}

function printDiff(before, after) {
  const delta = (a, b) => {
    const d = b - a
    return `${d > 0 ? '+' : ''}${(d / 1024).toFixed(1)} kB`
  }
  console.log('\n=== stylesheet diff ===')
  console.log(
    `  total   ${kb(before.totalBytes)} -> ${kb(after.totalBytes)}   ${delta(before.totalBytes, after.totalBytes)}`
  )
  console.log('\n  packages changed:')
  const keys = new Set([
    ...Object.keys(before.byPackage),
    ...Object.keys(after.byPackage),
  ])
  let quiet = true
  for (const k of keys) {
    const b = before.byPackage[k] ?? 0
    const a = after.byPackage[k] ?? 0
    if (Math.abs(a - b) < 256) continue
    quiet = false
    const tag = b === 0 ? 'NEW  ' : a === 0 ? 'GONE ' : '     '
    console.log(
      `    ${tag}${pad(delta(b, a), 12)} ${pad(`${kb(b)} -> ${kb(a)}`, 22)} ${k}`
    )
  }
  if (quiet) console.log('    (nothing moved by more than 0.25 kB)')
}

const args = process.argv.slice(2)
const flag = args.find((a) => a.startsWith('--'))
const positional = args.filter((a) => !a.startsWith('--'))

if (flag === '--save') {
  const name = positional[0]
  if (!name) throw new Error('--save needs a name')
  mkdirSync(SNAPSHOT_DIR, { recursive: true })
  const s = analyse(findStylesheet(positional[1] ?? DEFAULT_BUILD_DIR))
  writeFileSync(join(SNAPSHOT_DIR, `${name}.json`), JSON.stringify(s, null, 2))
  console.log(`saved snapshot "${name}": ${kb(s.totalBytes)}`)
} else if (flag === '--diff') {
  const load = (n) => {
    const p = existsSync(n) ? n : join(SNAPSHOT_DIR, `${n}.json`)
    if (!existsSync(p)) {
      console.error(
        `analyze-styles: no snapshot "${n}" (looked in ${SNAPSHOT_DIR})`
      )
      process.exit(1)
    }
    return JSON.parse(readFileSync(p, 'utf8'))
  }
  const after = positional[1]
    ? load(positional[1])
    : analyse(findStylesheet(DEFAULT_BUILD_DIR))
  printDiff(load(positional[0]), after)
} else if (flag === '--grep') {
  const needle = positional[0]
  if (!needle) throw new Error('--grep needs a substring')
  const css = readFileSync(findStylesheet(DEFAULT_BUILD_DIR), 'utf8')
  const hits = new Map()
  eachRule(css, (selector, bytes) => {
    if (!selector.includes(needle)) return
    const pkg = classify(selector)
    const cur = hits.get(pkg) ?? {
      bytes: 0,
      count: 0,
      sample: selector.trim().slice(0, 90),
    }
    hits.set(pkg, { ...cur, bytes: cur.bytes + bytes, count: cur.count + 1 })
  })
  for (const [k, v] of [...hits].sort((a, b) => b[1].bytes - a[1].bytes)) {
    console.log(`${pad(kb(v.bytes), 10)} ${pad(`${v.count} rules`, 12)} ${k}`)
    console.log(`           ${v.sample}`)
  }
} else if (flag === '--families') {
  printFamilies(analyse(findStylesheet(positional[0] ?? DEFAULT_BUILD_DIR)))
} else {
  printSummary(analyse(findStylesheet(positional[0] ?? DEFAULT_BUILD_DIR)))
}
