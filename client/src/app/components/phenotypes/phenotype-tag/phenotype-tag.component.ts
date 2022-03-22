import { Component, Input, OnInit } from '@angular/core';
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkablePhenotype {
  id: number,
  name: string,
  link: string,
}

@Component({
  selector: 'cvc-phenotype-tag',
  templateUrl: './phenotype-tag.component.html',
  styleUrls: ['./phenotype-tag.component.less']
})
export class CvcPhenotypeTagComponent extends BaseCloseableTag implements OnInit {
  @Input() phenotype!: LinkablePhenotype
  @Input() enablePopover: Maybe<boolean> = true

  constructor() { 
    super();
  }

  idFunction(): number {
    return this.phenotype.id;
  }

  ngOnInit() {
    super.ngOnInit()
    if (this.phenotype === undefined) {
      throw new Error('cvc-phenotype-tag requires LinkablePhenotype input, none supplied.')
    }
  }
}
