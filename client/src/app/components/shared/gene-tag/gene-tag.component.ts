import { Component, Input, OnInit } from '@angular/core';

export interface LinkableGene {
  id: number,
  name: string,
}

@Component({
  selector: 'cvc-gene-tag',
  templateUrl: './gene-tag.component.html',
  styleUrls: ['./gene-tag.component.less']
})
export class GeneTagComponent implements OnInit {
  @Input() gene!: LinkableGene

  constructor() { }

  ngOnInit() {
    if (this.gene === undefined) {
      throw new Error('cvc-gene-pill requires gene input, none supplied.')
    }
  }

}
