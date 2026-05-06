import { Component, Input, OnInit } from '@angular/core'

export interface LinkableComment {
  id: number
  name: string
  link: string
}

export interface Subject {
  id: number
  __typename: string
}

@Component({
    selector: 'cvc-comment-tag',
    templateUrl: './comment-tag.component.html',
    standalone: false
})
export class CvcCommentTagComponent implements OnInit {
  @Input() comment!: LinkableComment
  @Input() subject?: Subject
  @Input() enablePopover: Boolean = true

  constructor() {}

  ngOnInit(): void {
    if (this.comment === undefined) {
      throw new Error(
        'cvc-comment-tag requires LinkableComment input, none supplied.'
      )
    }
  }
}
