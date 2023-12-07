import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ModeratedEntities } from '@app/generated/civic.apollo'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-features-revisions',
  templateUrl: './features-revisions.page.html',
  styleUrls: ['./features-revisions.page.less'],
})
export class FeaturesRevisionsPage implements OnDestroy {
  geneId!: number
  entityType!: ModeratedEntities

  routeSub: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.geneId = +params.featureId
      this.entityType = ModeratedEntities['Gene']
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}
