import { Component, Input, OnInit } from '@angular/core';

export interface LinkableDisease {
  id: number,
  displayName: string,
}

@Component({
  selector: 'cvc-disease-tag',
  templateUrl: './disease-tag.component.html',
  styleUrls: ['./disease-tag.component.less']
})
export class DiseaseTagComponent implements OnInit {
  @Input() disease!: LinkableDisease

  constructor() { }

  ngOnInit() {
    if (this.disease === undefined) {
      throw new Error('cvc-disease-tag requires LinkableDisease input, none supplied.')
    }
  }

}
