import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ModeratedEntities } from '@app/generated/civic.apollo'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-genes-revisions',
  templateUrl: './genes-revisions.page.html',
  styleUrls: ['./genes-revisions.page.less'],
})
export class GenesRevisionsPage implements OnDestroy {
  geneId!: number
  entityType!: ModeratedEntities

  routeSub: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.geneId = +params.geneId
      this.entityType = ModeratedEntities['Gene']
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}
