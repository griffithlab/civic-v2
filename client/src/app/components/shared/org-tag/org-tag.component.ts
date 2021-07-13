import { Component, Input, OnInit } from '@angular/core';

export interface TagLinkableOrganization {
  id: number,
  name: string,
}

@Component({
  selector: 'cvc-org-tag',
  templateUrl: './org-tag.component.html',
  styleUrls: ['./org-tag.component.less']
})
export class OrgTagComponent implements OnInit {
  @Input() org!: TagLinkableOrganization
  constructor() { }

  ngOnInit() {
    if (this.org === undefined) {
      throw new Error('cvc-org-tag requires valid TagLinkableOrganization input, none provided.');
    }
  }

}
