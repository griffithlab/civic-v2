import { Component, OnDestroy, OnInit } from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NavigationEnd, Router } from '@angular/router'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import {
  Maybe,
  Organization,
  SuggestSourceGQL,
  SuggestSourceInput,
  SuggestSourceMutation,
  SuggestSourceMutationVariables,
} from '@app/generated/civic.apollo'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { takeUntil } from 'rxjs/operators'
import { Subject, Subscription } from 'rxjs'
import {
  FormDisease,
  FormMolecularProfile,
  FormSource,
} from '../forms.interfaces'

interface FormModel {
  fields: {
    id: number
    molecularProfile: FormMolecularProfile
    disease: FormDisease[]
    source: FormSource[]
    comment: Maybe<string>
    organization: Maybe<Organization>
  }
}

@Component({
  selector: 'cvc-source-submit-form',
  templateUrl: './source-submit.form.html',
})
export class SourceSubmitForm implements OnDestroy {
  private destroy$: Subject<void> = new Subject<void>()

  formModel?: FormModel
  formGroup: UntypedFormGroup = new UntypedFormGroup({})
  formFields: FormlyFieldConfig[]
  formOptions: FormlyFormOptions = {}

  suggestSourceMutator: MutatorWithState<
    SuggestSourceGQL,
    SuggestSourceMutation,
    SuggestSourceMutationVariables
  >

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false
  newId?: number

  navigationSubscription?: Subscription

  constructor(
    private suggestSourceGQL: SuggestSourceGQL,
    private errService: NetworkErrorsService,
    private router: Router
  ) {
    this.suggestSourceMutator = new MutatorWithState(errService)

    this.navigationSubscription = router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.reset()
      }
    })
    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-container'],
        templateOptions: {
          label: 'Suggest Source Form',
        },
        fieldGroup: [
          {
            key: 'molecularProfile',
            type: 'molecular-profile-input',
            templateOptions: {
              label: 'Molecular Profile',
              helpText: 'lorem ipsum',
              required: false,
              allowCreate: true,
            },
          },
          {
            key: 'disease',
            type: 'disease-array',
            templateOptions: {
              maxCount: 1,
            },
          },
          {
            key: 'source',
            type: 'multi-field',
            wrappers: ['form-field'],
            templateOptions: {
              label: 'Source',
              helpText:
                'CIViC accepts PubMed or ASCO Abstracts sources. Please provide the source of the support for your evidence here.',
              addText: 'Specify a Source',
              required: true,
              maxCount: 1,
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
            key: 'comment',
            type: 'comment-textarea',
            templateOptions: {
              label: 'Comment',
              helpText:
                "Please provide any additional comments you wish to make about this Source Suggestion. This comment will appear as the first comment in this item's comment thread.",
              placeholder:
                'Please enter a brief comment describing why this Source should be curated in CIViC.',
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
              submitLabel: 'Submit Source Suggestion',
              submitSize: 'large',
            },
          },
        ],
      }, // fieldGroup[ ]
    ] // formFields[ ]
  } // constructor()

  submitSourceSuggestion(formModel: Maybe<FormModel>): void {
    let input = this.toSubmitInput(formModel)
    if (input) {
      let state = this.suggestSourceMutator.mutate(
        this.suggestSourceGQL,
        {
          input: input,
        },
        {},
        (data) => {
          this.newId = data.suggestSource?.sourceSuggestion.id
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

  reset() {
    this.success = false
    this.errorMessages = []
    this.newId = undefined
    this.formModel = undefined
  }

  toSubmitInput(model: Maybe<FormModel>): Maybe<SuggestSourceInput> {
    if (model) {
      const fields = model.fields
      return {
        molecularProfileId: fields.molecularProfile?.id,
        sourceId: fields.source[0].id!,
        diseaseId: fields.disease[0]?.id,
        comment: fields.comment!,
        organizationId: model?.fields.organization?.id,
      }
    }
    return undefined
  }

  ngOnDestroy(): void {
    this.navigationSubscription?.unsubscribe()
  }
}
