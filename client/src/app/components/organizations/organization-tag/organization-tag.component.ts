import { Component, Input, OnInit } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

export interface TagLinkableOrganization {
  id: number,
  name: string,
}

@Component({
  selector: 'cvc-organization-tag-r',
  templateUrl: './organization-tag.component.html',
  styleUrls: ['./organization-tag.component.less']
})
export class CvcOrganizationTagComponent implements OnInit {
  @Input() org!: TagLinkableOrganization
  @Input() linked: Maybe<boolean> = true
  @Input() enablePopover: Maybe<boolean> = true

  constructor() { }

  ngOnInit() {
    if (this.org === undefined) {
      throw new Error('cvc-org-tag requires valid TagLinkableOrganization input, none provided.');
    }
  }

}
