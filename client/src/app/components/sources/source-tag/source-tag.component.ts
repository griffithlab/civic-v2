import { Component, Input, OnInit } from '@angular/core';
import { SourceTypeDisplayPipe } from '@app/core/pipes/source-type-display.pipe';
import { Maybe, SourceSource } from '@app/generated/civic.apollo';

export interface LinkableSource {
  id: number;
  displayInfo: CitationSource | string
}

export interface CitationSource {
  citation: string;
  sourceType: SourceSource;
}

export interface SourceWithDisplayName {
  id: number,
  displayName: string
}

export interface SourceWithCitation {
  id: number,
  citation: string;
  sourceType: SourceSource;
}

@Component({
  selector: 'cvc-source-tag',
  templateUrl: './source-tag.component.html',
  styleUrls: ['./source-tag.component.less']
})
export class CvcSourceTagComponent implements OnInit {
  @Input() source!: SourceWithDisplayName | SourceWithCitation;
  @Input() linked: Maybe<boolean> = true
  @Input() enablePopover: Maybe<boolean> = true
  displayName!: string

  constructor(private sourceTypeDisplay: SourceTypeDisplayPipe) { }

  ngOnInit() {
    if (this.source === undefined) {
      throw new Error(
        'cvc-source-tag requires LinkableSource input, none provided.'
      );
    }
    if ('displayName' in this.source) {
      this.displayName = this.source.displayName
    } else {
      this.displayName = this.sourceTypeDisplay.transform(this.source.sourceType) + ': ' + this.source.citation
    }
  }

}
