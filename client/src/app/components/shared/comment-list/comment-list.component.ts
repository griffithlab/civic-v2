import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs';

import { Comment,
         User,
         CommentableInput,
         CommentableEntities,
         CommentEdge,
         Gene
       } from '@app/generated/civic.apollo';
import { Viewer, ViewerService } from '@app/shared/services/viewer/viewer.service';
import { Maybe } from 'graphql/jsutils/Maybe';
import { pluck } from 'rxjs/operators';
import { CommentListService } from './comment-list.service';

@Component({
  selector: 'cvc-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.less']
})

export class CommentListComponent implements OnInit {
  @Input() subject!: CommentableInput;
  comments$: Observable<CommentEdge[]>;
  data$: Observable<Gene>;
  viewer$: Observable<Viewer>;
  canCurate$: Observable<boolean>;
  canModerate$: Observable<boolean>;

  constructor(private viewerService: ViewerService,
              private commentService: CommentListService) {
    this.viewer$ = viewerService.viewer$;
    this.canCurate$ = viewerService.canCurate$;
    this.canModerate$ = viewerService.canModerate$;

    this.data$ = this.commentService.watchCommentList(this.subject.id);

    this.comments$ = this.data$
      .pipe(pluck('gene', 'comments', 'edges'));
  }

  ngOnInit(): void {
  }

}
