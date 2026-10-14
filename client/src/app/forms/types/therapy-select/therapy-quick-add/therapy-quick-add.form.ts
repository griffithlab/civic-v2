import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core'
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms/components/form-submission-status-display/form-submission-status-display.module'
import { NoStateFormOptions } from '@app/forms/states/base.state'
import { Maybe } from '@app/generated/civic.apollo.types'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzFormLayoutType, NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { BehaviorSubject, Subject } from 'rxjs'
import {
  QuickAddTherapyGQL,
  QuickAddTherapyMutation,
  QuickAddTherapyMutationVariables,
} from './therapy-quick-add.query.gql.generated'

type TherapyQuickAddModel = {
  name?: string
  ncitId?: string
}

@UntilDestroy()
@Component({
  selector: 'cvc-therapy-quick-add-form',
  standalone: true,
  templateUrl: './therapy-quick-add.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    NzButtonModule,
    NzFormModule,
    NzGridModule,
    CvcFormSubmissionStatusDisplayModule,
  ],
})
export class CvcTherapyQuickAddForm {
  @Input()
  set cvcSearchString(str: string) {
    if (!str) return
    this.searchString$.next(str)
  }

  @Output() cvcOnCreate = new EventEmitter<number>()

  model: TherapyQuickAddModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  options: NoStateFormOptions
  formLayout: NzFormLayoutType

  onSubmit$: Subject<TherapyQuickAddModel>
  searchString$: BehaviorSubject<Maybe<string>>

  addTherapyMutator: MutatorWithState<
    QuickAddTherapyGQL,
    QuickAddTherapyMutation,
    QuickAddTherapyMutationVariables
  >

  mutationState?: MutationState
  successMessage?: string

  private readonly query = inject(QuickAddTherapyGQL)
  private readonly errors = inject(NetworkErrorsService)

  constructor() {
    this.form = new UntypedFormGroup({})
    this.model = { name: '' }
    this.formLayout = 'horizontal'
    this.options = { formState: { formLayout: this.formLayout } }

    this.onSubmit$ = new Subject<TherapyQuickAddModel>()
    this.searchString$ = new BehaviorSubject<Maybe<string>>(undefined)

    this.addTherapyMutator = new MutatorWithState(this.errors)

    this.fields = [
      {
        key: 'ncitId',
        type: 'base-input',
        props: {
          label: 'NCIt ID',
          keydown: (_k, e) => {
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

    this.onSubmit$
      .pipe(untilDestroyed(this))
      .subscribe((model) => this.submitTherapy(model))
  }

  submitTherapy(model: TherapyQuickAddModel) {
    if (!model.name) {
      console.error(
        `therapy-quick-add form submitTherapy requires model with valid name.`
      )
      return
    }
    this.mutationState = this.addTherapyMutator.mutate(
      this.query,
      { name: model.name, ncitId: model.ncitId },
      {},
      (data) => {
        if (!data.addTherapy) return
        const therapy = data.addTherapy.therapy
        this.successMessage = data.addTherapy.new
          ? `New Therapy ${therapy.name} added.`
          : `Existing Therapy ${therapy.name} found.`
        this.cvcOnCreate.next(therapy.id)
      }
    )
  }
}
