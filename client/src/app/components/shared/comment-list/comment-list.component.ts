import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { ViewerService } from '@app/shared/services/viewer/viewer.service';

import { NGXLogger } from 'ngx-logger';
import { GenericCommentsService } from './comment-list.service';

@Component({
  selector: 'cvc-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.less']
})

export class CommentListComponent<CommentQuery> implements OnInit {
  @Input() commentsService!: GenericCommentsService<CommentQuery>;
  viewer: ViewerService;
  private log: NGXLogger;

  constructor(viewerService: ViewerService, private logger: NGXLogger) {
    this.viewer = viewerService;
    this.log = logger;
  }

  onLoadMore(): void {
    this.log.trace('onLoadMore() called')
    this.commentsService.fetchMore()
  }

  ngOnInit(): void {
  }
}
