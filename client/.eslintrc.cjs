// Single ESLint config for the client, kept as one .cjs file: ESLint 8
// resolves .eslintrc.js ahead of .eslintrc.json, so a second .eslintrc.*
// beside this one would shadow it and every file would parse as plain
// JavaScript. Do not add one.
//
// No `parserOptions.project` is set: none of the rules below need type
// information, and `createDefaultProgram: true` builds a fresh TS program
// per file, which exhausts the V8 heap on this codebase.

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

        // --- warning-level rules --------------------------------------------
        // Rules with a large existing violation count stay on as warnings so
        // `ng lint` can gate new errors; raise each back to "error" as its
        // count reaches zero.

        // new code uses standalone components and inject(); ~380 components
        // still declare standalone: false and ~555 use constructor injection
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
      // this list can only shrink:
      //   - formly field types are instantiated by their registered type name,
      //     so their selectors are never matched
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
        // ~110 templates still use == / !=
        '@angular-eslint/template/eqeqeq': 'warn',
      },
    },
  ],
}
