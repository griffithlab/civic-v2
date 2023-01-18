import {
  Output,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import {
  AddDrugGQL,
  Drug,
  Maybe,
  QuickAddDrugGQL,
  QuickAddDrugMutation,
  QuickAddDrugMutationVariables,
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
  selector: 'cvc-drug-quick-add-form',
  templateUrl: './drug-quick-add.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcDrugQuickAddForm {
  @Input()
  set cvcSearchString(str: string) {
    if (!str) return
    this.searchString$.next(str)
  }

  @Output() cvcOnCreate = new EventEmitter<Drug>()

  model: DrugQuickAddModel = drugQuickAddInitialModel
  form: UntypedFormGroup = new UntypedFormGroup({})
  fields: FormlyFieldConfig[]
  options: FormlyFormOptions = {}

  queryMutator: MutatorWithState<
    QuickAddDrugGQL,
    QuickAddDrugMutation,
    QuickAddDrugMutationVariables
  >

  // SOURCE STREAMS
  onSubmit$: Subject<DrugQuickAddModel>
  searchString$: BehaviorSubject<Maybe<string>>

  // PRESENTATION STREAMS
  isSubmitting$: BehaviorSubject<boolean>
  submitSuccess$: BehaviorSubject<boolean>
  submitError$: BehaviorSubject<string[]>

  addDrugMutator: MutatorWithState<
    QuickAddDrugGQL,
    QuickAddDrugMutation,
    QuickAddDrugMutationVariables
  >

  constructor(
    private query: QuickAddDrugGQL,
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
      console.log('drug-quick-add form model submitted.', model)
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
        console.log('drug-quick-add submit data callback', data)
        // const vid = data.addDrug.drug.id
        this.cvcOnCreate.next(data.addDrug.drug)
      }
    )

    state.submitSuccess$.pipe(untilDestroyed(this)).subscribe((res) => {
      console.log('drug-quick-add submitSuccess$', res)
      this.submitSuccess$.next(res)
    })

    state.submitError$.pipe(untilDestroyed(this)).subscribe((errs) => {
      console.log('drug-quick-add submitError$', errs)
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
