import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsParticipant } from '@app/components/shared/participant-list/participant-list.component';
import { Maybe } from '@app/generated/civic.apollo';
import { GenesCommentsService } from './genes-comments.service';

@Component({
  selector: 'cvc-genes-comments',
  templateUrl: './genes-comments.component.html',
  styleUrls: ['./genes-comments.component.less'],
  providers: [GenesCommentsService]
})
export class GenesCommentsComponent implements OnInit {
  service: GenesCommentsService;

  constructor(
    private geneCommentsService: GenesCommentsService,
    private route: ActivatedRoute
  ) {
    const geneId: number = +this.route.snapshot.params['geneId'];
    this.service = geneCommentsService;
    this.service.watch({ id: geneId });
  }
  onParticipantSelected(u: Maybe<CommentsParticipant>) {
    this.service.userFilterSelected(u);
  }

  ngOnInit(): void {
  }

}
