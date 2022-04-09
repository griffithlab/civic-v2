import { Component, Input, OnInit } from '@angular/core';
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkableDisease {
  id: number,
  name: string,
  link: string,
}

@Component({
  selector: 'cvc-disease-tag',
  templateUrl: './cvc-disease-tag.component.html',
  styleUrls: ['./cvc-disease-tag.component.less']
})
export class CvcDiseaseTagComponent extends BaseCloseableTag implements OnInit {
  @Input() disease!: LinkableDisease
  @Input() enablePopover: Maybe<boolean> = true
  @Input() truncateLongName: Maybe<boolean> = false

  constructor() { 
    super();
  }

  idFunction() {
    return this.disease.id
  }

  ngOnInit() {
    super.ngOnInit();
    if (this.disease === undefined) {
      throw new Error('cvc-disease-tag requires LinkableDisease input, none supplied.')
    }
  }

}
