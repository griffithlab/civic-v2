import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core'
import {
  SpecificationEvaluationStatus,
  SubmitCriteriaEvaluationsActivityDetailFragment,
} from '@app/generated/civic.apollo'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
  selector: 'cvc-submit-criteria-evaluations-activity-details',
  imports: [
    CvcCommentBodyModule,
    CvcPipesModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
  ],
  templateUrl: './submit-criteria-evaluations-activity.component.html',
  styleUrl: './submit-criteria-evaluations-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcSubmitCriteriaEvaluationsActivity {
  activity = input.required<SubmitCriteriaEvaluationsActivityDetailFragment>({
    alias: 'cvcSubmitCriteriaEvaluationsActivity',
  })

  evaluationGroups = computed(() => {
    const evaluations = this.activity().specificationEvaluations

    return [
      { label: 'Met', status: SpecificationEvaluationStatus.Met },
      { label: 'Not Met', status: SpecificationEvaluationStatus.NotMet },
    ].map((group) => ({
      ...group,
      evaluations: evaluations.filter(
        (evaluation) => evaluation.evaluation === group.status
      ),
    }))
  })
}
