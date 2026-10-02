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
  evaluationSub?: Subscription

  tabs: WritableSignal<RevisionsTab[]> = signal([])
  //todo: this should be an array of tabs for each specification
  evaluationTabs: WritableSignal<RevisionsTab[]> = signal([])

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

        this.evaluationSub = this.gql
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
    //the open revision count reported from the server includes revisions to coordinate fields
    //so we have to do some math here to get the correct number just for the variant fields tab
    let currentTabs = this.tabs()
    let assertionFieldCount = assertion.openRevisionCount
    if (assertion.specificationEvaluations.length > 0) {
      let currentEvaluationTabs = this.evaluationTabs()
      let evaluationFieldCount = 0
      assertion.specificationEvaluations.forEach((evaluation) => {
        assertionFieldCount -= evaluation.openRevisionCount
        evaluationFieldCount += evaluation.openRevisionCount
        currentEvaluationTabs.push({
          name: `${evaluation.specificationCriterium.criterium} Fields`,
          openCount: evaluation.openRevisionCount,
          moderated: {
            id: evaluation.id,
            entityType: ModeratedEntities.SpecificationEvaluation,
          },
        })
      })
      //todo: these should be tabs, one for each specification
      currentTabs.push({
        name: "Evaluations",
        openCount: evaluationFieldCount,
      })
      this.evaluationTabs.set(currentEvaluationTabs)
    }
    currentTabs[0].openCount = assertionFieldCount
    this.tabs.set(currentTabs)
  }
}
