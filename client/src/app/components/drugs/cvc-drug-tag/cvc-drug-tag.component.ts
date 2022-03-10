import { Component, Input, OnInit } from '@angular/core';
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkableDrug {
  id: number,
  name: string,
}

@Component({
  selector: 'cvc-drug-tag',
  templateUrl: './cvc-drug-tag.component.html',
  styleUrls: ['./cvc-drug-tag.component.less']
})
export class CvcDrugTagComponent extends BaseCloseableTag implements OnInit {
  @Input() drug!: LinkableDrug
  @Input() enablePopover: Maybe<boolean> = true

  constructor() { 
    super();
  }

  idFunction(): number {
    return this.drug.id;
  }

  ngOnInit() {
    super.ngOnInit();
    if (this.drug === undefined) {
      throw new Error('cvc-drug-tag requires LinkableDrug input, none supplied.')
    }
  }

}
