import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  Maybe,
  MolecularProfileDetailFieldsFragment,
  MolecularProfileDetailGQL,
} from '@app/generated/civic.apollo'
import { Observable, Subscription } from 'rxjs'
import { map, startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

@Component({
  selector: 'cvc-molecular-profiles-revise',
  templateUrl: './molecular-profiles-revise.view.html',
  styleUrls: ['./molecular-profiles-revise.view.less'],
  standalone: false,
})
export class MolecularProfilesReviseView implements OnInit, OnDestroy {
  loading$?: Observable<boolean>
  molecularProfile$?: Observable<Maybe<MolecularProfileDetailFieldsFragment>>
  commentsTotal$?: Observable<number>
  revisionsTotal$?: Observable<number>
  flagsTotal$?: Observable<number>
  routeSub: Subscription
  isSignedIn$?: Observable<boolean>

  constructor(
    private gql: MolecularProfileDetailGQL,
    private route: ActivatedRoute,
    private viewerService: ViewerService
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      let observable = this.gql.watch({
        mpId: +params.molecularProfileId,
      }).valueChanges

      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.molecularProfile$ = observable.pipe(
        pluck('data', 'molecularProfile')
      )

      this.commentsTotal$ = this.molecularProfile$.pipe(
        pluck('comments', 'totalCount')
      )

      this.flagsTotal$ = this.molecularProfile$.pipe(
        pluck('flags', 'totalCount')
      )

      this.revisionsTotal$ = this.molecularProfile$.pipe(
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
