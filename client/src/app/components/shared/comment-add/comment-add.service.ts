import { Injectable, OnDestroy } from '@angular/core';

import { ApolloCache } from '@apollo/client/cache';
import { FetchResult } from '@apollo/client/core';
import { QueryRef, gql } from 'apollo-angular';

import { Observable } from 'rxjs';

import {
  AddCommentGQL,
  AddCommentInput,
} from '@app/generated/civic.apollo';

import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class CommentAddService implements OnDestroy {
  private queryRef!: QueryRef<any, any>;
  private subject!: any;
  constructor(private addCommentGQL: AddCommentGQL, private logger: NGXLogger) {

  }

  addComment(addCommentInput: AddCommentInput): Observable<any> {
    this.subject = {
      id: addCommentInput.subject.id,
      __typename: addCommentInput.subject.entityType
        .toLowerCase()
        .split('_')
        .map(n => n[0].toUpperCase() + n.substring(1)).join('')
    };
    return this.addCommentGQL.mutate(
      { input: addCommentInput },
      {
        update: (cache: ApolloCache<any>, { data: { addComment } }:FetchResult<any>) => {
          this.logger.trace(cache);
          this.logger.trace(addComment);
          cache.modify({
            id: cache.identify(this.subject),
            fields: {
              comments(existingCommentRefs = []) {
                console.log('--------- cache.modify.comments()');
                console.log(existingCommentRefs);
                console.log(addComment);
                const oldEdges = existingCommentRefs.edges
                const newEdges = [
                  ...oldEdges,
                  {
                    __typeName: 'CommentEdge',
                    node: {
                      __ref: cache.identify(addComment.comment)
                    }
                  }
                ];
                return {
                  ...existingCommentRefs,
                  edges: newEdges
                }
              },
            },
            /* broadcast: false // Include this to prevent automatic query refresh */
          });
        }
      }
    )
  }

  ngOnDestroy(): void {
  }
}
