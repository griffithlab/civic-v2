import { Component, OnDestroy } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { isDefined } from '@app/core/utilities/defined-typeguard';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import {
  Maybe,
  Organization,
  SubmitVariantGroupGQL,
  SubmitVariantGroupInput,
  SubmitVariantGroupMutation,
  SubmitVariantGroupMutationVariables,
} from '@app/generated/civic.apollo';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormSource, FormVariant } from '../forms.interfaces';

interface FormModel {
  fields: {
    name: string;
    description: string;
    sources: FormSource[];
    variants: FormVariant[];
    comment?: string;
    organization?: Maybe<Organization>;
  };
}

@Component({
  selector: 'cvc-variant-group-submit-form',
  templateUrl: './variant-group-submit.form.html',
})
export class VariantGroupSubmitForm implements OnDestroy {
  private destroy$: Subject<void> = new Subject();

  formModel!: FormModel;
  formGroup: UntypedFormGroup = new UntypedFormGroup({});
  formFields: FormlyFieldConfig[];

  success: boolean = false;
  errorMessages: string[] = [];
  loading: boolean = false;
  newId?: number;

  submitVariantGroupMutator: MutatorWithState<
    SubmitVariantGroupGQL,
    SubmitVariantGroupMutation,
    SubmitVariantGroupMutationVariables
  >;

  constructor(
    private submitVariantGroupGQL: SubmitVariantGroupGQL,
    private networkErrorService: NetworkErrorsService
  ) {
    this.submitVariantGroupMutator = new MutatorWithState(networkErrorService);

    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-container'],
        templateOptions: {
          label: 'Add Variant Group Form',
        },
        fieldGroup: [
          {
            key: 'name',
            type: 'input',
            wrappers: ['form-field'],
            templateOptions: {
              label: 'Variant Group Name',
              required: true,
            },
          },
          {
            key: 'description',
            type: 'cvc-textarea',
            templateOptions: {
              label: 'Description',
              helpText: 'A brief description of this new variant group.',
              placeholder: 'No description provided',
              required: true,
            },
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
              required: true,
              helpText:
                'Specify the variants that comprise this Variant Group.',
              addText: 'Add a Variant ',
            },
            fieldArray: {
              type: 'variant-input',
              templateOptions: {
                hideLabel: true,
                required: true,
                allowCreate: false,
              },
            },
          },
          {
            key: 'comment',
            type: 'comment-textarea',
            templateOptions: {
              label: 'Comment',
              helpText:
                "Please provide any additional comments you wish to make about this evidence item. This comment will appear as the first comment in this item's comment thread.",
              placeholder: 'Please enter a comment describing your revision.',
              required: true,
              minLength: 10,
            },
          },
          {
            key: 'cancel',
            type: 'cancel-button',
          },
          {
            key: 'organization',
            type: 'org-submit-button',
            templateOptions: {
              submitLabel: 'Create Variant Group',
              submitSize: 'large',
            },
          },
        ],
      },
    ];
  }

  submitVariantGroup(formModel: FormModel): void {
    let input = this.toSubmitInput(formModel);
    if (input) {
      let state = this.submitVariantGroupMutator.mutate(
        this.submitVariantGroupGQL,
        {
          input: input,
        },
        {},
        (data) => {
          this.newId = data.submitVariantGroup?.variantGroup.id;
        }
      );

      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res) {
          this.success = true;
        }
      });

      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
        if (errs) {
          this.errorMessages = errs;
          this.success = false;
        }
      });

      state.isSubmitting$
        .pipe(takeUntil(this.destroy$))
        .subscribe((loading) => {
          this.loading = loading;
        });
    }
  }

  toSubmitInput(model: Maybe<FormModel>): Maybe<SubmitVariantGroupInput> {
    if (model) {
      return {
        description: model.fields.description,
        name: model.fields.name,
        organizationId: model.fields.organization?.id,
        sourceIds: model.fields.sources
          ? model.fields.sources.map((s) => s.id).filter(isDefined)
          : [],
        variantIds: model.fields.variants.map((v) => v.id).filter(isDefined),
      };
    }
    return undefined;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
