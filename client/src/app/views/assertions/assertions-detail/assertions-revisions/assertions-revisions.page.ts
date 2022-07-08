import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeratedEntities } from '@app/generated/civic.apollo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cvc-assertions-revisions',
  templateUrl: './assertions-revisions.page.html',
  styleUrls: ['./assertions-revisions.page.less']
})
export class AssertionsRevisionsPage implements OnInit {
  aid!: number
  entityType!: ModeratedEntities

  routeSub: Subscription

  constructor(
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.aid = +params.assertionId;
      this.entityType = ModeratedEntities['Assertion']
    });
  }
  ngOnInit(): void {
  }

}
