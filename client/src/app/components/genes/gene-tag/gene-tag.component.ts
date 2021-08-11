import { Component, Input, OnInit } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkableGene {
  id: number;
  name: string;
}

@Component({
  selector: 'cvc-gene-tag-r',
  templateUrl: './gene-tag.component.html',
  styleUrls: ['./gene-tag.component.less']
})
export class CvcGeneTagComponent implements OnInit {
  @Input() gene!: LinkableGene;
  @Input() linked: Maybe<boolean> = true
  @Input() enablePopover: Maybe<boolean> = true

  constructor() { }

  ngOnInit() {
    if (this.gene === undefined) {
      throw new Error(
        'cvc-gene-tag requires LinkableGene input, none supplied.'
      );
    }
  }
}
