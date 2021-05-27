import { Component, Input, OnInit } from '@angular/core';
import {
  HovercardOrgFragment,
  Maybe,
  OrgHoverCardGQL,
} from '@app/generated/civic.apollo';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'cvc-org-hovercard',
  templateUrl: './organization-hovercard.component.html',
  styleUrls: ['./organization-hovercard.component.less'],
})
export class OrganizationHovercardComponent implements OnInit {
  @Input() orgId!: number;

  org$?: Observable<Maybe<HovercardOrgFragment>>;

  constructor(private gql: OrgHoverCardGQL) {}

  ngOnInit() {
    if (this.orgId === undefined) {
      throw new Error('Must pass an id into org hovercard.');
    }

    this.org$ = this.gql
      .watch({ orgId: this.orgId })
      .valueChanges.pipe(map(({ data }) => data.organization));
  }
}
