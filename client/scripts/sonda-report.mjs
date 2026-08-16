#!/usr/bin/env node
/**
 * Generate a Sonda treemap report from an existing `yarn build:stats` output.
 *
 * Why not `sonda-angular`: that entry point reads `angular.json` and looks for
 * `stats.json` under the build target's configured `outputPath`, which here is
 * `../server/public` — a directory holding ~1,800 TRACKED deploy artifacts that a
 * local build must never clobber. `yarn build:stats` deliberately redirects to
 * `dist/stats-build` via `--output-path`, which `angular.json` does not know
 * about, so `sonda-angular` would look in the wrong place (or push us into
 * clobbering the tracked output to make it look in the right one).
 *
 * This calls Sonda's public core directly against wherever the stats build
 * actually landed, keeping `server/public` untouched.
 *
 * Usage:
 *   node scripts/sonda-report.mjs [statsBuildDir]     default: dist/stats-build
 */
import { Config, processEsbuildMetafile } from 'sonda'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { basename, relative, resolve } from 'node:path'

const args = process.argv.slice(2)
const flags = new Set(args.filter((a) => a.startsWith('--')))
const baseArg = args.find((a) => !a.startsWith('--')) ?? 'dist/stats-build'
const base = resolve(process.cwd(), baseArg)
const statsPath = resolve(base, 'stats.json')

if (!existsSync(statsPath)) {
  console.error(`No metafile at ${statsPath}\nRun \`yarn build:stats\` first.`)
  process.exit(1)
}

/**
 * esbuild records outputs by bare filename ("main-XXXX.js"), but Sonda needs to
 * read the emitted files to measure compressed sizes — so the keys have to be
 * real paths relative to cwd. Same fix-up `sonda/angular` performs.
 */
function withRealPaths(metafile, baseDir) {
  const cwd = process.cwd()
  const byName = { ...metafile.outputs }
  metafile.outputs = {}
  for (const entry of readdirSync(baseDir, { encoding: 'utf8', recursive: true })) {
    const abs = resolve(baseDir, entry)
    const original = byName[basename(abs)]
    if (original) metafile.outputs[relative(cwd, abs)] = original
  }
  return metafile
}

const metafile = withRealPaths(JSON.parse(readFileSync(statsPath, 'utf8')), base)

const options = new Config(
  {
    // html for a human to explore, json so this is machine-readable too —
    // the JSON is what makes before/after comparison scriptable, and it carries
    // the `issues` array (circular imports and similar)
    format: ['html', 'json'],
    // static name, not the default `sonda_[index]`: [index] increments every run
    // and silently accumulates reports, which is the wrong default for a build
    // step that runs often
    filename: 'report',
    outputDir: '.sonda',
    // measure what users actually download, not raw bytes
    gzip: true,
    brotli: true,
    /**
     * Off by default. `deep` reads imported modules' source maps so a vendor
     * package breaks down into its own source files instead of appearing as one
     * opaque blob — the only way to see WHICH part of @apollo/client or ng-zorro
     * is being pulled in. It costs build time and makes the gzip/brotli figures
     * less accurate, so it is opt-in rather than always on.
     */
    deep: flags.has('--deep'),
    /**
     * Deliberately NOT enabling `sources`. It embeds the actual source code of
     * every asset in the report, which balloons the file and means the report
     * cannot be shared casually. Enable per-invocation if you need it.
     */
    sources: false,
    open: false,
  },
  { integration: 'angular' }
)
options.sourcesPathNormalizer = (p) => resolve(process.cwd(), p)

await processEsbuildMetafile(metafile, options)
const issues = JSON.parse(readFileSync('.sonda/report.json', 'utf8')).issues ?? []
console.log(`\nSonda wrote .sonda/report.{html,json} from ${baseArg}`)
if (issues.length) {
  console.log(`\n${issues.length} issue(s) detected:`)
  for (const i of issues) {
    console.log(`  [${i.severity}] ${i.message}`)
    for (const step of i.data?.cycle ?? []) console.log(`      ${step}`)
  }
} else {
  console.log('\nNo issues detected.')
}
