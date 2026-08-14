import { Component, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  CommentableEntities,
  CommentableInput,
} from '@app/generated/civic.apollo.types'

@Component({
  selector: 'cvc-sources-comments',
  templateUrl: './sources-comments.page.html',
  styleUrls: ['./sources-comments.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SourcesCommentsPage {
  commentable: CommentableInput

  constructor(private route: ActivatedRoute) {
    const sourceId: number = +this.route.snapshot.params['sourceId']
    this.commentable = {
      id: sourceId,
      entityType: CommentableEntities.Source,
    }
  }
}
