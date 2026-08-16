#!/usr/bin/env node
/**
 * Summarise or diff an esbuild metafile from `yarn build:stats`.
 *
 * Bundle work is hard to reason about because the number that matters — what a
 * given page actually downloads — is not any single number the build prints. The
 * build reports the initial bundle and a list of anonymous lazy chunks; it does
 * not say which chunk belongs to which feature, and it does not say whether a
 * change moved weight out of a lazy chunk or merely pushed it up into `main`.
 * Both look like "smaller chunk" if you only read the chunk.
 *
 * Usage:
 *   node scripts/analyze-bundle.mjs [stats.json]
 *   node scripts/analyze-bundle.mjs --save <name>          snapshot for later diffing
 *   node scripts/analyze-bundle.mjs --diff <before> [after] compare two snapshots
 *   node scripts/analyze-bundle.mjs --label <substr>        which chunk holds a source path
 *
 * Snapshots live in dist/bundle-snapshots/<name>.json and are gitignored via dist/.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { basename, join } from 'node:path'

const DEFAULT_STATS = 'dist/stats-build/stats.json'
const SNAPSHOT_DIR = 'dist/bundle-snapshots'

const kb = (b) => `${(b / 1024).toFixed(1)} kB`
const pad = (s, n) => String(s).padEnd(n)

/** Chunks the browser must fetch before anything renders. */
function isInitial(name) {
  const b = basename(name)
  return /^(main|polyfills|styles|runtime)-/.test(b) || /^(main|polyfills|styles|runtime)\./.test(b)
}

/**
 * A chunk's identity is the app source inside it, not its hashed filename —
 * which changes on every build and so cannot be compared across runs.
 */
function identify(output) {
  const src = Object.keys(output.inputs ?? {}).filter(
    (i) => i.startsWith('src/') && !i.includes('node_modules')
  )
  if (src.length === 0) return null
  // the shallowest, shortest path is usually the feature root
  return src.sort((a, b) => a.split('/').length - b.split('/').length || a.length - b.length)[0]
}

function summarise(statsPath) {
  const meta = JSON.parse(readFileSync(statsPath, 'utf8'))
  const js = Object.entries(meta.outputs ?? {}).filter(([k]) => k.endsWith('.js'))
  const chunks = js.map(([name, o]) => ({
    key: identify(o) ?? basename(name),
    file: basename(name),
    bytes: o.bytes,
    inputs: Object.keys(o.inputs ?? {}).length,
    initial: isInitial(name),
  }))
  return {
    totalBytes: chunks.reduce((s, c) => s + c.bytes, 0),
    initialBytes: chunks.filter((c) => c.initial).reduce((s, c) => s + c.bytes, 0),
    chunkCount: chunks.length,
    chunks,
  }
}

/** Per-package attribution, which is what tells you WHY a chunk grew. */
function packages(statsPath, chunkFilter = () => true) {
  const meta = JSON.parse(readFileSync(statsPath, 'utf8'))
  const totals = new Map()
  for (const [name, o] of Object.entries(meta.outputs ?? {})) {
    if (!name.endsWith('.js') || !chunkFilter(name)) continue
    for (const [path, info] of Object.entries(o.inputs ?? {})) {
      const bytes = info.bytesInOutput ?? 0
      let key
      if (path.includes('node_modules/')) {
        const after = path.split('node_modules/').pop()
        const parts = after.split('/')
        key = parts[0].startsWith('@') ? `${parts[0]}/${parts[1]}` : parts[0]
      } else {
        key = 'src/'
      }
      totals.set(key, (totals.get(key) ?? 0) + bytes)
    }
  }
  return totals
}

function printSummary(s, statsPath) {
  console.log(`\n${statsPath}`)
  console.log(`  total JS   ${kb(s.totalBytes)} across ${s.chunkCount} files`)
  console.log(`  initial    ${kb(s.initialBytes)}  <-- the number that gates first paint\n`)
  console.log('  largest chunks:')
  for (const c of [...s.chunks].sort((a, b) => b.bytes - a.bytes).slice(0, 15)) {
    console.log(
      `    ${pad(kb(c.bytes), 10)} ${c.initial ? 'INITIAL' : '  lazy '} ${pad(c.inputs + ' in', 9)} ${c.key}`
    )
  }
  console.log('\n  initial bundle by package:')
  const pkgs = packages(statsPath, isInitial)
  for (const [k, v] of [...pkgs].sort((a, b) => b[1] - a[1]).slice(0, 12)) {
    console.log(`    ${pad(kb(v), 10)} ${k}`)
  }
}

function printDiff(before, after) {
  const delta = (a, b) => {
    const d = b - a
    const sign = d > 0 ? '+' : ''
    return `${sign}${(d / 1024).toFixed(1)} kB`
  }
  console.log('\n=== bundle diff ===')
  console.log(`  total JS   ${kb(before.totalBytes)} -> ${kb(after.totalBytes)}   ${delta(before.totalBytes, after.totalBytes)}`)
  console.log(`  INITIAL    ${kb(before.initialBytes)} -> ${kb(after.initialBytes)}   ${delta(before.initialBytes, after.initialBytes)}`)
  if (after.initialBytes > before.initialBytes + 1024) {
    console.log('\n  WARNING: the initial bundle grew. Splitting a chunk can hoist its shared')
    console.log('  dependencies to the nearest common ancestor, which is often the initial')
    console.log('  bundle — total size stays flat while first paint gets worse.')
  }
  const byKey = (s) => new Map(s.chunks.map((c) => [c.key, c]))
  const [b, a] = [byKey(before), byKey(after)]
  console.log('\n  chunks changed:')
  for (const key of new Set([...b.keys(), ...a.keys()])) {
    const bb = b.get(key)?.bytes ?? 0
    const aa = a.get(key)?.bytes ?? 0
    if (Math.abs(aa - bb) < 2048) continue
    const tag = bb === 0 ? 'NEW  ' : aa === 0 ? 'GONE ' : '     '
    console.log(`    ${tag}${pad(delta(bb, aa), 12)} ${pad(kb(bb) + ' -> ' + kb(aa), 22)} ${key}`)
  }
}

const args = process.argv.slice(2)
if (args[0] === '--save') {
  const name = args[1]
  if (!name) throw new Error('--save needs a name')
  mkdirSync(SNAPSHOT_DIR, { recursive: true })
  const s = summarise(args[2] ?? DEFAULT_STATS)
  writeFileSync(join(SNAPSHOT_DIR, `${name}.json`), JSON.stringify(s, null, 2))
  console.log(`saved snapshot "${name}": initial ${kb(s.initialBytes)}, total ${kb(s.totalBytes)}`)
} else if (args[0] === '--diff') {
  const load = (n) => {
    const p = existsSync(n) ? n : join(SNAPSHOT_DIR, `${n}.json`)
    return p.endsWith('stats.json') ? summarise(p) : JSON.parse(readFileSync(p, 'utf8'))
  }
  printDiff(load(args[1]), args[2] ? load(args[2]) : summarise(DEFAULT_STATS))
} else if (args[0] === '--label') {
  const meta = JSON.parse(readFileSync(args[2] ?? DEFAULT_STATS, 'utf8'))
  for (const [name, o] of Object.entries(meta.outputs ?? {})) {
    if (!name.endsWith('.js')) continue
    const hits = Object.keys(o.inputs ?? {}).filter((i) => i.includes(args[1]))
    if (hits.length) {
      console.log(`${pad(kb(o.bytes), 10)} ${isInitial(name) ? 'INITIAL' : '  lazy '} ${basename(name)}`)
      for (const h of hits.slice(0, 6)) console.log(`             ${h}`)
    }
  }
} else {
  const p = args[0] ?? DEFAULT_STATS
  printSummary(summarise(p), p)
}
