import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentableEntities, CommentableInput } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-evidence-comments',
  templateUrl: './evidence-comments.component.html',
  styleUrls: ['./evidence-comments.component.less'],
})
export class EvidenceCommentsComponent {
  commentable: CommentableInput

  constructor(private route: ActivatedRoute) {
    const evidenceId: number = +this.route.snapshot.params['evidenceId'];
    this.commentable = {
      id: evidenceId,
      entityType: CommentableEntities.EvidenceItem
    }
  }
}
