import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { SourceTypeDisplayPipe } from '@app/core/pipes/source-type-display.pipe'

import { Maybe, SourceSource } from '@app/generated/civic.apollo'

export interface LinkableSource {
  id: number
  displayInfo: CitationSource | string
  link: string
  deprecated: boolean
}

export interface CitationSource {
  citation: string
  sourceType: SourceSource
  deprecated: boolean
}

export interface SourceWithDisplayName {
  id: number
  displayName: string
  link: string
  deprecated: boolean
}

export interface SourceWithCitation {
  id: number
  citation?: string
  sourceType: SourceSource
  link: string
  deprecated: boolean
}

type SourceTagInput = SourceWithDisplayName | SourceWithCitation

@Component({
  selector: 'cvc-source-tag',
  templateUrl: './source-tag.component.html',
  styleUrls: ['./source-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcSourceTagComponent {
  _source!: SourceTagInput

  @Input()
  set source(src: SourceTagInput) {
    if (!src) {
      throw new Error(
        'source-tag source input requires SourceWithDisplayName or SourceWithCitation.'
      )
    }
    this._source = src
    if ('displayName' in this.source) {
      this.displayName = this.source.displayName
    } else {
      this.displayName =
        this.sourceTypeDisplay.transform(this.source.sourceType) +
        ': ' +
        this.source.citation
    }
  }
  get source(): SourceTagInput {
    return this._source
  }

  @Input() enablePopover?: boolean = true
  @Input() linked?: boolean = true
  @Input() mode: 'normal' | 'concise' = 'normal'
  @Input() truncateLongName: Maybe<boolean> = false

  displayName!: string

  constructor(private sourceTypeDisplay: SourceTypeDisplayPipe) {}

  idFunction() {
    return this.source.id
  }
}
