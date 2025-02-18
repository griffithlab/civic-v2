import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  CommentableEntities,
  CommentableInput,
} from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-variants-comments',
  templateUrl: './variants-comments.page.html',
  styleUrls: ['./variants-comments.page.less'],
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
