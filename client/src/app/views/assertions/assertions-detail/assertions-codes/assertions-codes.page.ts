import { Component, Signal, computed } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { QueryRef } from 'apollo-angular'
import { Observable } from 'rxjs'
import { startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { toSignal } from '@angular/core/rxjs-interop'
import { Maybe, AssertionCodesGQL, AssertionCodesQuery, AssertionCodesQueryVariables, SpecificationEvaluationFieldsFragment, SpecificationFieldsFragment, SpecificationEvaluation, SpecificationEvaluationStatus, SpecificationWithEvaluations } from '@app/generated/civic.apollo'

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
  $specificationsWithEvaluations: Signal<Maybe<SpecificationWithEvaluations[]>>

  constructor(private gql: AssertionCodesGQL, private route: ActivatedRoute) {
    this.assertionId = +this.route.snapshot.params['assertionId']

    this.queryRef = this.gql.watch({ assertionId: this.assertionId })
    let observable = this.queryRef.valueChanges

    this.loading$ = observable.pipe(pluck('loading'), startWith(true))

    this.$specificationsWithEvaluations = toSignal(observable.pipe(pluck('data', 'assertion', 'specificationsWithEvaluations')))
    this.$specification = toSignal(observable.pipe(pluck('data', 'assertion', 'specification')))
    this.$evaluations = toSignal(observable.pipe(pluck('data', 'assertion', 'specificationEvaluations')))
  }

  getEvaluationsForStatus(evaluations: any[], selectedEvaluation: SpecificationEvaluationStatus): SpecificationEvaluation[] {
    return evaluations.filter((evaluation) => evaluation.evaluation == selectedEvaluation)
  }

  descriptionForGroup(selectedGroup: string): string | undefined {
    return this.$specification()?.assessmentGroups.find((g) => g.group == selectedGroup)?.description
  }

  groupEvaluations(evaluations: SpecificationEvaluationFieldsFragment[]): any[] {
    return (Object as any).groupBy(evaluations, (evaluation: any) => evaluation.specificationCriterium.assessmentGroup)
  }
}
