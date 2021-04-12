import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs';

import { NewComment } from '../comment-add/comment-add.component';

import { Comment, User } from '@app/generated/civic.apollo';
import { ViewerService } from '@app/shared/services/viewer/viewer.service';

@Component({
  selector: 'cvc-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.less']
})

export class CommentListComponent implements OnInit {
  @Input() comments!: Comment[];
  @Output() commentSubmitted = new EventEmitter<NewComment>();

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

  submitComment(value: NewComment): void {
    this.commentSubmitted.emit(value);
  }

}
