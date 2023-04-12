import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'

export type SupportedPileupTags = 'therapy' | 'disease' | 'gene' | 'organization' | 'variant' | 'variant-type'

export type TagInfo = {
  id: number
  name: string
  link: string
}

@Component({
  selector: 'cvc-tag-overflow',
  templateUrl: './tag-overflow.component.html',
  styleUrls: ['./tag-overflow.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcTagOverflowComponent implements OnChanges {
  @Input() tags: Maybe<TagInfo[]>
  @Input() maxDisplayCount: number = 2
  @Input() matchingText?: string
  @Input() tagType: Maybe<SupportedPileupTags>
  @Input() thisOne = false

  displayedTags?: TagInfo[]
  hiddenTags?: TagInfo[]
  hiddenCount?: number
  matchedHiddenCount: number = 0
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnChanges(_: SimpleChanges): void {
    // if (this.thisOne) console.log(changes);

    // displayedTags: this.displayedTags,
    // hiddenTags: this.hiddenTags,
    // hiddenCount: this.hiddenCount,
    // matchingText: this.matchingText

    this.calculateDisplayedTags()
  }

  calculateDisplayedTags() {
    this.displayedTags = this.tags?.slice(0, this.maxDisplayCount)
    this.hiddenTags = this.tags?.slice(this.maxDisplayCount)
    this.hiddenCount = this.hiddenTags?.length

    if (this.matchingText) {
      this.matchedHiddenCount = 0
      if (this.hiddenTags) {
        let text = this.matchingText.toLowerCase()
        this.hiddenTags.forEach((t) => {
          if (t.name.toLowerCase().includes(text)) {
            this.matchedHiddenCount += 1
          }
        })
      }
    } else {
      this.matchedHiddenCount = 0
    }

    this.cdr.detectChanges()
  }

  // removed the template (click) emitter for onOverflowClicked, since
  // we're using these overflow components in fixed-height rows
  // which will clip the additional tags. TODO: delete if we decide
  // to keep this new behavior
  // onOverflowClicked() {
  //   this.maxDisplayCount = this.tags?.length || 0
  //   this.calculateDisplayedTags()
  // }
}
