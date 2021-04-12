import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs';

import { CommentableEntity } from '../comment-add/comment-add.component';

import { Comment,
         User,
         CommentableInput,
         CommentableEntities
       } from '@app/generated/civic.apollo';
import { ViewerService } from '@app/shared/services/viewer/viewer.service';

@Component({
  selector: 'cvc-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.less']
})

export class CommentListComponent implements OnInit {
  @Input() comments!: Comment[];
  @Input() subject!: CommentableInput;

  viewer$: Observable<User | null>;
  canCurate$: Observable<boolean>;
  canModerate$: Observable<boolean>;

  constructor(private viewerService: ViewerService) {
    this.viewer$ = viewerService.viewer$;
    this.canCurate$ = viewerService.canCurate$;
    this.canModerate$ = viewerService.canModerate$;
  }

  ngOnInit(): void {
  }

}
