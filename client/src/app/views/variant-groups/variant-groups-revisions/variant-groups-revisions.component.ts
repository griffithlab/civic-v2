import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maybe, ModeratedEntities, Organization } from '@app/generated/civic.apollo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cvc-variant-groups-revisions',
  templateUrl: './variant-groups-revisions.component.html',
  styleUrls: ['./variant-groups-revisions.component.less'],
})
export class VariantGroupsRevisionsComponent implements OnDestroy{
  vgId!: number
  entityType!: ModeratedEntities
  
  routeSub: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.vgId = +params.variantGroupId;
      this.entityType = ModeratedEntities['VariantGroup']
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
