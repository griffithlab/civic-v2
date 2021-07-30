import { Component, ContentChildren, Input, OnInit, QueryList, TemplateRef } from "@angular/core";
import { Maybe } from "@app/generated/civic.apollo";

export type SupportedPileupTags = 'drug' | 'disease'

export type TagInfo = {
  id: number
  name: string
}

@Component({
  selector: 'cvc-tag-pileup',
  templateUrl: './tag-pileup.component.html',
  styleUrls: ['./tag-pileup.component.less']
})
export class TagPileupComponent implements OnInit  {
  @Input() matchingText?: string
  @Input() tags: Maybe<TagInfo[]>
  @Input() tagType: Maybe<SupportedPileupTags>
  @Input() maxDisplayCount: number = 2

  displayedTags?: TagInfo[]
  hiddenTags?: TagInfo[]
  hiddenCount?: number
  matchedHidden: boolean = false

  ngOnInit() {
    this.displayedTags = this.tags?.slice(0, this.maxDisplayCount)
    this.hiddenTags = this.tags?.slice(this.maxDisplayCount)
    this.hiddenCount = this.hiddenTags?.length
    this.matchingText = this.matchingText?.toLowerCase()

    if (this.matchingText && this.hiddenTags) {
      let text = this.matchingText
      this.hiddenTags.forEach(t => {
        if(t.name.toLowerCase().includes(text)) {
          this.matchedHidden = true
        }
      });
    }
  }
}