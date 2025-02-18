import { Component, Input, OnInit } from '@angular/core'
import {
  Maybe,
  OrgPopoverFragment,
  OrgPopoverGQL,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-organization-popover',
  templateUrl: './organization-popover.component.html',
  styleUrls: ['./organization-popover.component.less'],
  standalone: false,
})
export class CvcOrganizationPopoverComponent implements OnInit {
  @Input() orgId!: number

  org$?: Observable<Maybe<OrgPopoverFragment>>

  constructor(private gql: OrgPopoverGQL) {}

  ngOnInit() {
    if (this.orgId === undefined) {
      throw new Error('cvc-org-popover requires orgId input.')
    }

    this.org$ = this.gql.watch({ orgId: this.orgId }).valueChanges.pipe(
      map(({ data }) => data?.organization),
      filter(isNonNulled)
    )
  }
}
