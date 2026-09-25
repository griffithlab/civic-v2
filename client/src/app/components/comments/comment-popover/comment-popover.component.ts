import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import {
  CommentPopoverFragment,
  CommentPopoverGQL,
  Maybe,
} from '@app/generated/civic.apollo'

import { Observable } from 'rxjs'
import { pluck } from 'rxjs-etc/operators'

@Component({
  selector: 'cvc-comment-popover',
  templateUrl: './comment-popover.component.html',
  styleUrls: ['./comment-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CvcCommentPopoverComponent implements OnInit {
  @Input() commentId!: number

  comment$?: Observable<Maybe<CommentPopoverFragment>>

  constructor(private gql: CommentPopoverGQL) {}

  ngOnInit() {
    if (this.commentId == undefined) {
      throw new Error('cvc-comment-popover requires valid commentId input.')
    }
    this.comment$ = this.gql
      .watch({ variables: { commentId: this.commentId } })
      .valueChanges.pipe(pluck('data', 'comment'))
  }
}
