import { Component, Signal, computed } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { QueryRef } from 'apollo-angular'
import { Observable } from 'rxjs'
import { startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { toSignal } from '@angular/core/rxjs-interop'
import { Maybe, AssertionCodesGQL, AssertionCodesQuery, AssertionCodesQueryVariables, SpecificationEvaluationFieldsFragment, SpecificationFieldsFragment, SpecificationEvaluation, SpecificationEvaluationStatus } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-assertions-codes',
  templateUrl: './assertions-codes.page.html',
  styleUrls: ['./assertions-codes.page.less'],
  standalone: false,
})
export class AssertionsCodesPage {
  assertionId: number

  evaluationStatus = SpecificationEvaluationStatus
  
  queryRef: QueryRef<AssertionCodesQuery, AssertionCodesQueryVariables>
  loading$: Observable<boolean>
  $specification: Signal<Maybe<SpecificationFieldsFragment>>
  $evaluations: Signal<Maybe<SpecificationEvaluationFieldsFragment[]>>
  $groupedEvaluations: Signal<any[]>

  constructor(private gql: AssertionCodesGQL, private route: ActivatedRoute) {
    this.assertionId = +this.route.snapshot.params['assertionId']

    this.queryRef = this.gql.watch({ assertionId: this.assertionId })
    let observable = this.queryRef.valueChanges

    this.loading$ = observable.pipe(pluck('loading'), startWith(true))

    this.$specification = toSignal(observable.pipe(pluck('data', 'assertion', 'specification')))
    this.$evaluations = toSignal(observable.pipe(pluck('data', 'assertion', 'specificationEvaluations')))
    this.$groupedEvaluations = computed (() => (Object as any).groupBy(this.$evaluations(), (evaluation: any) => evaluation.specificationCriterium.assessmentGroup))
  }

  getEvaluationsForStatus(evaluations: any[], selectedEvaluation: SpecificationEvaluationStatus): SpecificationEvaluation[] {
    return evaluations.filter((evaluation) => evaluation.evaluation == selectedEvaluation)
  }

  descriptionForGroup(selectedGroup: string): string | undefined {
    return this.$specification()?.assessmentGroups.find((g) => g.group == selectedGroup)?.description
  }
}
