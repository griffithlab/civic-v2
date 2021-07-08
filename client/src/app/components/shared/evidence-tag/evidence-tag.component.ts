import { Component, Input, OnInit } from '@angular/core';

export interface LinkableEvidence {
  id: number,
  name: string,
}

@Component({
  selector: 'cvc-evidence-tag',
  templateUrl: './evidence-tag.component.html',
  styleUrls: ['./evidence-tag.component.less']
})
export class EvidenceTagComponent implements OnInit {
  @Input() evidence!: LinkableEvidence

  constructor() { }

  ngOnInit() {
    if (this.evidence === undefined) {
      throw new Error('cvc-evidence-tag requires LinkableEvidence input, none supplied.')
    }
  }

}
