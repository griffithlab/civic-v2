import { AbstractControl } from '@angular/forms'
import { variantReviseFormInitialModel } from '@app/forms2/models/variant-revise.model'
import assignFieldConfigDefaultValues from '@app/forms2/utilities/assign-field-default-values'
import { CvcFormCardWrapperProps } from '@app/forms2/wrappers/form-card/form-card.wrapper'
import { CvcFormLayoutWrapperProps } from '@app/forms2/wrappers/form-layout/form-layout.wrapper'
import { FormlyFieldConfig } from '@ngx-formly/core'

const formFieldConfig: FormlyFieldConfig[] = [
  // form-layout wrapper embeds the form in an nz-grid row, allowing the form to be placed adjacent to other controls or page elements. Currently, it provides a toggleable dev panel. Could be used to add a preview of the entity being added/edited, or more extensive feedback like lists of similar entities, etc.
  {
    wrappers: ['form-layout'],
    props: <CvcFormLayoutWrapperProps>{
      submitLabel: 'Revise Variant',
      showDevPanel: false,
    },
    fieldGroup: [
      {
        key: 'clientMutationId',
        props: {
          hidden: true,
        },
      },
      // form-card wraps the form fields in a card, providing a place to put a title, and other controls e.g. form options, status
      {
        key: 'fields',
        wrappers: ['form-card'],
        props: <CvcFormCardWrapperProps>{
          title: 'Revise Variant',
        },
        fieldGroup: [
          {
            key: 'geneId',
            type: 'gene-select',
            props: {
              description: 'Enter an Entrez Gene for this Variant',
            },
          },
          {
            key: 'name',
            type: 'input',
            wrappers: ['form-field'],
            props: {
              placeholder: 'Enter a name for this Variant',
              description:
                "Enter the name of the Variant according to the <a href='https://civic.readthedocs.io/en/latest/model/variants/name.html#curating-variant-names' target='blank'>Variant Curation SOP</a>",
              extraType: 'prompt',
              label: 'Name',
              required: true,
              rows: 1,
            },
          },
          {
            key: 'aliases',
            type: 'tag-multi-input',
            wrappers: ['form-field'],
            props: {
              label: 'Aliases',
              description:
                'List any aliases commonly used to refer to this Variant',
              extraType: 'prompt',
              placeholder: 'Enter Alias and hit return',
            },
          },
          {
            key: 'hgvsDescriptions',
            type: 'tag-multi-input',
            wrappers: ['form-field'],
            props: {
              label: 'HGVS Descriptions',
              description: 'HGVS Descriptions',
              extraType: 'prompt',
              placeholder: 'Enter HGVS and hit return',
            },
          },
          {
            key: 'referenceBuild',
            type: 'reference-build-select',
          },
          {
            key: 'ensemblVersion',
            type: 'input',
            wrappers: ['form-field'],
            validators: {
              nccnVersionNumber: {
                expression: (c: AbstractControl) => c.value ? /^\d{2,3}$/.test(c.value) : true,
                message: (_: any, field: FormlyFieldConfig) => `"${field.formControl?.value}" does not appear to be an Ensembl version number`,
              },
            },
            props: {
              label: 'Ensembl Version',
              description: "Enter a valid Ensembl database version (e.g. 75)"
            },
          },
          {
            key: 'referenceBases',
            type: 'input',
            wrappers: ['form-field'],
            validators: {
              nccnVersionNumber: {
                expression: (c: AbstractControl) => c.value ? /^[ACTG\\]+$/.test(c.value) : true,
                message: (_: any, field: FormlyFieldConfig) => `"${field.formControl?.value}" contains invalid characters.`,
              },
            },
            props: {
              label: 'Reference Bases',
              description: "The nucleotide(s) of the reference genome affected by the variant. Only used for SNVs and Indels (otherwise leave blank)"
            },
          },
          {
            key: 'variantBases',
            type: 'input',
            wrappers: ['form-field'],
            validators: {
              nccnVersionNumber: {
                expression: (c: AbstractControl) => c.value ? /^[ACTG\\]+$/.test(c.value) : true,
                message: (_: any, field: FormlyFieldConfig) => `"${field.formControl?.value}" contains invalid characters.`,
              },
            },
            props: {
              label: 'Variant Bases',
              description: "The nucleotide(s) of the variant allele. Only used for SNVs and Indels (otherwise leave blank)"
            },
          },
        ],
      },
      {
        wrappers: ['form-footer'],
        fieldGroup: [
          {
            key: 'comment',
            type: 'textarea',
            props: {
              label: 'Comment',
              placeholder: 'Please enter a comment describing your revisions.',
              required: true,
              minLength: 10,
            },
          },
          {
            key: 'organizationId',
            type: 'org-submit-button',
            props: {
              submitLabel: 'Submit Variant Revisions',
            },
          },
        ],
      },
    ],
  },
]
export const variantReviseFields: FormlyFieldConfig[] =
  assignFieldConfigDefaultValues(
    formFieldConfig,
    variantReviseFormInitialModel
  )
