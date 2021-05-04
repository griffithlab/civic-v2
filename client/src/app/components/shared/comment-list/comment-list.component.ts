import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs';

import { Maybe, CommentableInput, CommentEdge } from '@app/generated/civic.apollo';
import { ViewerService } from '@app/shared/services/viewer/viewer.service';
import { GenesCommentsService } from '@app/views/genes/genes-comments/genes-comments.service';
import { ApolloError, ApolloQueryResult } from '@apollo/client/core';
import { QueryRef } from 'apollo-angular';
import { GraphQLError } from 'graphql';

export interface ICommentListService {
  subject: CommentableInput,
  queryRef: QueryRef<any, any>,
  result$: Observable<ApolloQueryResult<any>>,
  comments$: Maybe<Observable<CommentEdge[]>>,
  isLoading$: Observable<boolean>,
  queryErrors$: Observable<Maybe<ReadonlyArray<GraphQLError>>>;
  networkError$: Observable<Maybe<ApolloError>>;
  watch(): Maybe<QueryRef<any, any>>
}

@Component({
  selector: 'cvc-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.less']
})

export class CommentListComponent implements OnInit {
  @Input() commentsService!: GenesCommentsService;
  viewer: ViewerService;

  constructor(private viewerService: ViewerService) {
    this.viewer = viewerService;
  }

  ngOnInit(): void {
    this.commentsService.watch();
  }
}
