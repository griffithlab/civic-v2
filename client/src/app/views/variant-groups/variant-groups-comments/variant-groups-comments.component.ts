import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentableEntities, CommentableInput } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-variant-groups-comments',
  templateUrl: './variant-groups-comments.component.html',
  styleUrls: ['./variant-groups-comments.component.less']
})
export class VariantGroupsCommentsComponent {
  commentable: CommentableInput

  constructor(private route: ActivatedRoute) {
    const variantGroupId: number = +this.route.snapshot.params['variantGroupId'];
    this.commentable = {
      id: variantGroupId,
      entityType: CommentableEntities.VariantGroup
    }
  }

}
