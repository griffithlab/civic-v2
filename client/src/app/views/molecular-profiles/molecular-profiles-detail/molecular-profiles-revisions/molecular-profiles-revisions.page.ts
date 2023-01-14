import { Component, OnDestroy, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeratedEntities } from '@app/generated/civic.apollo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cvc-molecular-profiles-revisions',
  templateUrl: './molecular-profiles-revisions.page.html',
})
export class MolecularProfilesRevisionsPage implements OnDestroy {
  molecularProfileId!: number
  entityType!: ModeratedEntities
  
  routeSub: Subscription

  constructor(
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.molecularProfileId= +params.molecularProfileId;
      this.entityType = ModeratedEntities.MolecularProfile
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
