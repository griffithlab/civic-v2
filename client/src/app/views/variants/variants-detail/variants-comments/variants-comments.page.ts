import { Component, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  CommentableEntities,
  CommentableInput,
} from '@app/generated/civic.apollo.types'

@Component({
  selector: 'cvc-variants-comments',
  templateUrl: './variants-comments.page.html',
  styleUrls: ['./variants-comments.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class VariantsCommentsPage {
  commentable: CommentableInput

  constructor(private route: ActivatedRoute) {
    const variantId: number = +this.route.snapshot.params['variantId']
    this.commentable = {
      id: variantId,
      entityType: CommentableEntities.Variant,
    }
  }
}
