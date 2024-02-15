import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import {
  FactorRevisableFieldsGQL,
  SuggestFactorRevisionGQL,
  SuggestFactorRevisionMutation,
  SuggestFactorRevisionMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import {
  factorFormModelToReviseInput,
  factorToModelFields,
} from '@app/forms/utilities/factor-to-model-fields'
import { factorReviseFields } from './factor-revise.form.config'
import { CommonModule } from '@angular/common'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { CvcForms2Module } from '@app/forms/forms.module'
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms/components/form-submission-status-display/form-submission-status-display.module'
import { FactorReviseModel } from '@app/forms/models/factor-revise.model'

@UntilDestroy()
@Component({
  selector: 'cvc-factor-revise-form',
  standalone: true,
  templateUrl: './factor-revise.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzFormModule,
    NzButtonModule,
    CvcForms2Module,
    CvcFormSubmissionStatusDisplayModule,
  ],

  //NgxJsonViewerModule, // debug
})
export class CvcFactorReviseForm implements OnInit, AfterViewInit {
  @Input() featureId!: number
  model?: FactorReviseModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]

  reviseFactorMutator: MutatorWithState<
    SuggestFactorRevisionGQL,
    SuggestFactorRevisionMutation,
    SuggestFactorRevisionMutationVariables
  >

  mutationState?: MutationState
  url?: string

  constructor(
    private revisableFieldsGQL: FactorRevisableFieldsGQL,
    private submitRevisionsGQL: SuggestFactorRevisionGQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = new UntypedFormGroup({})
    this.fields = factorReviseFields
    this.reviseFactorMutator = new MutatorWithState(networkErrorService)
  }

  ngOnInit() {
    this.url = `/features/${this.featureId}/revisions`
  }

  ngAfterViewInit(): void {
    this.revisableFieldsGQL
      .fetch({ featureId: this.featureId })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: ({ data: { feature } }) => {
          if (feature) {
            let fields = factorToModelFields(feature)
            if (fields) {
              this.model = {
                id: feature.id,
                fields: fields,
              }
              this.cdr.detectChanges()
            }
          }
        },
        error: (error) => {
          console.error('Error retrieving Factor.')
          console.error(error)
        },
        complete: () => {},
      })
  }

  onSubmit(model: FactorReviseModel) {
    if (!this.featureId) {
      return
    }
    let input = factorFormModelToReviseInput(this.featureId, model)
    if (input) {
      this.mutationState = this.reviseFactorMutator.mutate(
        this.submitRevisionsGQL,
        { input: input }
      )
    }
  }
}
