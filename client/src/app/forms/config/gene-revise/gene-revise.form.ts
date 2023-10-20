import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { GeneRevisableFieldsGQL, SuggestGeneRevisionGQL, SuggestGeneRevisionMutation, SuggestGeneRevisionMutationVariables } from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { MutationState, MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { GeneReviseModel } from '@app/forms/models/gene-revise.model'
import { geneFormModelToReviseInput, geneToModelFields } from '@app/forms/utilities/gene-to-model-fields'
import { geneReviseFields } from './gene-revise.form.config'

@UntilDestroy()
@Component({
  selector: 'cvc-gene-revise-form',
  templateUrl: './gene-revise.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcGeneReviseForm implements OnInit, AfterViewInit {
  @Input() geneId!: number
  model?: GeneReviseModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]

  reviseEvidenceMutator: MutatorWithState<
    SuggestGeneRevisionGQL,
    SuggestGeneRevisionMutation,
    SuggestGeneRevisionMutationVariables
  >

  mutationState?: MutationState
  url?: string

  constructor(
    private revisableFieldsGQL: GeneRevisableFieldsGQL,
    private submitRevisionsGQL: SuggestGeneRevisionGQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = new UntypedFormGroup({})
    this.fields = geneReviseFields
    this.reviseEvidenceMutator = new MutatorWithState(networkErrorService)
  }

  ngOnInit() {
    this.url = `/genes/${this.geneId}/revisions`
  }

  ngAfterViewInit(): void {
    this.revisableFieldsGQL
      .fetch({ geneId: this.geneId })
      .pipe(untilDestroyed(this))
      .subscribe({
        next: ({ data: { gene } }) => {
          if (gene) {
            this.model = {
              id: gene.id,
              fields: geneToModelFields(gene),
            }
            this.cdr.detectChanges()
          }
        },
        error: (error) => {
          console.error('Error retrieving Gene.')
          console.error(error)
        },
        complete: () => {
        },
      })
  }

  onSubmit(model: GeneReviseModel) {
    if(!this.geneId) {return}
    let input = geneFormModelToReviseInput(this.geneId, model)
    if (input) {
      this.mutationState = this.reviseEvidenceMutator.mutate(this.submitRevisionsGQL, { input: input})
    }
  }
}
