import { Component, Input, OnInit } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkableDrug {
  id: number,
  name: string,
}

@Component({
  selector: 'cvc-drug-tag',
  templateUrl: './drug-tag.component.html',
  styleUrls: ['./drug-tag.component.less']
})
export class DrugTagComponent implements OnInit {
  @Input() drug!: LinkableDrug
  @Input() linked: Maybe<boolean> = true

  constructor() { }

  ngOnInit() {
    if (this.drug === undefined) {
      throw new Error('cvc-drug-tag requires LinkableDrug input, none supplied.')
    }
  }

}
