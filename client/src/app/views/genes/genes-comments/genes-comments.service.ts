import { Injectable } from '@angular/core';
import { GenericCommentsService } from '@app/components/shared/comment-list/comment-list.service';
import {
  CommentEdge,
  GeneCommentsGQL,
  GeneCommentsQuery,
} from '@app/generated/civic.apollo';

@Injectable()
export class GenesCommentsService extends GenericCommentsService<GeneCommentsQuery> {

  constructor(gql: GeneCommentsGQL) {
    super(gql)
  }

  extractCommentEdges(q: GeneCommentsQuery) {
    return q.gene?.comments.edges as CommentEdge[] 
  }

  pageInfoPath: string[] = ['data', 'gene', 'comments', 'pageInfo']
}
