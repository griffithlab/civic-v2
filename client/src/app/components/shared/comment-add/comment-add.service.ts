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

import { entityTypeToTypename } from '@app/shared/utilities/entitytype-to-typename';

@Injectable({
  providedIn: 'root'
})
export class CommentAddService implements OnDestroy {
  private queryRef!: QueryRef<any, any>;
  private subject!: any;
  constructor(private addCommentGQL: AddCommentGQL, private logger: NGXLogger) { }

  addComment(addCommentInput: AddCommentInput): Observable<any> {
    this.subject = {
      id: addCommentInput.subject.id,
      __typename: entityTypeToTypename(addCommentInput.subject.entityType)
    };
    return this.addCommentGQL.mutate(
      { input: addCommentInput },
      {
        update: (cache: ApolloCache<any>, { data: { addComment } }:FetchResult<any>) => {
          cache.modify({
            id: cache.identify(this.subject),
            fields: {
              comments(existingCommentRefs = []) {
                return {
                  ...existingCommentRefs,
                  edges: [
                    ...existingCommentRefs.edges,
                    {
                      __typeName: 'CommentEdge',
                      node: {
                        __ref: cache.identify(addComment.comment)
                      }
                    }
                  ]
                }
              },
            },
          });
        }
      }
    )
  }

  ngOnDestroy(): void {
  }
}
