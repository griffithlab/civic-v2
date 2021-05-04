import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs';

import { Maybe, CommentableInput, CommentEdge } from '@app/generated/civic.apollo';
import { Viewer, ViewerService } from '@app/shared/services/viewer/viewer.service';
import { GenesCommentsService } from '@app/views/genes/genes-comments/genes-comments.service';

@Component({
  selector: 'cvc-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.less']
})

export class CommentListComponent implements OnInit {
  viewer: ViewerService;
  comments: GenesCommentsService;

  constructor(private viewerService: ViewerService, private commentsService2: GenesCommentsService) {
    this.viewer = viewerService;
    this.comments = commentsService2;
    this.comments.watch();
  }

  ngOnInit(): void {
  }
}
