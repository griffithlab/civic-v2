import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'

@Component({
    selector: 'cvc-plain-tag-overflow',
    templateUrl: './plain-tag-overflow.component.html',
    styleUrls: ['./plain-tag-overflow.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcPlainTagOverflowComponent implements OnChanges {
  @Input() tags: Maybe<string[]>

  // _tags: Maybe<string[]>;
  @Input()
  // set tags(t: Maybe<string[]>) {
  //   this._tags = t;
  //   this.calculateDisplayedTags();
  // }
  // get tags(): Maybe<string[]> { return this._tags }
  @Input()
  matchingText?: string
  @Input() maxDisplayCount: number = 2

  displayedTags?: string[]
  hiddenTags?: string[]
  hiddenCount?: number
  matchedHiddenCount: number = 0

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(_: SimpleChanges): void {
    this.calculateDisplayedTags()
  }

  calculateDisplayedTags() {
    this.displayedTags = this.tags?.slice(0, this.maxDisplayCount)
    this.hiddenTags = this.tags?.slice(this.maxDisplayCount)
    this.hiddenCount = this.hiddenTags?.length

    if (this.matchingText) {
      if (this.hiddenTags) {
        let text = this.matchingText.toLowerCase()
        this.hiddenTags.forEach((t) => {
          if (t.toLowerCase().includes(text)) {
            this.matchedHiddenCount += 1
          }
        })
      }
    } else {
      this.matchedHiddenCount = 0
    }
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
