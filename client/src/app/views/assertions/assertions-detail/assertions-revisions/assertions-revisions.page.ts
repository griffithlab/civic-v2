import {
  Component,
  OnInit,
  WritableSignal,
  signal,
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  ModeratedEntities,
  ModeratedInput,
  SpecificationEvaluationIdsForAssertionGQL,
  AssertionSpecificationEvaluationIdsFragment,
} from '@app/generated/civic.apollo'
import { Subscription } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/dist/esm/operators'
import { filter, map } from 'rxjs/operators'

interface RevisionsTab {
  name: string
  moderated?: ModeratedInput
  openCount: number
}

@Component({
    selector: 'cvc-assertions-revisions',
    templateUrl: './assertions-revisions.page.html',
    standalone: false
})
export class AssertionsRevisionsPage implements OnInit {
  routeSub?: Subscription
  specificationsWithEvaluationsSub?: Subscription

  tabs: WritableSignal<RevisionsTab[]> = signal([])
  specificationsWithEvaluationsTabs: WritableSignal<Record<string, RevisionsTab[]>> = signal({})

  constructor(
    private gql: SpecificationEvaluationIdsForAssertionGQL,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params
      .pipe(
        filter(isNonNulled),
        map((params) => +params.assertionId),
        filter(isNonNulled)
      )
      .subscribe((assertionId) => {
        this.tabs.set([
          {
            name: 'Assertion Fields',
            openCount: 0,
            moderated: {
              id: assertionId,
              entityType: ModeratedEntities.Assertion,
            },
          },
        ])

        this.specificationsWithEvaluationsSub = this.gql
          .fetch({ assertionId: assertionId }, { fetchPolicy: 'no-cache' })
          .pipe(
            filter(isNonNulled),
            pluck('data', 'assertion'),
            filter(isNonNulled)
          )
          .subscribe((assertion) => {
            this.updateTabs(assertion)
          })
      })

  }
  updateTabs(assertion: AssertionSpecificationEvaluationIdsFragment) {
    //the open revision count reported from the server includes revisions to evaluation fields
    //so we have to do some math here to get the correct number just for the assertion fields tab
    let currentTabs = this.tabs()
    let assertionFieldCount = assertion.openRevisionCount
    let currentSpecificationsWithEvaluationsTabs = this.specificationsWithEvaluationsTabs()

    for (const specificationWithEvaluations of assertion.specificationsWithEvaluations) {
      let specification = specificationWithEvaluations.specification
      let specName = `${specification.name} (version ${specification.version})`
      let evaluations = specificationWithEvaluations.evaluations
      let evaluationFieldCount = 0
      currentSpecificationsWithEvaluationsTabs[specName] = evaluations.map((evaluation) => {
        assertionFieldCount -= evaluation.openRevisionCount
        evaluationFieldCount += evaluation.openRevisionCount
        return {
          name: `${evaluation.specificationCriterium.criterium} Fields`,
          openCount: evaluation.openRevisionCount,
          moderated: {
            id: evaluation.id,
            entityType: ModeratedEntities.SpecificationEvaluation,
          },
        }
      })
      currentTabs.push({
        name: specName,
        openCount: evaluationFieldCount,
      })

    }
    this.specificationsWithEvaluationsTabs.set(currentSpecificationsWithEvaluationsTabs)
    currentTabs[0].openCount = assertionFieldCount
    this.tabs.set(currentTabs)
  }
}
