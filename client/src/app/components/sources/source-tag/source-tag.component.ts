import { Component, Input, OnInit } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkableSource {
  id: number;
  citation: string;
  sourceType: string;
}

@Component({
  selector: 'cvc-source-tag',
  templateUrl: './source-tag.component.html',
  styleUrls: ['./source-tag.component.less']
})
export class CvcSourceTagComponent implements OnInit {
  @Input() source!: any;
  @Input() linked: Maybe<boolean> = true
  @Input() enablePopover: Maybe<boolean> = true

  constructor() { }

  ngOnInit() {
    if (this.source === undefined) {
      throw new Error(
        'cvc-source-tag requires LinkableSource input, none provided.'
      );
    }
  }

}
