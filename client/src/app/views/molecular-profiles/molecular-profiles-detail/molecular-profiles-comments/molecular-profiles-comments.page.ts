import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  CommentableEntities,
  CommentableInput,
} from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-molecular-profiles-comments',
  templateUrl: './molecular-profiles-comments.page.html',
  styleUrls: ['./molecular-profiles-comments.page.less'],
  standalone: false,
})
export class MolecularProfilesCommentsPage {
  commentable: CommentableInput

  constructor(private route: ActivatedRoute) {
    const mpId: number = +this.route.snapshot.params['molecularProfileId']
    this.commentable = {
      id: mpId,
      entityType: CommentableEntities.MolecularProfile,
    }
  }
}
