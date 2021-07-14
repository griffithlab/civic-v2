import { Component, Input, OnInit } from '@angular/core';
import {
  OrgPopoverFragment,
  Maybe,
  OrgPopoverGQL,
} from '@app/generated/civic.apollo';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'cvc-org-popover',
  templateUrl: './org-popover.component.html',
  styleUrls: ['./org-popover.component.less'],
})
export class OrgPopoverComponent implements OnInit {
  @Input() orgId!: number;

  org$?: Observable<Maybe<OrgPopoverFragment>>;

  constructor(private gql: OrgPopoverGQL) { }

  ngOnInit() {
    if (this.orgId === undefined) {
      throw new Error('cvc-org-popover requires orgId input.');
    }

    this.org$ = this.gql
      .watch({ orgId: this.orgId })
      .valueChanges.pipe(map(({ data }) => data.organization));
  }
}
