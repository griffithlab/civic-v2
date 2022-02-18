import {
  Component,
  Input,
  OnDestroy,
} from '@angular/core';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormControlStatus
} from '@angular/forms';

import {
  BehaviorSubject,
  Observable,
  Subject,
} from 'rxjs';

import { takeUntil } from 'rxjs/operators';

import {
  VariantRevisableFieldsGQL,
  Organization,
  SuggestVariantRevisionInput,
  Maybe,
  SourceSource,
  RevisableVariantFieldsFragment,
  ReferenceBuild,
  CoordinateFieldsFragment,
} from '@app/generated/civic.apollo';

import { ViewerService, Viewer } from '@app/core/services/viewer/viewer.service';
import { VariantReviseService } from './variant-revise.service';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import * as fmt from '@app/forms/shared/input-formatters';
import { $enum } from 'ts-enum-util';
import { formatReferenceBuildEnum } from '@app/core/utilities/enum-formatters/format-reference-build-enum';
import { Chromosomes } from '@app/forms/shared/input-formatters';

interface FormSource {
  id?: number;
  sourceType?: SourceSource;
  citationId?: number;
  citation?: string;
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
  id: number;
  comment: string;
  fields: {
    name: string;
    variantAliases: string[];
    description: string;
    sources: FormSource[];
    clinvarIds: string[];
    gene: FormGene;
    referenceBuild: ReferenceBuild;
    ensemblVersion: number;
    hgvsDescriptions: Maybe<string[]>;
    variantTypes: FormVariantType[];
    fivePrimeCoordinates: CoordinateFieldsFragment;
    threePrimeCoordinates: CoordinateFieldsFragment;
    referenceBases: Maybe<string>;
    variantBases: Maybe<string>;
  }
}

@Component({
  selector: 'cvc-variant-revise-form',
  templateUrl: './variant-revise.form.html',
  styleUrls: ['./variant-revise.form.less']
})
export class VariantReviseForm implements OnDestroy {
  @Input() variantId!: number;
  private destroy$ = new Subject();
  organizations!: Array<Organization>;
  mostRecentOrg!: Maybe<Organization>;

  variantRevisionInput!: SuggestVariantRevisionInput;

  submitError$: BehaviorSubject<string[]>;
  submitSuccess$: BehaviorSubject<boolean>;
  isSubmitting$: BehaviorSubject<boolean>;

  formModel!: FormModel;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = {};

  formControls!: { [key: string]: AbstractControl }

  markAsTouched!: () => void;

  constructor(
    private revisionService: VariantReviseService,
    private viewerService: ViewerService,
    private revisableFieldsGQL: VariantRevisableFieldsGQL,
  ) {

    // subscribing to viewer$ and setting local org, mostRecentOrg
    // so that mostRecentOrg can be updated by org-selector's selectOrg events
    this.viewerService.viewer$
      .pipe(takeUntil(this.destroy$))
      .subscribe((v: Viewer) => {
        this.organizations = v.organizations;
        this.mostRecentOrg = v.mostRecentOrg;
      });

    this.submitError$ = this.revisionService.submitError$;
    this.isSubmitting$ = this.revisionService.isSubmitting$;
    this.submitSuccess$ = this.revisionService.submitSuccess$;

    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-info'],
        fieldGroup: [
          {
            key: 'id',
            type: 'input',
            hide: true,
          },
          {
            key: 'description',
            type: 'textarea',
            templateOptions: {
              label: 'Variant Description',
              placeholder: 'Enter a description for this variant.',
              helpText: 'Provide a summary of the clinical relevance of this Variant. The Variant Summary should be a synthesis of the existing Evidence Statements for this variant. Basic information on recurrence rates and biological/functional impact of the Variant may be included, but the focus should be on the clinical impact (i.e. predictive, prognostic, diagnostic, or predisposing relevance). By submitting content to CIViC you agree to release it to the public domain as described by the <a href="https://creativecommons.org/publicdomain/zero/1.0/" title="CreativeCommons.org CC0 license" target="_blank">Creative Commons Public Domain Dedication (CC0 1.0 Universal)</a>.',
              required: true,
              attributes: {
                'rows': 8
              }
            },
          },
          {
            key: 'sources',
            type: 'multi-field',
            templateOptions: {
              label: 'Description Sources',
              addText: 'Add another Source',
              helpText: 'Add any Sources used as references for this Variant\'s Description above.'
            },
            fieldArray: {
              type: 'source-input',
              templateOptions: {
                required: false
              }
            }
          },
          {
            key: 'variantAliases',
            type: 'multi-field',
            templateOptions: {
              label: 'Variant Aliases',
              addText: 'Add an Alias',
              helpText: 'List any aliases commonly used to refer to this variant.'
            },
            fieldArray: {
              type: 'input',
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
            templateOptions: {
              label: 'HGVS Descriptions',
              addText: 'Add an HGVS Description',
              helpText: 'Please specify any HGVS descriptions for this variant.'
            },
            fieldArray: {
              type: 'input',
              templateOptions: {
                required: true,
                placeholder: 'Enter an HGVS string'
              }
            }
          },
          {
            key: 'clinvarIds',
            type: 'multi-field',
            templateOptions: {
              label: 'ClinVar IDs',
              addText: 'Add a ClinVar ID',
              helpText: 'Specify any corresponding ClinVar identifiers for this variant.'
            },
            fieldArray: {
              type: 'input',
              templateOptions: {
                required: false,
                placeholder: 'Enter a ClinVar ID'
              }
            }
          },
          {
            key: 'variantTypes',
            type: 'multi-field',
            templateOptions: {
              label: 'Variant Types',
              addText: 'Add a Variant Type',
              helpText: 'Add one or more variant types from the <a href="http://www.sequenceontology.org/browser/" title="Opens a new tab for the Sequence Ontology Browser" target="_blank">Sequence Ontology</a> (e.g., missense, loss-of-function). Be specific as possible, avoid the addition of root concepts, and use the <i>sequence_variant</i> tree of the sequence ontology.'
            },
            fieldArray: {
              type: 'variant-type-input',
              templateOptions: {
                required: false
              }
            }
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
              helpText: 'Specify the human genome reference sequence from which these coordinates are obtained.',
              options: $enum(ReferenceBuild)
                .map((value) => {
                  return { value: value, label: formatReferenceBuildEnum(value) }
                })
            }
          },
          {
            key: 'ensemblVersion',
            type: 'input',
            templateOptions: {
              label: 'Ensembl Version',
              helpText: 'Enter the Ensembl database version (e.g. 75).'
            },
            validators: {
              validation: ['ensembl']
            },
          },
          {
            key: 'fivePrimeCoordinates.chromosome',
            type: 'select',
            defaultValue: undefined,
            templateOptions: {
              label: 'Chromosome',
              helpText: 'Specify the chromosome in which this variant occurs (e.g. 17).',
              required: false,
              options: Chromosomes
            },
          },
          {
            key: 'fivePrimeCoordinates.start',
            type: 'input',
            templateOptions: {
              label: 'Start',
              helpText: 'Enter the left/first coordinate of this variant. Must be &leq; the Stop coordinate. Coordinate must be compatible with the selected reference build.'
            },
            validators: {
              validation: ['integer']
            }
          },
          {
            key: 'fivePrimeCoordinates.stop',
            type: 'input',
            templateOptions: {
              label: 'Stop',
              helpText: 'Provide the right/second coordinate of this variant. Must be &geq; the Start coordinate. Coordinate must be compatible with the selected reference build.',
            },
            validators: {
              validation: ['integer']
            }
          },
          {
            key: 'fivePrimeCoordinates.representativeTranscript',
            type: 'input',
            templateOptions: {
              label: 'Representative Transcript',
              helpText: 'Specify a transcript ID, including version number (e.g. ENST00000348159.4, the canonical transcript defined by Ensembl).',
            },
          },
          {
            template: '<h3>Secondary Coordinates</h3>',
          },
          {
            key: 'threePrimeCoordinates.chromosome',
            type: 'select',
            defaultValue: undefined,
            templateOptions: {
              label: 'Chromosome',
              required: false,
              options: Chromosomes,
              helpText: 'If this variant is a fusion (e.g. BCR-ABL1), specify the chromosome name, coordinates, and representative transcript for the 3-prime partner.'

            },
          },
          {
            key: 'threePrimeCoordinates.start',
            type: 'input',
            templateOptions: {
              label: 'Start',
              helpText: 'Enter the left/first coordinate of this 3-prime partner fusion variant. Must be &leq; the Stop coordinate. Coordinate must be compatible with the selected reference build.'
            },
            validators: {
              validation: ['integer']
            }
          },
          {
            key: 'threePrimeCoordinates.stop',
            type: 'input',
            templateOptions: {
              label: 'Stop',
              helpText: 'Provide the right/second coordinate of this 3-prime partner fusion variant. Must be &geq; the Start coordinate. Coordinate must be compatible with the selected reference build.',
            },
            validators: {
              validation: ['integer']
            }
          },
          {
            key: 'threePrimeCoordinates.representativeTranscript',
            type: 'input',
            templateOptions: {
              label: 'Representative Transcript',
              helpText: 'Specify a transcript ID, including version number (e.g. ENST00000348159.4, the canonical transcript defined by Ensembl).',
            },
          },
          {
            key: 'comment',
            type: 'comment-textarea',
            templateOptions: {
              label: 'Comment',
              placeholder: 'Please enter a comment describing your revision to this variant.',
              helpText: 'Please enter a comment describing your revision to this variant.',
              required: true,
              minLength: 10
            },
          }
        ]
      },
    ]

    // reset form upon successful submit
    this.submitSuccess$
      .pipe(takeUntil(this.destroy$))
      .subscribe(s => {
        if (s && this.formOptions.resetModel) {
          this.formOptions.resetModel();
        }
      })
  }

  ngOnInit(): void {
    // fetch latest revisable field values, update form fields
    this.revisableFieldsGQL.fetch({ variantId: this.variantId })
      .subscribe(
        // response
        ({ data: { variant } }) => {
          if (variant) {
            this.formModel = this.toFormModel(variant);
          }
          if (this.formOptions.updateInitialValue) {
            this.formOptions.updateInitialValue();
          }
        },
        // error
        (error) => {
          console.error('Error retrieving variant.');
          console.error(error);
        },
        // complete
        () => {
          this.formGroup.markAllAsTouched();
        });

  }

  selectOrg(org: Organization): void {
    this.mostRecentOrg = org;
  }

  submitRevision(formModel: FormModel): void {
    this.revisionService
      .suggest(this.toRevisionInput(formModel));
  }

  toFormModel(variant: RevisableVariantFieldsFragment): FormModel {
    return <FormModel>{
      id: variant.id,
      fields: {
        ...variant,
        // TODO: probably incorrect - assuming root ref/var bases can be plucked from
        // fivePrimeCoordinates
        referenceBases: variant.fivePrimeCoordinates?.referenceBases,
        variantBases: variant.fivePrimeCoordinates?.variantBases,
      },
      comment: '',
      organizationId: undefined
    }
  }

  toRevisionInput(model: FormModel): SuggestVariantRevisionInput {
    const fields = model.fields;
    return <SuggestVariantRevisionInput>{
      ...model,
      fields: {
        name: fields.name,
        geneId: fields.gene.id,
        ensemblVersion: +fields.ensemblVersion,
        description: fmt.toNullableString(fields.description),
        clinvarIds: fmt.toClinvarInput(fields.clinvarIds),
        primaryCoordinates: fmt.toCoordinateInput(fields.fivePrimeCoordinates),
        secondaryCoordinates: fmt.toCoordinateInput(fields.threePrimeCoordinates),
        referenceBases: fmt.toNullableString(fields.referenceBases),
        variantBases: fmt.toNullableString(fields.variantBases),
        referenceBuild: fmt.toNullableReferenceBuildInput(fields.referenceBuild),
        hgvsDescriptions: fields.hgvsDescriptions,
        sourceIds: model.fields.sources.map((s: any) => { return +s.id }),
        variantTypeIds: model.fields.variantTypes.map((vt: any) => { return +vt.id }),
        aliases: model.fields.variantAliases,
      },
      organizationId: this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.revisionService.cleanup();
  }

}
