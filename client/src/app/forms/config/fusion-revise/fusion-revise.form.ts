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
  FusionRevisableFieldsGQL,
  SuggestFusionRevisionGQL,
  SuggestFusionRevisionMutation,
  SuggestFusionRevisionMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import {
  fusionFormModelToReviseInput,
  fusionToModelFields,
} from '@app/forms/utilities/fusion-to-model-fields'
import { fusionReviseFields } from './fusion-revise.form.config'
import { CommonModule } from '@angular/common'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { CvcForms2Module } from '@app/forms/forms.module'
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms/components/form-submission-status-display/form-submission-status-display.module'
import { FusionReviseModel } from '@app/forms/models/fusion-revise.model'

@UntilDestroy()
@Component({
  selector: 'cvc-fusion-revise-form',
  standalone: true,
  templateUrl: './fusion-revise.form.html',
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
export class CvcFusionReviseForm implements OnInit, AfterViewInit {
  @Input() featureId!: number
  model?: FusionReviseModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]

  reviseFusionMutator: MutatorWithState<
    SuggestFusionRevisionGQL,
    SuggestFusionRevisionMutation,
    SuggestFusionRevisionMutationVariables
  >

  mutationState?: MutationState
  url?: string

  constructor(
    private revisableFieldsGQL: FusionRevisableFieldsGQL,
    private submitRevisionsGQL: SuggestFusionRevisionGQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = new UntypedFormGroup({})
    this.fields = fusionReviseFields
    this.reviseFusionMutator = new MutatorWithState(networkErrorService)
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
            let fields = fusionToModelFields(feature)
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
          console.error('Error retrieving Fusion.')
          console.error(error)
        },
        complete: () => {},
      })
  }

  onSubmit(model: FusionReviseModel) {
    if (!this.featureId) {
      return
    }
    let input = fusionFormModelToReviseInput(this.featureId, model)
    if (input) {
      this.mutationState = this.reviseFusionMutator.mutate(
        this.submitRevisionsGQL,
        { input: input }
      )
    }
  }
}
