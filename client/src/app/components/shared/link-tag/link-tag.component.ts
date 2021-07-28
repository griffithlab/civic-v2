import { Component, Input, OnInit } from '@angular/core';

export interface ExternalLink {
  url: string;
  label: string;
  tooltip?: string;
}

@Component({
  selector: 'cvc-link-tag',
  templateUrl: './link-tag.component.html',
  styleUrls: ['./link-tag.component.less']
})
export class LinkTagComponent implements OnInit {
  @Input() link!: ExternalLink;

  constructor() { }

  ngOnInit() {
    if (this.link === undefined) {
      throw new Error(
        'cvc-link-tag requires ExternalLink input, none supplied.'
      );
    }
  }

}
