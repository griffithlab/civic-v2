import { Component, Input, OnInit } from "@angular/core";
import { Maybe } from "@app/generated/civic.apollo";

@Component({
  selector: 'cvc-plain-tag-overflow',
  templateUrl: './plain-tag-overflow.component.html',
  styleUrls: ['./plain-tag-overflow.component.less']
})
export class CvcPlainTagOverflowComponent implements OnInit {
  @Input() matchingText?: string
  @Input() tags: Maybe<string[]>
  @Input() maxDisplayCount: number = 2

  displayedTags?: string[]
  hiddenTags?: string[]
  hiddenCount?: number
  matchedHiddenCount: number = 0

  ngOnInit() {
    this.calculateDisplayedTags()
  }

  calculateDisplayedTags() {
    this.displayedTags = this.tags?.slice(0, this.maxDisplayCount)
    this.hiddenTags = this.tags?.slice(this.maxDisplayCount)
    this.hiddenCount = this.hiddenTags?.length
    this.matchingText = this.matchingText?.toLowerCase()

    if (this.matchingText && this.hiddenTags) {
      let text = this.matchingText
      this.hiddenTags.forEach(t => {
        if (t.toLowerCase().includes(text)) {
          this.matchedHiddenCount += 1
        }
      });
    }
  }

  onOverflowClicked() { 
    this.maxDisplayCount = this.tags?.length || 0
    this.calculateDisplayedTags()
  }
}
