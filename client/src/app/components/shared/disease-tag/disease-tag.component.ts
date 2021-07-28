import { Component, Input, OnInit } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkableDisease {
  id: number,
  name: string,
}

@Component({
  selector: 'cvc-disease-tag',
  templateUrl: './disease-tag.component.html',
  styleUrls: ['./disease-tag.component.less']
})
export class DiseaseTagComponent implements OnInit {
  @Input() disease!: LinkableDisease
  @Input() linked: Maybe<boolean> = true
  @Input() enablePopover: Maybe<boolean> = true

  constructor() { }

  ngOnInit() {
    if (this.disease === undefined) {
      throw new Error('cvc-disease-tag requires LinkableDisease input, none supplied.')
    }
  }

}
