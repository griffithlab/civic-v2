import { Injectable } from '@angular/core';
import { CommentsParticipant, GenericCommentsService } from '@app/components/shared/comment-list/comment-list.service';
import {
  CommentableEntities,
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

  extractCommenters(q: GeneCommentsQuery): CommentsParticipant[] {
    return q.gene?.uniqueCommenters as CommentsParticipant[]
  }

  commentableEntity: CommentableEntities = CommentableEntities.Gene

  pageInfoPath: string[] = ['data', 'gene', 'comments', 'pageInfo']
}
