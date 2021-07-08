import { Component, OnInit, Input } from '@angular/core';

export interface LinkableRevision {
  id: number,
  name: string
}

@Component({
  selector: 'cvc-revision-tag',
  templateUrl: './revision-tag.component.html',
  styleUrls: ['./revision-tag.component.less']
})
export class RevisionTagComponent implements OnInit {
  @Input() revision!: LinkableRevision

  constructor() { }

  ngOnInit() {
    if (this.revision=== undefined) {
      throw new Error('cvc-revision-tag requires LinkableRevision input, none supplied.')
    }
  }

}
