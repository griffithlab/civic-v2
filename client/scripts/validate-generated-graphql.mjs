#!/usr/bin/env node
// post-codegen validation of the colocated *.gql.generated.ts modules; runs
// as the codegen afterAllFileWrite hook (hook file arguments ignored)
//
// 1. prunes generated files whose .gql source was removed or renamed
// 2. fails on import cycles between generated modules: a fragment document
//    imported from a partially-initialized module interpolates as
//    `undefined` at runtime. Break a cycle by moving the shared fragments
//    into their own *.fragments.gql (see activity-feed.fragments.gql)
import { globSync, readFileSync, rmSync, existsSync } from 'node:fs'
import { dirname, join, normalize, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const clientRoot = join(dirname(fileURLToPath(import.meta.url)), '..')

const files = globSync('src/**/*.gql.generated.ts', { cwd: clientRoot }).sort()

// prune generated files whose .gql source no longer exists
const kept = []
for (const file of files) {
  const source = file.replace(/\.gql\.generated\.ts$/, '.gql')
  if (existsSync(join(clientRoot, source))) {
    kept.push(file)
  } else {
    rmSync(join(clientRoot, file))
    console.warn(`[generated] pruned orphaned ${file} (no ${source})`)
  }
}

// build the generated-module import graph
const graph = new Map()
for (const file of kept) {
  const content = readFileSync(join(clientRoot, file), 'utf8')
  const deps = []
  for (const [, spec] of content.matchAll(/from '(\.[^']*\.gql\.generated)'/g)) {
    deps.push(normalize(join(dirname(file), spec + '.ts')))
  }
  graph.set(file, deps)
}

// Tarjan SCC: any component with >1 module is a cycle
let counter = 0
const index = new Map()
const lowlink = new Map()
const stack = []
const onStack = new Set()
const cycles = []
function connect(v) {
  index.set(v, counter)
  lowlink.set(v, counter)
  counter++
  stack.push(v)
  onStack.add(v)
  for (const w of graph.get(v) ?? []) {
    if (!index.has(w)) {
      connect(w)
      lowlink.set(v, Math.min(lowlink.get(v), lowlink.get(w)))
    } else if (onStack.has(w)) {
      lowlink.set(v, Math.min(lowlink.get(v), index.get(w)))
    }
  }
  if (lowlink.get(v) === index.get(v)) {
    const scc = []
    let w
    do {
      w = stack.pop()
      onStack.delete(w)
      scc.push(w)
    } while (w !== v)
    if (scc.length > 1) cycles.push(scc)
  }
}
for (const v of graph.keys()) if (!index.has(v)) connect(v)

if (cycles.length > 0) {
  console.error('[generated] import cycles between generated modules (fragment')
  console.error('docs will interpolate as undefined at runtime). Move shared')
  console.error('fragments into their own *.fragments.gql file:')
  for (const scc of cycles) {
    console.error(`  cycle of ${scc.length}:`)
    for (const f of scc.sort()) console.error(`    ${relative(clientRoot, join(clientRoot, f))}`)
  }
  process.exit(1)
}
