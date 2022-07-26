import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  AddVariantGQL,
  AddVariantMutation,
  AddVariantMutationVariables,
  Maybe,
} from '@app/generated/civic.apollo';
import * as fmt from '@app/forms/config/utilities/input-formatters';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { EvidenceState } from '@app/forms/config/states/evidence.state';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { FormGene, FormVariant } from '../forms.interfaces';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

interface FormModel {
  fields: {
    gene: FormGene[],
    variant: FormVariant[],
  }
}

export interface SelectedVariant {
  variantId: number,
  molecularProfileId: number
}

@Component({
  selector: 'cvc-variant-submit-form',
  templateUrl: './variant-submit.form.html',
  styleUrls: ['./variant-submit.form.less'],
})
export class VariantSubmitForm implements OnDestroy {
  @Output() onVariantSelected = new EventEmitter<SelectedVariant>();

  private destroy$ = new Subject();

  formModel!: FormModel;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = { formState: new EvidenceState() };

  submitVariantMutator: MutatorWithState<AddVariantGQL, AddVariantMutation, AddVariantMutationVariables>

  submittedGeneId: Maybe<number>
  submittedVariantId: Maybe<number>

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false
  newId?: number
  isNew?: boolean

  constructor(
    private submitVariantGQL: AddVariantGQL,
    private networkErrorService: NetworkErrorsService,
    private route: ActivatedRoute
    ) {

    this.submitVariantMutator = new MutatorWithState(networkErrorService);

    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-container'],
        templateOptions: {
        },
        fieldGroup: [
          {
            key: 'gene',
            type: 'gene-array',
            templateOptions: {
              maxCount: 1,
              required: true
            },
            validation: {
              messages: {
                required: 'Gene is required to select a variant.'
              }
            }
          },
          {
            key: 'variant',
            type: 'variant-array',
            templateOptions: {
              required: false,
              canCreate: false,
              maxCount: 1,
            }
          },
/*           {
            key: 'variant',
            type: 'cvc-textarea',
            templateOptions: {
              label: 'Variant Name',
              helpText: 'The name of the variant to add',
              placeholder: 'Enter variant name',
              required: true,
              autosize: {
                minRows: 1,
                maxRows: 1
              }
            },
            validation: {
              messages: {
                required: 'Variant name is required to add a new variant.'
              }
            }
          }, */
/*           {
            key: 'submit',
            type: 'submit-button'
          }, */
        ]
      }
    ];
  }

  submitVariant(model: Maybe<FormModel>): void {
    let geneId = model?.fields.gene[0].id
    let name = model?.fields.variant[0].name
    if (geneId && name) {
      let input = {
        geneId: geneId,
        name: name
      }

      let state = this.submitVariantMutator.mutate(this.submitVariantGQL, input, {},
        (data) => {
          this.newId = data.addVariant.variant.id;
          this.isNew = data.addVariant.new
          this.onVariantSelected.emit({
            variantId: data.addVariant.variant.id,
            molecularProfileId: data.addVariant.variant.singleVariantMolecularProfileId
          });
        })

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

      state.isSubmitting$.pipe(takeUntil(this.destroy$)).subscribe((loading) => {
        this.loading = loading
      })
    }
  }

  onFormModelChange(model: FormModel): void {
    this.formModel = model
    if(model.fields.variant && model.fields.variant[0]) {
      this.onVariantSelected.emit({
        variantId: model.fields.variant[0].id!,
        molecularProfileId: model.fields.variant[0].singleVariantMolecularProfileId
      })
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
