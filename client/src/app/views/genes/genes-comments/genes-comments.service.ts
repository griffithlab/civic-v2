import { Injectable } from '@angular/core';
import { GenericCommentsService } from '@app/components/shared/comment-list/comment-list.service';
import { CommentsParticipant } from '@app/components/shared/participant-list/participant-list.component';
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
