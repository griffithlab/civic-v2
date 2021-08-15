import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentableEntities, CommentableInput } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-genes-comments',
  templateUrl: './genes-comments.page.html',
  styleUrls: ['./genes-comments.page.less'],
})
export class GenesCommentsPage {
  commentable: CommentableInput

  constructor(private route: ActivatedRoute) {
    const geneId: number = +this.route.snapshot.params['geneId'];
    this.commentable = {
      id: geneId,
      entityType: CommentableEntities.Gene
    }
  }
}
