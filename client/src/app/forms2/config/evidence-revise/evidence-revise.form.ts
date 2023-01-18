import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import {
  evidenceReviseFormInitialModel,
  EvidenceReviseModel,
} from '@app/forms2/models/evidence-revise.model'
import { EvidenceState } from '@app/forms2/states/evidence.state'
import evidenceToModelFields from '@app/forms2/utilities/evidence-to-model-fields'
import {
  EvidenceDirection,
  EvidenceItemRevisableFieldsGQL,
  EvidenceLevel,
  EvidenceSignificance,
  EvidenceType,
  VariantOrigin,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { Subject } from 'rxjs'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'
import { evidenceReviseFields } from './evidence-revise.form.config'

@UntilDestroy()
@Component({
  selector: 'cvc-evidence-revise-form',
  templateUrl: './evidence-revise.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEvidenceReviseForm implements AfterViewInit, OnDestroy {
  @Input() evidenceId!: number
  model?: EvidenceReviseModel
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  options: FormlyFormOptions

  constructor(
    private revisableFieldsGQL: EvidenceItemRevisableFieldsGQL,
    private cdr: ChangeDetectorRef
  ) {
    // this.model = evidenceReviseFormInitialModel
    this.model = {
      id: 116,
      fields: {
        significance: EvidenceSignificance.Positive,
        description:
          'AML with mutated NPM1 is a provisional entity in the World Health Organization (WHO) classification of acute myeloid leukemia (AML). This mutation should be tested for in clinical trials and is recommended for testing in patients with cytogentically normal AML.',
        diseaseId: 3,
        drugIds: [],
        therapyInteractionType: undefined,
        evidenceDirection: EvidenceDirection.Supports,
        evidenceLevel: EvidenceLevel.A,
        evidenceType: EvidenceType.Diagnostic,
        molecularProfileId: 3267,
        phenotypeIds: [],
        rating: 5,
        sourceId: 19,
        variantOrigin: VariantOrigin.Somatic,
      },
    }
    this.form = new UntypedFormGroup({})
    this.fields = evidenceReviseFields
    this.options = { formState: new EvidenceState() }
  }

  ngAfterViewInit(): void {}
  // ngAfterViewInit(): void {
  //   this.revisableFieldsGQL
  //     .fetch({ evidenceId: this.evidenceId })
  //     .pipe(untilDestroyed(this))
  //     .subscribe({
  //       next: ({ data: { evidenceItem } }) => {
  //         if (evidenceItem) {
  //           console.log(JSON.stringify(evidenceItem))
  //           this.model = {
  //             id: evidenceItem.id,
  //             fields: evidenceToModelFields(evidenceItem),
  //           }
  //           // TODO: figure out if model can be assigned w/o detectChanges() here,
  //           // like with a model$ BehaviorSubject?
  //           this.cdr.detectChanges()
  //         }
  //       },
  //       error: (error) => {
  //         console.error('Error retrieving evidenceItem.')
  //         console.error(error)
  //       },
  //       complete: () => {
  //         console.log('evidence item retrieved.')
  //       },
  //     })
  // }

  onSubmit(model?: EvidenceReviseModel) {
    console.log('------ Evidence Revise Form Submitted ------')
    console.log(model)
  }

  ngOnDestroy(): void {
    this.options.formState.onDestroy()
  }
}
