import { AbstractControl } from '@angular/forms'
import { Chromosomes } from '@app/forms/utilities/input-formatters'
import { variantReviseFormInitialModel } from '@app/forms/models/variant-revise.model'
import assignFieldConfigDefaultValues from '@app/forms/utilities/assign-field-default-values'
import { CvcFormCardWrapperProps } from '@app/forms/wrappers/form-card/form-card.wrapper'
import { CvcFormLayoutWrapperProps } from '@app/forms/wrappers/form-layout/form-layout.wrapper'
import { FormlyFieldConfig } from '@ngx-formly/core'

const formFieldConfig: FormlyFieldConfig[] = [
  // form-layout wrapper embeds the form in an nz-grid row, allowing the form to be placed adjacent to other controls or page elements. Currently, it provides a toggleable dev panel. Could be used to add a preview of the entity being added/edited, or more extensive feedback like lists of similar entities, etc.
  {
    wrappers: ['form-layout'],
    props: <CvcFormLayoutWrapperProps>{
      submitLabel: 'Revise Variant',
      showDevPanel: true,
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
              required: true,
            },
          },
          {
            key: 'name',
            type: 'base-input',
            wrappers: ['form-field'],
            props: {
              placeholder: 'Enter a name for this Variant',
              description:
                "Enter the name of the Variant according to the <a href='https://civic.readthedocs.io/en/latest/model/variants/name.html#curating-variant-names' target='blank'>Variant Curation SOP</a>",
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
              tooltip:
                'Human Genome Variation Society nomenclature descriptions relevant to this variant',
              placeholder: 'Enter HGVS and hit return',
            },
          },
          {
            key: 'clinvarIds',
            type: 'clinvar-multi-input',
            wrappers: ['form-field'],
            props: {
              label: 'ClinVar IDs',
              description:
                'Specify if Clinvar IDs exist, or if they are not applicable for this variant.',
            },
          },
          {
            key: 'variantTypeIds',
            type: 'variant-type-multi-select',
            wrappers: ['form-field'],
          },
          {
            template: "<h4><u>Primary (5') Coordinates</u></h4>",
            props: {
              colSpan: 24,
            },
          },
          {
            key: 'referenceBuild',
            type: 'reference-build-select',
          },
          {
            key: 'ensemblVersion',
            type: 'base-input',
            wrappers: ['form-field'],
            validators: {
              nccnVersionNumber: {
                expression: (c: AbstractControl) =>
                  c.value ? /^\d{2,3}$/.test(c.value) : true,
                message: (_: any, field: FormlyFieldConfig) =>
                  `"${field.formControl?.value}" does not appear to be an Ensembl version number`,
              },
            },
            props: {
              label: 'Ensembl Version',
              description: 'Enter a valid Ensembl database version (e.g. 75)',
            },
          },
          {
            key: 'referenceBases',
            type: 'base-input',
            wrappers: ['form-field'],
            validators: {
              nccnVersionNumber: {
                expression: (c: AbstractControl) =>
                  c.value ? /^[ACTG\\]+$/.test(c.value) : true,
                message: (_: any, field: FormlyFieldConfig) =>
                  `"${field.formControl?.value}" contains invalid characters.`,
              },
            },
            props: {
              label: 'Reference Bases',
              description:
                'The nucleotide(s) of the reference genome affected by the variant. Only used for SNVs and Indels (otherwise leave blank)',
            },
          },
          {
            key: 'variantBases',
            type: 'base-input',
            wrappers: ['form-field'],
            validators: {
              nccnVersionNumber: {
                expression: (c: AbstractControl) =>
                  c.value ? /^[ACTG\\]+$/.test(c.value) : true,
                message: (_: any, field: FormlyFieldConfig) =>
                  `"${field.formControl?.value}" contains invalid characters.`,
              },
            },
            props: {
              label: 'Variant Bases',
              description:
                'The nucleotide(s) of the variant allele. Only used for SNVs and Indels (otherwise leave blank)',
            },
          },
          {
            key: 'chromosome',
            type: 'select',
            wrappers: ['form-field'],
            props: {
              label: 'Chromosome',
              options: Chromosomes,
              description:
                'Specify the chromosome in which this variant occurs (e.g. 17).',
            },
          },
          {
            key: 'start',
            type: 'base-input',
            wrappers: ['form-field'],
            validators: {
              isNumeric: {
                expression: (c: AbstractControl) =>
                  c.value ? /^\d+$/.test(c.value) : true,
                message: (_: any, field: FormlyFieldConfig) =>
                  'Start coordinate must be numeric',
              },
            },
            props: {
              label: 'Start',
              description:
                'Enter the left/first coordinate of this variant. Must be ≤ the Stop coordinate. Coordinate must be compatible with the selected reference build.',
            },
          },
          {
            key: 'stop',
            type: 'base-input',
            wrappers: ['form-field'],
            validators: {
              isNumeric: {
                expression: (c: AbstractControl) =>
                  c.value ? /^\d+$/.test(c.value) : true,
                message: (_: any, field: FormlyFieldConfig) =>
                  'Stop coordinate must be numeric',
              },
            },
            props: {
              label: 'Stop',
              description:
                'Provide the right/second coordinate of this variant. Must be ≥ the Start coordinate. Coordinate must be compatible with the selected reference build.',
            },
          },
          {
            key: 'representativeTranscript',
            type: 'base-input',
            wrappers: ['form-field'],
            props: {
              label: 'Representative Transcript',
              description:
                'Specify a transcript ID, including version number (e.g. ENST00000348159.4, the canonical transcript defined by Ensembl).',
            },
          },
          {
            template: "<h4><u>Secondary (3') Coordinates</u></h4>",
            props: {
              colSpan: 24,
            },
          },
          {
            key: 'chromosome2',
            type: 'select',
            wrappers: ['form-field'],
            props: {
              label: 'Chromosome',
              options: Chromosomes,
              description:
                'If this variant is a fusion (e.g. BCR-ABL1), specify the chromosome name, coordinates, and representative transcript for the 3-prime partner.',
            },
          },
          {
            key: 'start2',
            type: 'base-input',
            wrappers: ['form-field'],
            validators: {
              isNumeric: {
                expression: (c: AbstractControl) =>
                  c.value ? /^\d+$/.test(c.value) : true,
                message: (_: any, field: FormlyFieldConfig) =>
                  'Start coordinate must be numeric',
              },
            },
            props: {
              label: 'Start',
              description:
                'Enter the left/first coordinate of this 3-prime partner fusion variant. Must be ≤ the Stop coordinate. Coordinate must be compatible with the selected reference build.',
            },
          },
          {
            key: 'stop2',
            type: 'base-input',
            wrappers: ['form-field'],
            validators: {
              isNumeric: {
                expression: (c: AbstractControl) =>
                  c.value ? /^\d+$/.test(c.value) : true,
                message: (_: any, field: FormlyFieldConfig) =>
                  'Stop coordinate must be numeric',
              },
            },
            props: {
              label: 'Stop',
              description:
                'Provide the right/second coordinate of this 3-prime partner fusion variant. Must be ≥ the Start coordinate. Coordinate must be compatible with the selected reference build.',
            },
          },
          {
            key: 'representativeTranscript2',
            type: 'base-input',
            wrappers: ['form-field'],
            props: {
              label: 'Representative Transcript',
              description:
                'Specify a transcript ID, including version number (e.g. ENST00000348159.4, the canonical transcript defined by Ensembl).',
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
            type: 'cvc-cancel-button',
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
  assignFieldConfigDefaultValues(formFieldConfig, variantReviseFormInitialModel)
