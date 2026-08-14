import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ViewerService } from '@app/core/services/viewer/viewer.service'
import { Maybe } from '@app/generated/civic.apollo.types'
import {
  EvidenceDetailFieldsFragment,
  EvidenceDetailGQL,
} from '@app/views/evidence/evidence-detail/evidence-detail.query.gql.generated'
import { Observable, Subscription } from 'rxjs'
import { map, startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

@Component({
  selector: 'cvc-evidence-revise',
  templateUrl: './evidence-revise.view.html',
  styleUrls: ['./evidence-revise.view.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class EvidenceReviseView implements OnInit, OnDestroy {
  loading$?: Observable<boolean>
  evidence$?: Observable<Maybe<EvidenceDetailFieldsFragment>>
  commentsTotal$?: Observable<number>
  revisionsTotal$?: Observable<number>
  flagsTotal$?: Observable<number>
  routeSub: Subscription
  isSignedIn$?: Observable<boolean>

  constructor(
    private gql: EvidenceDetailGQL,
    private route: ActivatedRoute,
    private viewerService: ViewerService
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      let observable = this.gql.watch({
        variables: {
          evidenceId: +params.evidenceId,
        },
      }).valueChanges

      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.evidence$ = observable.pipe(pluck('data', 'evidenceItem'))

      this.commentsTotal$ = this.evidence$.pipe(pluck('comments', 'totalCount'))

      this.flagsTotal$ = this.evidence$.pipe(pluck('flags', 'totalCount'))

      this.revisionsTotal$ = this.evidence$.pipe(
        pluck('revisions', 'totalCount')
      )
    })
  }

  ngOnInit(): void {
    this.isSignedIn$ = this.viewerService.viewer$.pipe(map((v) => v.signedIn))
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }
}
