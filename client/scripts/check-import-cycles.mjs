#!/usr/bin/env node
/**
 * Fail the build on circular imports between first-party modules.
 *
 * Reads the esbuild metafile a `--stats-json` build already emits, so the graph
 * checked is the one that actually ships — module resolution, path aliases
 * (`@app/...`), and TypeScript erasure are all resolved by the real bundler
 * rather than re-implemented here. `import type` edges are erased before esbuild
 * sees them and correctly do not count.
 *
 * Only `import-statement` edges are considered. `dynamic-import` is excluded on
 * purpose: `import()` is how lazy routes work, it is evaluated on demand rather
 * than at module init, and a cycle through one is not the defect this guards.
 *
 * Why this is worth gating on: a cycle means the modules in it can never be
 * tree-shaken apart, so importing any one of them drags in all of them. In this
 * codebase the recurring shape was a shared formly registry that registers every
 * field type, imported by a modal that the registry itself registers — one
 * import of a two-field modal pulling in every select in the app. Cycles also
 * make module-init order significant, which produces `undefined` at import time
 * for whichever module in the loop is evaluated first.
 *
 * Usage:
 *   yarn build:stats                     # or any --stats-json build
 *   node scripts/check-import-cycles.mjs [statsBuildDir]
 *
 * Exits 1 if any first-party cycle is found.
 */
import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

/**
 * Cycles that are known, reviewed, and accepted. Keep this empty if at all
 * possible — it is a ratchet, not a backlog. An entry is the cycle's members
 * sorted and joined with ' + '; the failure output prints the exact string to
 * paste here, but add one only with a comment saying why it cannot be broken.
 */
const ALLOWED_CYCLES = new Set([])

const baseArg = process.argv.slice(2).find((a) => !a.startsWith('--'))
const base = resolve(process.cwd(), baseArg ?? 'dist/stats-build')
const statsPath = resolve(base, 'stats.json')

if (!existsSync(statsPath)) {
  console.error(
    `check-import-cycles: no metafile at ${statsPath}\n` +
      `Run \`yarn build:stats\` (or any build with --stats-json) first.`
  )
  process.exit(1)
}

const CODE = /\.[cm]?[jt]sx?$/
const isFirstParty = (p) => p.startsWith('src/') && CODE.test(p)

const { inputs } = JSON.parse(readFileSync(statsPath, 'utf8'))

/** @type {Map<string, string[]>} */
const adjacency = new Map()
for (const [file, meta] of Object.entries(inputs)) {
  if (!isFirstParty(file)) continue
  adjacency.set(
    file,
    (meta.imports ?? [])
      .filter((i) => i.kind === 'import-statement' && isFirstParty(i.path))
      .map((i) => i.path)
  )
}
// An import of a file esbuild never listed as an input can't be followed.
for (const [file, targets] of adjacency) {
  adjacency.set(
    file,
    targets.filter((t) => adjacency.has(t))
  )
}

/**
 * Tarjan's strongly-connected components, iteratively — the graph is a few
 * thousand nodes deep in places and a recursive walk risks blowing the stack.
 * Every SCC with more than one member contains at least one cycle.
 */
function stronglyConnectedComponents(adj) {
  let counter = 0
  const index = new Map()
  const lowlink = new Map()
  const onStack = new Set()
  const stack = []
  const components = []

  for (const root of adj.keys()) {
    if (index.has(root)) continue
    const work = [[root, 0]]
    while (work.length) {
      const frame = work[work.length - 1]
      const node = frame[0]

      if (frame[1] === 0) {
        index.set(node, counter)
        lowlink.set(node, counter)
        counter++
        stack.push(node)
        onStack.add(node)
      }

      let descended = false
      const edges = adj.get(node) ?? []
      for (let i = frame[1]; i < edges.length; i++) {
        const next = edges[i]
        if (!index.has(next)) {
          frame[1] = i + 1
          work.push([next, 0])
          descended = true
          break
        }
        if (onStack.has(next)) {
          lowlink.set(node, Math.min(lowlink.get(node), index.get(next)))
        }
      }
      if (descended) continue

      if (lowlink.get(node) === index.get(node)) {
        const component = []
        let member
        do {
          member = stack.pop()
          onStack.delete(member)
          component.push(member)
        } while (member !== node)
        components.push(component)
      }

      work.pop()
      if (work.length) {
        const parent = work[work.length - 1][0]
        lowlink.set(parent, Math.min(lowlink.get(parent), lowlink.get(node)))
      }
    }
  }
  return components
}

/**
 * An SCC proves a cycle exists but doesn't show one. Walk breadth-first from a
 * member back to itself, staying inside the component, to print the shortest
 * concrete loop — that's the thing a developer has to actually break.
 */
function shortestCycle(start, adj, members) {
  const previous = new Map()
  const seen = new Set([start])
  const queue = [start]
  while (queue.length) {
    const node = queue.shift()
    for (const next of adj.get(node) ?? []) {
      if (!members.has(next)) continue
      if (next === start) {
        const path = []
        for (let c = node; c !== start; c = previous.get(c)) path.push(c)
        path.push(start)
        path.reverse()
        path.push(start)
        return path
      }
      if (seen.has(next)) continue
      seen.add(next)
      previous.set(next, node)
      queue.push(next)
    }
  }
  return [start, start]
}

const cycles = []
for (const component of stronglyConnectedComponents(adjacency)) {
  const isCycle =
    component.length > 1 ||
    (adjacency.get(component[0]) ?? []).includes(component[0])
  if (!isCycle) continue

  const key = [...component].sort().join(' + ')
  if (ALLOWED_CYCLES.has(key)) continue
  cycles.push({
    key,
    members: component,
    path: shortestCycle(
      [...component].sort()[0],
      adjacency,
      new Set(component)
    ),
  })
}

const scanned = adjacency.size
if (!cycles.length) {
  console.log(`check-import-cycles: no cycles among ${scanned} first-party modules.`)
  process.exit(0)
}

console.error(
  `check-import-cycles: ${cycles.length} circular import(s) among ${scanned} first-party modules.\n`
)
for (const { key, members, path } of cycles) {
  console.error(`  ${members.length} module${members.length === 1 ? '' : 's'}:`)
  for (const step of path) console.error(`    ${step}`)
  console.error(`\n  If this is genuinely unbreakable, add to ALLOWED_CYCLES with a reason:`)
  console.error(`    '${key}'\n`)
}
console.error(
  `Common fixes, in order of preference:\n` +
    `  - Move the shared thing (an InjectionToken, a type, a constant) into its own\n` +
    `    leaf module that both sides import.\n` +
    `  - Register only the field types a form actually renders instead of importing a\n` +
    `    whole registry that registers the importer back.\n` +
    `  - Use \`import type\` when the reference is only a type; those edges are erased.\n` +
    `  - Resolve at render time (e.g. a formly \`fieldArray\` factory on the type's\n` +
    `    defaultOptions) rather than importing the resolver at module scope.`
)
process.exit(1)
