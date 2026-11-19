import { Component, Signal } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { QueryRef } from 'apollo-angular'
import { pluck } from 'rxjs-etc/operators'
import { toSignal } from '@angular/core/rxjs-interop'
import { Maybe, AssertionCodesGQL, AssertionCodesQuery, AssertionCodesQueryVariables, SpecificationEvaluationFieldsFragment, SpecificationFieldsFragment, SpecificationEvaluation, SpecificationEvaluationStatus, SpecificationWithEvaluations, SpecificationWithEvaluationsFieldsFragment } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-assertions-evaluations',
  templateUrl: './assertions-evaluations.page.html',
  styleUrls: ['./assertions-evaluations.page.less'],
  standalone: false,
})
export class AssertionsEvaluationsPage {
  assertionId: number

  evaluationStatus = SpecificationEvaluationStatus
  
  private queryRef!: QueryRef<AssertionCodesQuery, AssertionCodesQueryVariables>
  $specificationsWithEvaluations: Signal<SpecificationWithEvaluationsFieldsFragment[]>

  constructor(private gql: AssertionCodesGQL, private route: ActivatedRoute) {
    this.assertionId = +this.route.snapshot.params['assertionId']

    this.queryRef = this.gql.watch({ assertionId: this.assertionId }, { fetchPolicy: 'no-cache', nextFetchPolicy: 'no-cache' })
    let observable = this.queryRef.valueChanges
    this.$specificationsWithEvaluations = toSignal(observable.pipe(pluck('data', 'assertion', 'specificationsWithEvaluations')), { initialValue: [] })
  }

  getEvaluationsForStatus(evaluations: any[], selectedEvaluation: SpecificationEvaluationStatus): SpecificationEvaluation[] {
    return evaluations.filter((evaluation) => evaluation.evaluation == selectedEvaluation)
  }

  descriptionForGroup(selectedGroup: string, specification: SpecificationFieldsFragment): string | undefined {
    return specification.assessmentGroups.find((g) => g.group == selectedGroup)?.description
  }

  groupEvaluations(evaluations: SpecificationEvaluationFieldsFragment[]): any[] {
    return (Object as any).groupBy(evaluations, (evaluation: any) => evaluation.specificationCriterion.assessmentGroup)
  }
}
