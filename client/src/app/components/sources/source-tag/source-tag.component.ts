import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { SourceTypeDisplayPipe } from '@app/core/pipes/source-type-display.pipe'
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base'
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
export class CvcSourceTagComponent extends BaseCloseableTag implements OnInit {
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

  @Input() enablePopover: Maybe<boolean> = true
  @Input() linked: Maybe<boolean> = true
  @Input() mode: 'normal' | 'concise' = 'normal'
  @Input() truncateLongName: Maybe<boolean> = false

  displayName!: string

  constructor(private sourceTypeDisplay: SourceTypeDisplayPipe) {
    super()
  }

  idFunction() {
    return this.source.id
  }
}
