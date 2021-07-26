import { Component, Input, OnInit } from '@angular/core';

export interface LinkablePhenotype {
  id: number,
  name: string,
}

@Component({
  selector: 'cvc-phenotype-tag',
  templateUrl: './phenotype-tag.component.html',
  styleUrls: ['./phenotype-tag.component.less']
})
export class PhenotypeTagComponent implements OnInit {
  @Input() phenotype!: LinkablePhenotype

  constructor() { }

  ngOnInit() {
    if (this.phenotype === undefined) {
      throw new Error('cvc-phenotype-tag requires LinkablePhenotype input, none supplied.')
    }
  }

}
