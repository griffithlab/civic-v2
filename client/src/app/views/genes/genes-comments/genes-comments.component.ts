import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentableEntities, CommentableInput } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-genes-comments',
  templateUrl: './genes-comments.component.html',
  styleUrls: ['./genes-comments.component.less'],
})
export class GenesCommentsComponent {
  commentable: CommentableInput

  constructor(private route: ActivatedRoute) {
    const geneId: number = +this.route.snapshot.params['geneId'];
    this.commentable = {
      id: geneId,
      entityType: CommentableEntities.Gene
    }
  }
}
