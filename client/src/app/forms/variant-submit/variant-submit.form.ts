import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import {
  AddVariantGQL,
  AddVariantMutation,
  AddVariantMutationVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import * as fmt from '@app/forms/config/utilities/input-formatters'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { Subject } from 'rxjs'
import { EvidenceState } from '@app/forms/config/states/evidence.state'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import {
  FormGene,
  FormMolecularProfile,
  FormVariant,
} from '../forms.interfaces'
import { ActivatedRoute } from '@angular/router'
import { takeUntil } from 'rxjs/operators'

interface FormModel {
  fields: {
    gene: FormGene[]
    variant: FormVariant[]
  }
}

export interface SelectedVariant {
  variantId: number
  molecularProfile: FormMolecularProfile
}

@Component({
  selector: 'cvc-variant-submit-form',
  templateUrl: './variant-submit.form.html',
})
export class VariantSubmitForm implements OnDestroy, OnInit {
  @Output() onVariantSelected = new EventEmitter<SelectedVariant>()
  @Input() allowCreate: boolean = true

  private destroy$ = new Subject<void>()

  formModel!: FormModel
  formGroup: UntypedFormGroup = new UntypedFormGroup({})
  formFields: FormlyFieldConfig[] = []
  formOptions: FormlyFormOptions = { formState: new EvidenceState() }

  submitVariantMutator: MutatorWithState<
    AddVariantGQL,
    AddVariantMutation,
    AddVariantMutationVariables
  >

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
    this.submitVariantMutator = new MutatorWithState(networkErrorService)
  }

  ngOnInit() {
    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-container'],
        templateOptions: {},
        fieldGroup: [
          {
            key: 'gene',
            type: 'gene-array',
            templateOptions: {
              maxCount: 1,
              required: true,
            },
            validation: {
              messages: {
                required: 'Gene is required to select a variant.',
              },
            },
          },
          {
            key: 'variant',
            type: 'variant-array',
            templateOptions: {
              required: false,
              maxCount: 1,
              allowCreate: this.allowCreate,
            },
          },
        ],
      },
    ]
  }

  submitVariant(model: Maybe<FormModel>): void {
    let geneId = model?.fields.gene[0].id
    let name = model?.fields.variant[0].name
    if (geneId && name) {
      let input = {
        geneId: geneId,
        name: name,
      }

      let state = this.submitVariantMutator.mutate(
        this.submitVariantGQL,
        input,
        {},
        (data) => {
          let addVariantResult = data.addVariant
          if (addVariantResult) {
            this.newId = addVariantResult.variant.id
            this.isNew = addVariantResult.new
            this.onVariantSelected.emit({
              variantId: addVariantResult.variant.id,
              molecularProfile:
                addVariantResult.variant.singleVariantMolecularProfile,
            })
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

  onFormModelChange(model: FormModel): void {
    this.formModel = model
    if (model.fields.variant && model.fields.variant[0]) {
      this.onVariantSelected.emit({
        variantId: model.fields.variant[0].id!,
        molecularProfile: model.fields.variant[0].singleVariantMolecularProfile,
      })
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
