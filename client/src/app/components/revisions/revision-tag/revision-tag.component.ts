import { Component, OnInit, Input } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkableRevision {
  id: number,
  name: string,
  link: string,
  revisionsetId: string
}

export interface Subject {
  id: number,
  __typename: string
}

@Component({
  selector: 'cvc-revision-tag',
  templateUrl: './revision-tag.component.html',
  styleUrls: ['./revision-tag.component.less']
})
export class CvcRevisionTagComponent implements OnInit {
  @Input() revision!: LinkableRevision
  @Input() subject?: Subject
  @Input() enablePopover: Boolean = true

  constructor() { }

  ngOnInit() {
    if (this.revision=== undefined) {
      throw new Error('cvc-revision-tag requires LinkableRevision input, none supplied.')
    }
  }

}
