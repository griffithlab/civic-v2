// Single ESLint config for the client. Kept as one .cjs file on purpose: an
// empty .eslintrc.js used to sit next to .eslintrc.json and, because ESLint 8
// resolves .js ahead of .json, it silently won the lookup — every file was
// parsed as plain JavaScript and `yarn lint` reported ~1650 bogus "The keyword
// 'import' is reserved" errors. Nothing had actually been linted in a long
// while. Do not add a second .eslintrc.* here.
//
// No `parserOptions.project` is set: none of the rules below need type
// information, and the old config's `createDefaultProgram: true` built a fresh
// TS program per file, which exhausted the V8 heap on this codebase.

module.exports = {
  root: true,
  ignorePatterns: [
    'projects/**/*',
    // codegen output; already emitted with an eslint-disable header
    'src/app/generated/**',
    '**/*.gql.generated.ts',
  ],
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          { type: 'attribute', prefix: 'cvc', style: 'camelCase' },
        ],
        '@angular-eslint/component-selector': [
          'error',
          { type: 'element', prefix: 'cvc', style: 'kebab-case' },
        ],

        // --- legacy backlog -------------------------------------------------
        // These rules have a large pre-existing violation count that predates
        // this config being runnable at all. They stay ON so the debt is
        // visible, but as warnings so `ng lint` can gate new errors today.
        // Baseline counts: agent-artifacts/forms-refactor/lint-baseline.md
        // Raise each back to "error" as its backlog reaches zero.

        // ~380 components still declare standalone: false, and ~555 still use
        // constructor injection. The forms refactor and the view migrations
        // are actively removing both; new code uses standalone + inject().
        '@angular-eslint/prefer-standalone': 'warn',
        '@angular-eslint/prefer-inject': 'warn',

        '@angular-eslint/no-empty-lifecycle-method': 'warn',
        '@angular-eslint/no-input-rename': 'warn',
        '@angular-eslint/no-output-on-prefix': 'warn',
        '@angular-eslint/use-pipe-transform-interface': 'warn',
      },
    },
    {
      // test host components exist only inside a spec, so the cvc- prefix
      // conventions for the app's component surface do not apply to them
      files: ['*.spec.ts'],
      rules: {
        '@angular-eslint/component-selector': 'off',
        '@angular-eslint/directive-selector': 'off',
      },
    },
    {
      // Components attached through an attribute selector rather than an
      // element. They already carry the cvc prefix, but the rule's `style` only
      // accepts one casing, so the element/kebab-case config above cannot also
      // describe them.
      files: [
        'src/app/components/approvals/approvable/approvable.component.ts',
        'src/app/components/flags/flaggable/flaggable.component.ts',
      ],
      rules: {
        '@angular-eslint/component-selector': [
          'error',
          { type: 'attribute', prefix: 'cvc', style: 'camelCase' },
        ],
      },
    },
    {
      // Enumerated selector-naming exemptions. Kept as an explicit file list,
      // not a blanket downgrade, so the rules stay errors everywhere else and
      // this list can only shrink. Most of these are rewritten by the forms
      // refactor (see agent-artifacts/forms-refactor/approved-plan.md):
      //   - formly field types are instantiated by their registered type name,
      //     so their selectors are dead weight; phases 3-5 replace them
      //   - add-entity-form.directive is deleted in phase 6
      //   - [autofocus] deliberately hooks the native HTML attribute, so it
      //     cannot take a cvc prefix
      files: [
        'src/app/directives/auto-focus/auto-focus.directive.ts',
        'src/app/forms/wrappers/add-entity-form/add-entity-form.directive.ts',
        'src/app/forms/types/base/textarea/textarea.type.ts',
        'src/app/forms/types/molecular-profile-select/molecular-profile-select.type.ts',
        'src/app/forms/types/variant-select/variant-select.type.ts',
        'src/app/forms/types/query-builder/query-filter/query-filter.type.ts',
        'src/app/forms/types/query-builder/query-subfilters/query-subfilters.type.ts',
        'src/app/forms/types/query-builder/struct-filter/struct-filter.type.ts',
      ],
      rules: {
        '@angular-eslint/component-selector': 'off',
        '@angular-eslint/directive-selector': 'off',
      },
    },
    {
      // Routed views and pages are instantiated by the router, never written as
      // elements in a template, so their selectors are not part of the
      // component surface the cvc- prefix exists to namespace. Same for the
      // bootstrap component, whose selector is fixed by index.html.
      files: ['src/app/views/**/*.ts', 'src/app/app.component.ts'],
      rules: {
        '@angular-eslint/component-selector': 'off',
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        // ~110 templates still use == / !=; see the legacy backlog note above
        '@angular-eslint/template/eqeqeq': 'warn',
      },
    },
  ],
}
