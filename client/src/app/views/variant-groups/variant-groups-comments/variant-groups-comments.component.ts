import { Component, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentableEntities, CommentableInput } from '@app/generated/civic.apollo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cvc-variant-groups-comments',
  templateUrl: './variant-groups-comments.component.html',
  styleUrls: ['./variant-groups-comments.component.less']
})
export class VariantGroupsCommentsComponent implements OnDestroy {
  commentable?: CommentableInput
  routeSub: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.commentable = {
        entityType: CommentableEntities.VariantGroup,
        id: +params.variantGroupId
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
