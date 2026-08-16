// Strips ng-zorro rule families the app provably never renders.
//
// `styles.less` imports one `style/entry.less` per ng-zorro component the app
// uses, which is already the coarse-grained version of this. But an entry is
// not the smallest useful unit: ant's grid entry emits push, pull, offset and
// order classes across six breakpoints whether or not anything sets those
// inputs, and the button entry emits a full ghost palette whether or not any
// button is ghosted. Those families are ~28 kB of the 426 kB global sheet and
// nothing in this app can ever match them.
//
// Sibling of postcss-strip-rtl.cjs, which does the same thing for `[dir=rtl]`.
// Both are loaded via postcss.config.json, which the @angular/build application
// builder applies to every stylesheet.
//
// ## Why each family is safe, and how that stays true
//
// ng-zorro applies these classes from directive inputs — NzColDirective writes
// `.ant-col-push-N` only when `nzPush` is set, NzButtonComponent writes
// `.ant-btn-background-ghost` only when `nzGhost` is set. So "no template sets
// the input" means "no element ever gets the class". Verified additionally that
// no ng-zorro component sets these inputs on our behalf internally, and that
// nothing in src/ writes the raw class names by hand.
//
// That is a fact about today's source, and facts rot. Rather than a comment
// asking future readers to re-derive it, `assertStillUnused()` below rescans
// src/ during the build and **fails** if any driving input reappears. Adding an
// `nzPush` and getting a build error naming this file is the correct outcome:
// the fix is to delete that entry from REMOVALS, not to work around it.
const { readdirSync, readFileSync } = require('node:fs')
const { join, resolve } = require('node:path')

const SRC = resolve(__dirname, '..', 'src')

const REMOVALS = [
  {
    family: 'grid push',
    // `.ant-col-push-N` and the six responsive variants `.ant-col-{bp}-push-N`
    selector: /\.ant-col(?:-(?:xs|sm|md|lg|xl|xxl|xxxl))?-push-\d/,
    driver: /\bnzPush\b|\bant-col(?:-(?:xs|sm|md|lg|xl|xxl|xxxl))?-push-/,
    input: 'nzPush',
  },
  {
    family: 'grid pull',
    selector: /\.ant-col(?:-(?:xs|sm|md|lg|xl|xxl|xxxl))?-pull-\d/,
    driver: /\bnzPull\b|\bant-col(?:-(?:xs|sm|md|lg|xl|xxl|xxxl))?-pull-/,
    input: 'nzPull',
  },
  {
    family: 'button ghost',
    selector: /\.ant-btn-background-ghost/,
    driver: /\bnzGhost\b|\bant-btn-background-ghost\b/,
    input: 'nzGhost',
  },
]

const SCANNED = /\.(html|ts)$/
// styles.less is where the families are *defined*; matching it would be
// circular. Generated GraphQL modules cannot contain template markup.
const SKIP_DIR = /^(node_modules|generated)$/

function* sourceFiles(dir) {
  let entries
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }
  for (const e of entries) {
    if (e.isDirectory()) {
      if (SKIP_DIR.test(e.name)) continue
      yield* sourceFiles(join(dir, e.name))
    } else if (
      e.isFile() &&
      SCANNED.test(e.name) &&
      !e.name.endsWith('.spec.ts')
    ) {
      yield join(dir, e.name)
    }
  }
}

let asserted = false

/**
 * Re-derive the premise this file rests on, once per build. Throws rather than
 * warns: a warning in a 200-stylesheet build is a warning nobody reads, and the
 * failure mode being guarded against is silent — a `nzPush` that simply does
 * nothing, on a page nobody rechecks.
 */
function assertStillUnused() {
  if (asserted) return
  asserted = true
  const found = new Map()
  for (const file of sourceFiles(SRC)) {
    const text = readFileSync(file, 'utf8')
    for (const r of REMOVALS) {
      if (!r.driver.test(text)) continue
      if (!found.has(r.family)) found.set(r.family, [])
      found.get(r.family).push(file.slice(SRC.length + 1))
    }
  }
  if (found.size === 0) return
  const detail = [...found]
    .map(([family, files]) => `  ${family}: ${files.slice(0, 5).join(', ')}`)
    .join('\n')
  throw new Error(
    `postcss-strip-unused: a removed rule family is now in use, so its CSS is ` +
      `being deleted out from under it:\n${detail}\n` +
      `Remove that entry from REMOVALS in scripts/postcss-strip-unused.cjs.`
  )
}

module.exports = () => ({
  postcssPlugin: 'postcss-strip-unused',
  Rule(rule) {
    // inside @keyframes a "selector" is a percentage, not a class
    if (
      rule.parent?.type === 'atrule' &&
      rule.parent.name.endsWith('keyframes')
    )
      return

    const kept = rule.selectors.filter(
      (s) => !REMOVALS.some((r) => r.selector.test(s))
    )
    if (kept.length === rule.selectors.length) return

    assertStillUnused()
    if (kept.length === 0) rule.remove()
    else rule.selectors = kept
  },
  AtRuleExit(atRule) {
    // drop @media/@supports blocks emptied by rule removal
    if (
      (atRule.name === 'media' || atRule.name === 'supports') &&
      atRule.nodes.length === 0
    ) {
      atRule.remove()
    }
  },
})
module.exports.postcss = true
