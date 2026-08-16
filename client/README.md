# CIViC Client

The CIViC frontend: an Angular 22 single-page application that consumes the CIViC GraphQL API served by the Rails backend in `../server`.

## Stack

- [Angular 22](https://angular.dev/) (NgModule-based, built with the `@angular/build` application builder)
- [ng-zorro-antd 22](https://ng.ant.design/) — Ant Design UI components
- [Apollo Client 4](https://www.apollographql.com/docs/) + [apollo-angular](https://apollo-angular.com/) — GraphQL client
- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) — generates TypeScript types, Apollo Angular services, and fragment matchers from the schema
- [ngx-formly 7](https://formly.dev/) — dynamic forms (submission/revision forms, query builder)
- [Vitest](https://vitest.dev/) — unit/smoke tests, run through the Angular CLI
- TypeScript 6, ESLint, Prettier
- Yarn 4 (pinned via the `packageManager` field, `node-modules` linker)

## Prerequisites

- Node.js >= 22 (CI runs Node 24)
- Yarn 4 via Corepack:

```sh
corepack enable
yarn install
```

## Development server

```sh
yarn start
```

Serves the app with HMR at `http://127.0.0.1:4200`. API and auth requests are proxied to the Rails server at `localhost:3000` (see `proxy.config.json`), so start the backend first (`rails s` in `../server`).

`yarn start:production` serves a production-configuration build with watch on port 4210, useful for debugging production-only issues locally.

## GraphQL code generation

Generated code is derived from two sources (configured in `.graphqlrc.yml`):

1. **The server schema SDL** (`src/app/generated/server.model.graphql`) — produced by the Rails server, not by this package. After any server-side schema change, regenerate it with `bundle exec rake graphql:schema:idl` in `../server`, or use `yarn generate-apollo:full` to chain the dump and codegen in one command.

2. **Client-side documents** — `.gql` query/mutation/fragment files colocated with components under `src/`, plus client-only schema extensions in `src/app/graphql/schemas/`.

Regenerating the client artifacts:

```sh
yarn generate-apollo          # one-shot
yarn generate-apollo:start    # watch mode — regenerates as .gql files change
yarn generate-apollo:full     # server schema dump + one-shot codegen
```

This produces:

- `<name>.gql.generated.ts` next to each `.gql` document — its operation types and injectable Apollo services (near-operation-file preset)
- `src/app/generated/civic.apollo.types.ts` — schema-level types (enums, input/object types, scalars)
- `src/app/generated/civic.possible-types.ts` (fragment matcher) and `civic.apollo-helpers.ts` (cache type policies)

Import operation types and `*GQL` services from the colocated `*.gql.generated.ts` module next to the `.gql` document, and schema-level types from `@app/generated/civic.apollo.types`. Keeping these imports direct (no barrels) lets each lazy route chunk carry only the GraphQL operations it uses. A post-codegen hook (`scripts/validate-generated-graphql.mjs`) prunes generated files orphaned by `.gql` deletions and fails on import cycles between generated modules. All generated files are committed, and the `codegen_drift` CI job fails if they drift from the committed schema and documents — so never hand-edit them, and don't let formatters touch them (they're excluded in `.prettierignore`).

A fragment shared by several `.gql` documents should live in its own `*.fragments.gql` file (see `activity-feed.fragments.gql`): defining it beside one of its consumers can create import cycles between generated modules, which break fragment-document interpolation at runtime.

A typical dev session runs three processes: the Rails server, `yarn start`, and `yarn generate-apollo:start`.

## Scripts reference

| Script                       | Purpose                                                                                  |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| `yarn start`                 | Dev server with HMR at `127.0.0.1:4200`, proxying to the backend                         |
| `yarn start:production`      | Dev server with production configuration on port 4210                                    |
| `yarn build`                 | Production build, output to `../server/public/`                                          |
| `yarn build:watch`           | Production build in watch mode                                                           |
| `yarn build:stats`           | Production build to `dist/stats-build/` emitting `stats.json` for bundle analysis        |
| `yarn generate-apollo`       | Run GraphQL codegen once                                                                 |
| `yarn generate-apollo:start` | GraphQL codegen in watch mode                                                            |
| `yarn generate-apollo:full`  | Server schema SDL dump followed by one-shot codegen                                      |
| `yarn schema:dump`           | Dump the server GraphQL schema SDL (runs `rake graphql:schema:idl` in `../server`)       |
| `yarn generate-icons`        | Optimize SVGs in `src/assets/icons/` (svgo) and regenerate icon TS constants (svg-to-ts) |
| `yarn generate-docs-rst`     | Generate icon data + RST docs (used by the civic-docs project)                           |
| `yarn test`                  | Run unit/smoke tests with Vitest via the Angular CLI                                     |
| `yarn lint`                  | Run ESLint over `src/**/*.ts` and templates                                              |
| `yarn analyze`               | Summarise or diff the JS chunks in a `build:stats` metafile                              |
| `yarn analyze:styles`        | Attribute `styles.css` bytes to the ng-zorro packages that produced them                 |
| `yarn check:cycles`          | Fail on circular imports between first-party modules (also a CI job)                     |

The three analysis scripts all read the output of `yarn build:stats`, so run that first.

## Testing

```sh
yarn test
```

Tests run with Vitest through the Angular CLI's unit-test builder (`src/test-setup.ts` is the setup file). Coverage is currently a smoke-test skeleton — app bootstrap, route rendering, and query-builder specs (`src/app/*.smoke.spec.ts`) — intended to catch breakage during dependency upgrades.

## Formatting

Prettier is the source of truth for formatting. Run it on touched files before committing:

```sh
yarn prettier --write <files>
```

## Styles & theming

`src/styles.less` is the single global stylesheet. It does **not** import all of ng-zorro: it pulls in the theme entry plus one `<component>/style/entry.less` per component the app actually uses. When adopting a new `nz-*` component, add its entry there — otherwise the component renders unstyled. Entries pull their own style dependencies, so only the top-level component needs listing.

`src/themes/` holds the CIViC theme: `default.less` (imported last by `styles.less`), `global-variables.less`, and per-component overrides in `themes/overrides/`. `angular.json` sets `stylePreprocessorOptions.includePaths` to `src/`, `src/themes/`, and `node_modules`, which is why `@import 'themes/...'` and bare ng-zorro paths resolve.

`postcss.config.json` registers `scripts/postcss-strip-rtl.cjs`, a local plugin that drops RTL rules (`[dir="rtl"]`, `.ant-*-rtl`) from the compiled CSS. The app is LTR-only; if RTL support is ever wanted, remove that plugin first.

## Bundle & bootstrap invariants

These are load-time invariants, not style preferences — breaking one silently regresses first paint:

- **No blocking work at bootstrap.** There is deliberately no `APP_INITIALIZER`/`provideAppInitializer` performing a network request. Anything that needs server state fetches it reactively and degrades if it fails (see `environment-banner.component.ts`). Adding a blocking initializer puts a full round-trip in front of first render.
- **`CvcForms2Module` must not be imported by `AppModule`.** The Formly field-type registry pulls in the whole forms tree; it belongs to the lazy form-config modules that use it. `FormlyModule.forRoot()` stays at the root injector only (see the note in `forms/forms.module.ts`).
- **Eager shell components must not statically import form modules.** Where an always-loaded component opens a form (e.g. the Add Variant modal in `components/layout/viewer-button/`), load it with a dynamic `import()` + `createNgModule()` into a `ViewContainerRef` outlet rather than importing the module in the component's NgModule.
- **Import generated GraphQL modules directly**, never through a barrel — see the codegen section above. Barrels re-concentrate every operation into one chunk.

Measured effects of these are recorded outside the repo in the local `agent-artifacts/` scratch directory.

## Build output

`yarn build` writes directly into `../server/public/`, where the Rails app serves it in production. There is no separate `dist/` deployment artifact.

`yarn build:stats` is the exception: it builds to the gitignored `dist/stats-build/` and emits `stats.json`, an **esbuild metafile** — upload it to <https://esbuild.github.io/analyze/> to inspect chunk composition. It is not a webpack stats file, so webpack-era analyzers cannot read it. Keeping it out of `../server/public/` matters because CI commits that directory wholesale.

## Project layout

```
src/app/
  components/   # entity presentation components (genes, variants, evidence, ...)
  core/         # services, utilities, state
  directives/
  forms/        # ngx-formly form configs, types, and wrappers
  generated/    # schema-level codegen output (types, possible-types, helpers) — do not edit by hand
  graphql/      # Apollo client setup, cache type policies, client-side schema extensions
  layout/       # app shell, navigation
  views/        # routed page components
```

Other files at the client root worth knowing: `styles.less` and `themes/` (above), `scripts/` (codegen validation, the PostCSS RTL-strip plugin, icon/doc generators), `proxy.config.json` (dev API proxying), and the `index.html` / `index.prod.html` split — the production index is the one carrying the analytics tag and its `preconnect`.

`.gql` documents and their generated `*.gql.generated.ts` modules live throughout
`components/`, `forms/`, `views/`, and `core/`, colocated with the code that uses them.
