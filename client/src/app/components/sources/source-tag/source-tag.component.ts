import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core'
import { SourceTypeDisplayPipe } from '@app/core/pipes/source-type-display.pipe'
import { PopoverPlacement } from '@app/forms/components/entity-tag/entity-tag.types'

import { Maybe, SourceSource } from '@app/generated/civic.apollo'
import { NzPopoverDirective } from 'ng-zorro-antd/popover'

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
  standalone: false,
})
export class CvcSourceTagComponent implements AfterViewInit {
  _source!: SourceTagInput

  @Input()
  set source(src: SourceTagInput) {
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
  @Input() popoverPlacement: PopoverPlacement = 'top'
  @ViewChildren(NzPopoverDirective) popoverList!: QueryList<NzPopoverDirective>
  popover: NzPopoverDirective | undefined

  displayName!: string

  constructor(private sourceTypeDisplay: SourceTypeDisplayPipe) {}

  updatePopoverPosition() {
    if (this.popover) {
      this.popover.updatePosition()
    }
  }

  ngAfterViewInit() {
    if (this.popoverList.length > 0) {
      this.popover = this.popoverList.first
    }
  }
}
