import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import { NoStateFormOptions } from '@app/forms2/states/base.state'
import {
  Disease,
  Maybe,
  QuickAddDiseaseGQL,
  QuickAddDiseaseMutation,
  QuickAddDiseaseMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs'

@UntilDestroy()
@Component({
  selector: 'cvc-disease-quick-add-form',
  templateUrl: './disease-quick-add.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcDiseaseQuickAddForm {
  @Input()
  set cvcSearchStr(str: Maybe<string>) {
    if (!str) return
    this.model = { name: str, doid: this.model.doid }
  }
  get cvcSearchStr(): Maybe<string> {
    return this.model.name
  }
  @Output() cvcOnCreate = new EventEmitter<Disease>()

  model: QuickAddDiseaseMutationVariables
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  options: NoStateFormOptions
  formLayout: NzFormLayoutType

  queryMutator: MutatorWithState<
    QuickAddDiseaseGQL,
    QuickAddDiseaseMutation,
    QuickAddDiseaseMutationVariables
  >

  // SOURCE STREAMS
  onSubmit$: Subject<QuickAddDiseaseMutationVariables>

  // PRESENTATION STREAMS
  isSubmitting$: BehaviorSubject<boolean>
  submitSuccess$: BehaviorSubject<boolean>
  submitError$: BehaviorSubject<string[]>

  addDiseaseMutator: MutatorWithState<
    QuickAddDiseaseGQL,
    QuickAddDiseaseMutation,
    QuickAddDiseaseMutationVariables
  >

  constructor(
    private query: QuickAddDiseaseGQL,
    private errors: NetworkErrorsService
  ) {
    // configure form
    this.form = new UntypedFormGroup({})
    this.model = { name: '' }
    this.formLayout = 'horizontal'
    this.options = { formState: { formLayout: this.formLayout } }

    this.onSubmit$ = new Subject<QuickAddDiseaseMutationVariables>()

    this.queryMutator = new MutatorWithState(this.errors)
    this.isSubmitting$ = new BehaviorSubject<boolean>(false)
    this.submitSuccess$ = new BehaviorSubject<boolean>(false)
    this.submitError$ = new BehaviorSubject<any[]>([])

    this.addDiseaseMutator = new MutatorWithState(this.errors)

    this.fields = [
      {
        key: 'name',
        type: 'input',
        props: {
          label: 'Name',
          required: true,
        },
      },
      {
        key: 'doid',
        type: 'input',
        props: {
          label: 'DOID',
        },
      },
    ]

    // handle submit events from form
    this.onSubmit$.pipe(untilDestroyed(this)).subscribe((model) => {
      console.log('disease-quick-add form model submitted.', model)
      this.submitDisease()
    })
  }

  submitDisease() {
    let state = this.addDiseaseMutator.mutate(
      this.query,
      this.model,
      {},
      (data) => {
        console.log('disease-quick-add submit data callback', data)
        // const vid = data.addDisease.disease.id
        if (data.addDisease) this.cvcOnCreate.next(data.addDisease.disease)
      }
    )

    state.submitSuccess$.pipe(untilDestroyed(this)).subscribe((res) => {
      console.log('disease-quick-add submitSuccess$', res)
      this.submitSuccess$.next(res)
    })

    state.submitError$.pipe(untilDestroyed(this)).subscribe((errs) => {
      console.log('disease-quick-add submitError$', errs)
      this.submitError$.next(errs)
      // if (errs) {
      //   this.errorMessages = errs
      //   this.success = false
      // }
    })

    state.isSubmitting$.pipe(untilDestroyed(this)).subscribe((loading) => {
      this.isSubmitting$.next(loading)
    })
  }
}
