import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkableGene {
  id: number;
  name: string;
}

@Component({
  selector: 'cvc-gene-tag',
  templateUrl: './gene-tag.component.html',
  styleUrls: ['./gene-tag.component.less']
})
export class CvcGeneTagComponent extends BaseCloseableTag implements OnInit, OnChanges {
  @Input() gene!: LinkableGene;
  @Input() enablePopover: Maybe<boolean> = true

  constructor() {
    super();
  }

  idFunction(): number {
    return this.gene.id;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    super.ngOnInit();
    if (this.gene === undefined) {
      throw new Error(
        'cvc-gene-tag requires LinkableGene input, none supplied.'
      );
    }
  }
}
