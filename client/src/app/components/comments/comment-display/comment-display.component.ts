import { Component, Input, OnInit } from '@angular/core'
import { CommentBodySegment, Maybe } from '@app/generated/civic.apollo'

export interface CommenterInterface {
  displayName: string
  profileImagePath: Maybe<string>
}

export interface CommentInterface {
  createdAt: string | number
  parsedComment: CommentBodySegment[]
  commenter: CommenterInterface
}

@Component({
  selector: 'cvc-comment-display',
  templateUrl: './comment-display.component.html',
})
export class CvcCommentDisplayComponent implements OnInit {
  @Input() comment!: CommentInterface

  ngOnInit() {
    if (this.comment === undefined) {
      throw new Error('Must pass a comment into comment display component.')
    }
  }
}
