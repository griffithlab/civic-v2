import { Component, OnInit, Signal, effect, computed } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  AssertionDetailFieldsFragment,
  AssertionDetailGQL,
  AssertionDetailQuery,
  AssertionDetailQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import { filter, map } from 'rxjs/operators'
import { isNonNulled } from 'rxjs-etc'
import { ApolloQueryResult } from '@apollo/client/core'
import { QueryRef } from 'apollo-angular'

@Component({
    selector: 'cvc-assertion-evaluate',
    templateUrl: './assertion-evaluate.view.html',
    styleUrls: ['./assertion-evaluate.view.less'],
    standalone: false
})
export class AssertionEvaluateView implements OnInit {
  /* PRESENTATION SIGNALS */
  viewer: Signal<Maybe<Viewer>>
  assertion: Signal<Maybe<AssertionDetailFieldsFragment>>

  assertionId: Signal<number>

  constructor(
    private gql: AssertionDetailGQL,
    private route: ActivatedRoute,
    private viewerService: ViewerService
  ) {
    this.assertionId = toSignal(
      this.route.params.pipe(
        map(params => +params['assertionId']),
      ),
      { requireSync: true }
    );

    this.assertion = toSignal(this.gql.fetch({ assertionId: this.assertionId() }).pipe(
      map((r) => r.data),
      filter(isNonNulled),
      map(({ assertion }) => assertion)
    ))

    // provide viewer$ observable as signal
    this.viewer = toSignal(this.viewerService.viewer$)
  }

  ngOnInit(): void {}
}
