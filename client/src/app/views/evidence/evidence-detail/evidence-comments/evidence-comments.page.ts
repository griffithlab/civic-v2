import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentableEntities, CommentableInput } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-evidence-comments',
  templateUrl: './evidence-comments.page.html',
  styleUrls: ['./evidence-comments.page.less'],
})
export class EvidenceCommentsPage {
  commentable: CommentableInput

  constructor(private route: ActivatedRoute) {
    const evidenceId: number = +this.route.snapshot.params['evidenceId'];
    this.commentable = {
      id: evidenceId,
      entityType: CommentableEntities.EvidenceItem
    }
  }
}
