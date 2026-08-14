import { Component, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  CommentableEntities,
  CommentableInput,
} from '@app/generated/civic.apollo.types'

@Component({
  selector: 'cvc-features-comments',
  templateUrl: './features-comments.page.html',
  styleUrls: ['./features-comments.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class FeaturesCommentsPage {
  commentable: CommentableInput

  constructor(private route: ActivatedRoute) {
    const featureId: number = +this.route.snapshot.params['featureId']
    this.commentable = {
      id: featureId,
      entityType: CommentableEntities.Feature,
    }
  }
}
