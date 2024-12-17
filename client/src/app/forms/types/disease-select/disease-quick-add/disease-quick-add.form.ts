import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import { NoStateFormOptions } from '@app/forms/states/base.state'
import {
  Maybe,
  QuickAddDiseaseGQL,
  QuickAddDiseaseMutation,
  QuickAddDiseaseMutationVariables,
  Disease,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import { BehaviorSubject, Subject } from 'rxjs'

type DiseaseQuickAddModel = {
  name?: string
  doid?: string
}

@UntilDestroy()
@Component({
  selector: 'cvc-disease-quick-add-form',
  templateUrl: './disease-quick-add.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcDiseaseQuickAddForm {
  @Input()
  set cvcSearchString(str: string) {
    if (!str) return
    this.searchString$.next(str)
  }

  @Output() cvcOnCreate = new EventEmitter<number>()
  model: QuickAddDiseaseMutationVariables
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  options: NoStateFormOptions
  formLayout: NzFormLayoutType

  // SOURCE STREAMS
  onSubmit$: Subject<DiseaseQuickAddModel>
  searchString$: BehaviorSubject<Maybe<string>>

  // PRESENTATION STREAMS
  addDiseaseMutator: MutatorWithState<
    QuickAddDiseaseGQL,
    QuickAddDiseaseMutation,
    QuickAddDiseaseMutationVariables
  >

  mutationState?: MutationState
  successMessage?: string

  constructor(
    private query: QuickAddDiseaseGQL,
    private errors: NetworkErrorsService
  ) {
    // configure form
    this.form = new UntypedFormGroup({})
    this.model = { name: '' }
    this.formLayout = 'horizontal'
    this.options = { formState: { formLayout: this.formLayout } }

    this.onSubmit$ = new Subject<DiseaseQuickAddModel>()
    this.searchString$ = new BehaviorSubject<Maybe<string>>(undefined)

    this.addDiseaseMutator = new MutatorWithState(this.errors)

    this.fields = [
      {
        key: 'doid',
        type: 'base-input',
        props: {
          label: 'DOID',
          keydown: (k, e) => {
            if (e.code === 'Tab') {
              e.stopPropagation()
            }
          },
        },
      },
      {
        key: 'name',
        props: {
          hidden: true,
          required: true,
        },
      },
    ]

    this.searchString$
      .pipe(untilDestroyed(this))
      .subscribe((str: Maybe<string>) => {
        if (!str) return
        this.model.name = str
      })

    // handle submit events from form
    this.onSubmit$.pipe(untilDestroyed(this)).subscribe((model) => {
      console.log('disease-quick-add form model submitted.', model)
      this.submitDisease(model)
    })
  }

  submitDisease(model: DiseaseQuickAddModel) {
    if (!model.name) {
      console.error(
        `disease-quick-add form submitDisease requires model with valid name.`
      )
      return
    }
    this.mutationState = this.addDiseaseMutator.mutate(
      this.query,
      this.model,
      {},
      (data) => {
        console.log('disease-quick-add submit data callback', data)
        if (data.addDisease) {
          if (data.addDisease.new) {
            this.successMessage = `New Disease ${data.addDisease.disease.name} added.`
          } else {
            this.successMessage = `Existing Disease ${data.addDisease.disease.name} with DOID ${data.addDisease.disease.doid} found. `
          }
          setTimeout(() => {
            if (data && data.addDisease)
              this.cvcOnCreate.next(data.addDisease.disease.id)
          }, 1000)
        }
      }
    )
  }
}
