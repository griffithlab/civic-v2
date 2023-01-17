import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core'

import { AbstractControl, UntypedFormGroup } from '@angular/forms'

import { Subject } from 'rxjs'

import { takeUntil } from 'rxjs/operators'

import {
  VariantRevisableFieldsGQL,
  Organization,
  SuggestVariantRevisionInput,
  Maybe,
  SourceSource,
  RevisableVariantFieldsFragment,
  ReferenceBuild,
  CoordinateFieldsFragment,
  SuggestVariantRevisionGQL,
  SuggestVariantRevisionMutation,
  SuggestVariantRevisionMutationVariables,
  ModeratedEntities,
  RevisionStatus,
  VariantDetailGQL,
  RevisionsGQL,
} from '@app/generated/civic.apollo'

import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import * as fmt from '@app/forms/config/utilities/input-formatters'
import { $enum } from 'ts-enum-util'
import { formatReferenceBuildEnum } from '@app/core/utilities/enum-formatters/format-reference-build-enum'
import {
  Chromosomes,
  ClinvarOptions,
} from '@app/forms/config/utilities/input-formatters'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'

interface FormSource {
  id?: number
  sourceType?: SourceSource
  citationId?: string
  citation?: string
}

interface FormGene {
  id: number
  name: string
}

interface FormVariantType {
  id: number
  name: string
  soid: string
}

interface FormModel {
  fields: {
    id: number
    name: string
    variantAliases: string[]
    clinvarStatus: ClinvarOptions
    clinvarIds: string[]
    gene: FormGene
    referenceBuild?: ReferenceBuild
    ensemblVersion?: number
    hgvsDescriptions: string[]
    variantTypes: FormVariantType[]
    primaryCoordinates?: CoordinateFieldsFragment
    secondaryCoordinates?: CoordinateFieldsFragment
    referenceBases: Maybe<string>
    variantBases: Maybe<string>
    comment?: string
    organization: Maybe<Organization>
  }
}

@Component({
  selector: 'cvc-variant-revise-form',
  templateUrl: './variant-revise.form.html',
  styleUrls: ['./variant-revise.form.less'],
})
export class VariantReviseForm implements AfterViewInit, OnDestroy {
  @Input() variantId!: number
  private destroy$!: Subject<void>

  suggestRevisionMutator: MutatorWithState<
    SuggestVariantRevisionGQL,
    SuggestVariantRevisionMutation,
    SuggestVariantRevisionMutationVariables
  >

  variantRevisionInput!: SuggestVariantRevisionInput

  success: boolean = false
  noNewRevisions: boolean = false
  errorMessages: string[] = []
  loading: boolean = false

  formModel: Maybe<FormModel>
  formGroup: UntypedFormGroup = new UntypedFormGroup({})
  formFields: FormlyFieldConfig[]
  formOptions: FormlyFormOptions = {}

  formControls!: { [key: string]: AbstractControl }

  markAsTouched!: () => void

  constructor(
    private suggestRevisionGQL: SuggestVariantRevisionGQL,
    private networkErrorService: NetworkErrorsService,
    private revisableFieldsGQL: VariantRevisableFieldsGQL,
    private variantDetailGQL: VariantDetailGQL,
    private revisionsGQL: RevisionsGQL
  ) {
    this.suggestRevisionMutator = new MutatorWithState(networkErrorService)

    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-container'],
        templateOptions: {
          label: 'Suggest Variant Revision Form',
        },
        fieldGroup: [
          {
            key: 'id',
            type: 'input',
            hide: true,
          },
          {
            key: 'name',
            type: 'input',
            templateOptions: {
              label: 'Name',
              helpText:
                'Enter the name of the Variant according to the <a href="https://civic.readthedocs.io/en/latest/model/variants/name.html#curating-variant-names" target="_blank">Variant Curation SOP</a>',
              required: true,
            },
          },
          {
            key: 'variantAliases',
            type: 'multi-field',
            wrappers: ['form-field'],
            templateOptions: {
              label: 'Variant Aliases',
              addText: 'Add an Alias',
              helpText:
                'List any aliases commonly used to refer to this variant.',
            },
            fieldArray: {
              type: 'tag-input',
              templateOptions: {
                required: false,
                placeholder: 'Add Alias',
                minLength: 3,
              },
            },
            // validators: {
            //   ip: {
            //     expression: (c: any) => {
            //       console.log(c);
            //       return true;
            //       // const sum = c.value
            //       //   .map(v => v.investmentName)
            //       //   .reduce((sum, investmentName) => sum += investmentName, 0);

            //       // return sum === 10;
            //     },
            //     message: (error: any, field: FormlyFieldConfig) => `sum !== 10`,
            //   },
            // },
          },
          {
            key: 'hgvsDescriptions',
            type: 'multi-field',
            wrappers: ['form-field'],
            templateOptions: {
              label: 'HGVS Descriptions',
              addText: 'Add an HGVS Description',
              helpText:
                'Please specify any HGVS descriptions for this variant.',
            },
            fieldArray: {
              type: 'tag-input',
              templateOptions: {
                required: false,
                placeholder: 'Enter an HGVS string',
              },
            },
          },
          {
            key: 'clinvarStatus',
            type: 'select',
            templateOptions: {
              label: 'Do Clinvar IDs exist for this variant?',
              placeholder: 'Select Clinvar ID status',
              helpText:
                'Specify if Clinvar IDs exist, or if they are not applicable for this variant.',
              options: [
                {
                  value: ClinvarOptions.NotApplicable,
                  label: 'Clinvar IDs not applicable for this variant',
                },
                {
                  value: ClinvarOptions.NoneFound,
                  label: 'Clinvar IDs do not exist for this variant',
                },
                {
                  value: ClinvarOptions.Found,
                  label: 'Clinvar IDs were found for this variant',
                },
              ],
            },
          },
          {
            key: 'clinvarIds',
            type: 'multi-field',
            wrappers: ['form-field'],
            templateOptions: {
              label: 'ClinVar IDs',
              addText: 'Add a ClinVar ID',
              helpText:
                'Specify any corresponding ClinVar identifiers for this variant.',
            },
            fieldArray: {
              type: 'tag-input',
              templateOptions: {
                required: false,
                placeholder: 'Enter a ClinVar ID',
              },
            },
            validators: {
              validation: ['clinvar'],
            },
            hideExpression: (m: any, st: any, ff?: FormlyFieldConfig) => {
              return ff!.form!.value.clinvarStatus !== ClinvarOptions.Found
            },
          },
          {
            key: 'variantTypes',
            type: 'multi-field',
            wrappers: ['form-field'],
            templateOptions: {
              label: 'Variant Types',
              addText: 'Add a Variant Type',
              helpText:
                'Add one or more variant types from the <a href="http://www.sequenceontology.org/browser/" title="Opens a new tab for the Sequence Ontology Browser" target="_blank">Sequence Ontology</a> (e.g., missense, loss-of-function). Be specific as possible, avoid the addition of root concepts, and use the <i>sequence_variant</i> tree of the sequence ontology.',
            },
            fieldArray: {
              type: 'variant-type-input',
              templateOptions: {
                required: false,
              },
            },
          },
          {
            template: '<h3>Primary Coordinates</h3>',
          },
          {
            key: 'referenceBuild',
            type: 'select',
            defaultValue: ReferenceBuild.Grch37,
            templateOptions: {
              label: 'Reference Build',
              required: false,
              helpText:
                'Specify the human genome reference sequence from which these coordinates are obtained.',
              options: $enum(ReferenceBuild).map((value) => {
                return { value: value, label: formatReferenceBuildEnum(value) }
              }),
            },
          },
          {
            key: 'ensemblVersion',
            type: 'cvc-ensembl-input',
          },
          {
            key: 'referenceBases',
            type: 'input',
            defaultValue: undefined,
            templateOptions: {
              label: 'Reference Bases',
              helpText:
                'The nucleotide(s) of the reference genome affected by the variant. Only used for SNVs and Indels (otherwise leave blank).',
              required: false,
            },
            validators: {
              validation: ['nucleotide'],
            },
          },
          {
            key: 'variantBases',
            type: 'input',
            defaultValue: undefined,
            templateOptions: {
              label: 'Variant Bases',
              helpText:
                'The nucleotide(s) of the variant allele. Only used for SNVs and Indels (otherwise leave blank).',
              required: false,
            },
            validators: {
              validation: ['nucleotide'],
            },
          },
          {
            key: 'primaryCoordinates.chromosome',
            type: 'select',
            defaultValue: undefined,
            templateOptions: {
              label: 'Chromosome',
              helpText:
                'Specify the chromosome in which this variant occurs (e.g. 17).',
              required: false,
              options: Chromosomes,
            },
          },
          {
            key: 'primaryCoordinates.start',
            type: 'input',
            templateOptions: {
              label: 'Start',
              helpText:
                'Enter the left/first coordinate of this variant. Must be &leq; the Stop coordinate. Coordinate must be compatible with the selected reference build.',
              required: false,
            },
            validators: {
              validation: ['integer'],
            },
          },
          {
            key: 'primaryCoordinates.stop',
            type: 'input',
            templateOptions: {
              label: 'Stop',
              helpText:
                'Provide the right/second coordinate of this variant. Must be &geq; the Start coordinate. Coordinate must be compatible with the selected reference build.',
              required: false,
            },
            validators: {
              validation: ['integer'],
            },
          },
          {
            key: 'primaryCoordinates.representativeTranscript',
            type: 'input',
            templateOptions: {
              label: 'Representative Transcript',
              helpText:
                'Specify a transcript ID, including version number (e.g. ENST00000348159.4, the canonical transcript defined by Ensembl).',
            },
          },
          {
            template: '<h3>Secondary Coordinates</h3>',
          },
          {
            key: 'secondaryCoordinates.chromosome',
            type: 'select',
            defaultValue: undefined,
            templateOptions: {
              label: 'Chromosome',
              required: false,
              options: Chromosomes,
              helpText:
                'If this variant is a fusion (e.g. BCR-ABL1), specify the chromosome name, coordinates, and representative transcript for the 3-prime partner.',
            },
          },
          {
            key: 'secondaryCoordinates.start',
            type: 'input',
            templateOptions: {
              label: 'Start',
              helpText:
                'Enter the left/first coordinate of this 3-prime partner fusion variant. Must be &leq; the Stop coordinate. Coordinate must be compatible with the selected reference build.',
            },
            validators: {
              validation: ['integer'],
            },
          },
          {
            key: 'secondaryCoordinates.stop',
            type: 'input',
            templateOptions: {
              label: 'Stop',
              helpText:
                'Provide the right/second coordinate of this 3-prime partner fusion variant. Must be &geq; the Start coordinate. Coordinate must be compatible with the selected reference build.',
            },
            validators: {
              validation: ['integer'],
            },
          },
          {
            key: 'secondaryCoordinates.representativeTranscript',
            type: 'input',
            templateOptions: {
              label: 'Representative Transcript',
              helpText:
                'Specify a transcript ID, including version number (e.g. ENST00000348159.4, the canonical transcript defined by Ensembl).',
            },
          },
          {
            key: 'comment',
            type: 'comment-textarea',
            templateOptions: {
              label: 'Comment',
              placeholder:
                'Please enter a comment describing your revision to this variant.',
              helpText:
                'Please enter a comment describing your revision to this variant.',
              required: false,
              minLength: 10,
            },
          },
          {
            key: 'cancel',
            type: 'cancel-button',
            templateOptions: {
              redirectPath: '../..',
            },
          },
          {
            key: 'organization',
            type: 'org-submit-button',
            templateOptions: {
              submitLabel: 'Submit Variant Revision',
              submitSize: 'large',
            },
          },
        ],
      },
    ]
  }

  ngOnInit(): void {
    this.destroy$ = new Subject<void>()
  }

  ngAfterViewInit(): void {
    // fetch latest revisable field values, update form fields
    this.revisableFieldsGQL.fetch({ variantId: this.variantId }).subscribe(
      // response
      ({ data: { variant } }) => {
        if (variant) {
          this.formModel = this.toFormModel(variant)
        }
      },
      // error
      (error) => {
        console.error('Error retrieving variant.')
        console.error(error)
      },
      // complete
      () => {
        // prompt fields to display any errors that exist in loaded variant
        this.formGroup.markAllAsTouched()
        // mark comment field as untouched, we don't want to show an error before the user interacts with the field
        const commentFc: AbstractControl | null =
          this.formGroup.get('fields.comment')
        if (commentFc) {
          commentFc.markAsUntouched()
        }
      }
    )
  }

  // set value for clinvarStatus select
  getClinvarStatus(ids: string[]): ClinvarOptions {
    if (ids[0] === 'NONE FOUND') {
      return ClinvarOptions.NoneFound
    } else if (ids[0] === 'N/A') {
      return ClinvarOptions.NotApplicable
    } else {
      return ClinvarOptions.Found
    }
  }

  // remove any values that aren't clinvar IDs
  getClinvarIds(ids: string[]): string[] {
    if (ids[0] === 'NONE FOUND' || ids[0] === 'N/A') {
      return []
    } else {
      return ids
    }
  }

  toFormModel(variant: RevisableVariantFieldsFragment): FormModel {
    return {
      fields: {
        ...variant,
        clinvarStatus: this.getClinvarStatus(variant.clinvarIds),
        clinvarIds: this.getClinvarIds(variant.clinvarIds),
        referenceBases: variant.referenceBases,
        variantBases: variant.variantBases,
        comment: this.formModel?.fields.comment,
        organization: this.formModel?.fields.organization,
      },
    }
  }

  submitRevision(formModel: Maybe<FormModel>): void {
    let input = this.toRevisionInput(formModel)
    if (input) {
      let state = this.suggestRevisionMutator.mutate(
        this.suggestRevisionGQL,
        {
          input: input,
        },
        {
          refetchQueries: [
            {
              query: this.variantDetailGQL.document,
              variables: { variantId: this.variantId },
            },
            {
              query: this.revisionsGQL.document,
              variables: {
                subject: {
                  id: this.variantId,
                  entityType: ModeratedEntities.Variant,
                },
                status: RevisionStatus.New,
              },
            },
          ],
        },
        (data) => {
          if (
            data.suggestVariantRevision?.results.every(
              (r) => r.newlyCreated == false
            )
          ) {
            this.noNewRevisions = true
            this.success = false
          }
        }
      )

      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res) {
          this.success = true
        }
      })

      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
        if (errs) {
          this.errorMessages = errs
          this.success = false
        }
      })

      state.isSubmitting$
        .pipe(takeUntil(this.destroy$))
        .subscribe((loading) => {
          this.loading = loading
        })
    }
  }

  toRevisionInput(model: Maybe<FormModel>): Maybe<SuggestVariantRevisionInput> {
    if (model) {
      const fields = model.fields
      return {
        id: fields.id,
        ...model,
        fields: {
          name: fields.name,
          geneId: fields.gene.id,
          ensemblVersion: fmt.toNullableInput(fields.ensemblVersion),
          clinvarIds: fmt.toClinvarInput(
            fields.clinvarIds,
            fields.clinvarStatus
          ),
          primaryCoordinates: fmt.toCoordinateInput(fields.primaryCoordinates),
          secondaryCoordinates: fmt.toCoordinateInput(
            fields.secondaryCoordinates
          ),
          referenceBases: fmt.toNullableString(fields.referenceBases),
          variantBases: fmt.toNullableString(fields.variantBases),
          referenceBuild: fmt.toNullableReferenceBuildInput(
            fields.referenceBuild
          ),
          hgvsDescriptions: fields.hgvsDescriptions,
          variantTypeIds: model.fields.variantTypes.map((vt: any) => {
            return +vt.id
          }),
          aliases: model.fields.variantAliases,
        },
        comment: fields.comment == '' ? undefined : fields.comment,
        organizationId: model.fields.organization?.id,
      }
    }
    return undefined
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
