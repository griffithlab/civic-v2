import { Component, Input, OnInit } from '@angular/core'
import {
  CommentTagSegment,
  CommentTagSegmentDeprecated,
  CommentTextSegment,
} from '@app/generated/civic.apollo'

interface CommentBodyUserSegment {
  __typename: 'User'
  id: number
  displayName: string
  role: string
}

export type CommentSegment =
  | CommentBodyUserSegment
  | CommentTagSegment
  | CommentTagSegmentDeprecated
  | CommentTextSegment

@Component({
  selector: 'cvc-comment-body',
  templateUrl: './comment-body.component.html',
})
export class CvcCommentBodyComponent implements OnInit {
  @Input() commentBodySegments!: CommentSegment[]

  ngOnInit() {
    if (this.commentBodySegments === undefined) {
      throw new Error(
        'Must pass a list of comment body segments into comment body component.'
      )
    }
  }
}
