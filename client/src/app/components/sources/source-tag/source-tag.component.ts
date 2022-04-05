import { Component, Input, OnInit } from '@angular/core';
import { SourceTypeDisplayPipe } from '@app/core/pipes/source-type-display.pipe';
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base';
import { Maybe, SourceSource } from '@app/generated/civic.apollo';

export interface LinkableSource {
  id: number;
  displayInfo: CitationSource | string
  link: string;
}

export interface CitationSource {
  citation: string;
  sourceType: SourceSource;
}

export interface SourceWithDisplayName {
  id: number,
  displayName: string
  link: string
}

export interface SourceWithCitation {
  id: number,
  citation: string;
  sourceType: SourceSource;
  link: string
}

@Component({
  selector: 'cvc-source-tag',
  templateUrl: './source-tag.component.html',
  styleUrls: ['./source-tag.component.less'],
})
export class CvcSourceTagComponent extends BaseCloseableTag implements OnInit {
  @Input() source!: SourceWithDisplayName | SourceWithCitation;
  @Input() enablePopover: Maybe<boolean> = true
  @Input() linked: Maybe<boolean> = true
  @Input() mode: 'normal' | 'concise' = 'normal'

  displayName!: string

  constructor(private sourceTypeDisplay: SourceTypeDisplayPipe) {
    super();
   }

  idFunction() { 
    return this.source.id 
  }

  ngOnInit() {
    super.ngOnInit();

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
