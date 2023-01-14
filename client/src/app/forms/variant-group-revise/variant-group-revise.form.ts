import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { AbstractControl, UntypedFormGroup } from '@angular/forms';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { isDefined } from '@app/core/utilities/defined-typeguard';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { Maybe, ModeratedEntities, Organization, RevisionsGQL, RevisionStatus, SubmittableVariantGroupFieldsFragment, SuggestVariantGroupRevisionGQL, SuggestVariantGroupRevisionInput, SuggestVariantGroupRevisionMutation, SuggestVariantGroupRevisionMutationVariables, VariantGroupDetailGQL, VariantGroupSubmittableFieldsGQL } from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormSource, FormVariant } from '../forms.interfaces';

interface FormModel {
  fields: {
    name: string,
    description: string,
    sources: FormSource[],
    variants: FormVariant[],
    comment?: string,
    organization?: Maybe<Organization>
  }
}

@Component({
  selector: 'cvc-variant-group-revise-form',
  templateUrl: './variant-group-revise.form.html',
})
export class VariantGroupReviseForm implements OnDestroy, AfterViewInit{
  @Input() variantGroupId!: number;

  private destroy$: Subject<void> = new Subject();

  formModel!: FormModel;
  formGroup: UntypedFormGroup = new UntypedFormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = {};

  success: boolean = false
  noNewRevisions: boolean = false
  errorMessages: string[] = []
  loading: boolean = false

  suggestRevisionMutator: MutatorWithState<SuggestVariantGroupRevisionGQL, SuggestVariantGroupRevisionMutation, SuggestVariantGroupRevisionMutationVariables>

  constructor(
    private suggestRevisionGQL: SuggestVariantGroupRevisionGQL,
    private revisableFieldsGQL: VariantGroupSubmittableFieldsGQL,
    private networkErrorService: NetworkErrorsService,
    private variantGroupDetailGQL: VariantGroupDetailGQL,
    private revisionsGQL: RevisionsGQL
  ) {

    this.suggestRevisionMutator = new MutatorWithState(networkErrorService)

    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-container'],
        templateOptions: {
          label: 'Add Variant Group Form'
        },
        fieldGroup: [
          {
            key: 'name',
            type: 'input',
            wrappers: ['form-field'],
            templateOptions: {
              label: 'Variant Group Name',
              required: true
            }
          },
          {
            key: 'description',
            type: 'cvc-textarea',
            templateOptions: {
              label: 'Description',
              helpText: 'A brief description of this new variant group.',
              placeholder: 'No description provided',
              required: true
            }
          },
          {
            key: 'sources',
            type: 'multi-field',
            wrappers: ['form-field'],
            templateOptions: {
              label: 'Source',
              helpText: 'Add any sources upon which your description depends.',
              addText: 'Add a Source',
            },
            fieldArray: {
              type: 'source-input',
              templateOptions: {
                hideLabel: true,
                required: true,
              },
            },
          },
          {
            key: 'variants',
            type: 'multi-field',
            wrappers: ['form-field'],
            templateOptions: {
              label: 'Variants',
              helpText: 'Specify the variants that comprise this Variant Group.',
              addText: 'Add a Variant ',
            },
            fieldArray: {
              type: 'variant-input',
              templateOptions: {
                hideLabel: true,
                required: true,
                allowCreate: false
              },
            },
          },
          {
            key: 'comment',
            type: 'comment-textarea',
            templateOptions: {
              label: 'Comment',
              helpText: 'Please provide any additional comments you wish to make about this evidence item. This comment will appear as the first comment in this item\'s comment thread.',
              placeholder: 'Please enter a comment describing your revision.',
              required: true,
              minLength: 10
            },
          },
          {
            key: 'cancel',
            type: 'cancel-button',
            templateOptions: {
              redirectPath: '../..'
            }
          },
          {
            key: 'organization',
            type: 'org-submit-button',
            templateOptions: {
              submitLabel: 'Submit Variant Group Revision',
              submitSize: 'large'
            }
          }
        ]
      }
    ]
  }

  ngAfterViewInit(): void {
    this.revisableFieldsGQL.fetch({variantGroupId: this.variantGroupId})
      .subscribe(
        ({data: {variantGroup}}) => {
          if(variantGroup) {
            this.formModel = this.toFormModel(variantGroup)
          }
        },
        (error) => {

          console.error('Error retrieving evidenceItem.');
          console.error(error);
        },
        () => {
          if (this.formOptions.updateInitialValue) {
            this.formOptions.updateInitialValue();
          }
          this.formGroup.markAllAsTouched();
          const commentFc: AbstractControl | null = this.formGroup.get('fields.comment');
          if (commentFc) { commentFc.markAsUntouched() }
        });
  }

  toFormModel(variantGroup: SubmittableVariantGroupFieldsFragment): FormModel {
    return {
      fields: {
        ...variantGroup,
        variants: variantGroup.variants.nodes,
        organization: this.formModel?.fields.organization,
      }
    }
  }

  submitVariantGroup(formModel: FormModel): void  {
    let input = this.toSubmitInput(formModel);
    if (input) {
      let state = this.suggestRevisionMutator.mutate(this.suggestRevisionGQL, {
        input: input
      },
      {
        refetchQueries: [
          {
            query: this.variantGroupDetailGQL.document,
            variables: { variantGroupId: this.variantGroupId }
          },
          {
            query: this.revisionsGQL.document,
            variables: {
                subject: {id: this.variantGroupId, entityType: ModeratedEntities.VariantGroup},
                status: RevisionStatus.New
              }
          }
        ]
      },
      (data) => {
        if(data.suggestVariantGroupRevision?.results.every(r => r.newlyCreated == false)) {
          this.noNewRevisions = true
          this.success = false
         }
      })

      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if(res) {
          this.success = true
        }
      })

      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
        if(errs) {
          this.errorMessages = errs
          this.success = false
        }
      })

      state.isSubmitting$.pipe(takeUntil(this.destroy$)).subscribe((loading) => {
        this.loading = loading
      })
    }
  }
  
  toSubmitInput(model: Maybe<FormModel>): Maybe<SuggestVariantGroupRevisionInput> {
    if(model) {
      return {
        id: this.variantGroupId,
        organizationId: model.fields.organization?.id,
        comment: model.fields.comment!,
        fields: {
          description: model.fields.description,
          name: model.fields.name,
          sourceIds: model.fields.sources.map(s => s.id).filter(isDefined),
          variantIds: model.fields.variants.map(v => v.id).filter(isDefined)
        }
      }

    }
    return undefined;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
