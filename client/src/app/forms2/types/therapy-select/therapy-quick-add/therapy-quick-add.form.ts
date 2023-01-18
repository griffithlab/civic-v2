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
import {
  Maybe,
  QuickAddTherapyGQL,
  QuickAddTherapyMutation,
  QuickAddTherapyMutationVariables,
  Therapy,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { BehaviorSubject, Subject } from 'rxjs'

type DrugQuickAddModel = {
  name?: string
}

const drugQuickAddInitialModel: DrugQuickAddModel = {
  name: undefined,
}

@UntilDestroy()
@Component({
  selector: 'cvc-therapy-quick-add-form',
  templateUrl: './therapy-quick-add.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcTherapyQuickAddForm {
  @Input()
  set cvcSearchString(str: string) {
    if (!str) return
    this.searchString$.next(str)
  }

  @Output() cvcOnCreate = new EventEmitter<Therapy>()

  model: DrugQuickAddModel = drugQuickAddInitialModel
  form: UntypedFormGroup = new UntypedFormGroup({})
  fields: FormlyFieldConfig[]
  options: FormlyFormOptions = {}

  queryMutator: MutatorWithState<
    QuickAddTherapyGQL,
    QuickAddTherapyMutation,
    QuickAddTherapyMutationVariables
  >

  // SOURCE STREAMS
  onSubmit$: Subject<DrugQuickAddModel>
  searchString$: BehaviorSubject<Maybe<string>>

  // PRESENTATION STREAMS
  isSubmitting$: BehaviorSubject<boolean>
  submitSuccess$: BehaviorSubject<boolean>
  submitError$: BehaviorSubject<string[]>

  addDrugMutator: MutatorWithState<
    QuickAddTherapyGQL,
    QuickAddTherapyMutation,
    QuickAddTherapyMutationVariables
  >

  constructor(
    private query: QuickAddTherapyGQL,
    private errors: NetworkErrorsService
  ) {
    this.onSubmit$ = new Subject<DrugQuickAddModel>()
    this.searchString$ = new BehaviorSubject<Maybe<string>>(undefined)

    this.queryMutator = new MutatorWithState(this.errors)
    this.isSubmitting$ = new BehaviorSubject<boolean>(false)
    this.submitSuccess$ = new BehaviorSubject<boolean>(false)
    this.submitError$ = new BehaviorSubject<any[]>([])

    this.addDrugMutator = new MutatorWithState(this.errors)

    this.fields = [
      {
        key: 'name',
        // type: 'input',
        props: {
          // label: 'Drug Name',
          hidden: true,
          required: true,
        },
      },
    ]

    this.searchString$
      .pipe(untilDestroyed(this))
      .subscribe((str: Maybe<string>) => {
        this.model.name = str
      })

    // handle submit events from form
    this.onSubmit$.pipe(untilDestroyed(this)).subscribe((model) => {
      console.log('therapy-quick-add form model submitted.', model)
      this.submitDrug(model)
    })
  }

  submitDrug(model: DrugQuickAddModel) {
    if (!model.name) {
      console.error(
        `drug-quick-add form submitDrug requires model with valid name.`
      )
      return
    }
    let state = this.addDrugMutator.mutate(
      this.query,
      {
        name: model.name,
      },
      {},
      (data) => {
        console.log('therapy-quick-add submit data callback', data)
        // const vid = data.addDrug.drug.id
        if (data.addTherapy) this.cvcOnCreate.next(data.addTherapy.therapy)
      }
    )

    state.submitSuccess$.pipe(untilDestroyed(this)).subscribe((res) => {
      console.log('therapy-quick-add submitSuccess$', res)
      this.submitSuccess$.next(res)
    })

    state.submitError$.pipe(untilDestroyed(this)).subscribe((errs) => {
      console.log('therapy-quick-add submitError$', errs)
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
