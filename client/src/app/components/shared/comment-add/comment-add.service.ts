import { Injectable, OnDestroy } from '@angular/core';

import { ApolloCache, StoreObject } from '@apollo/client/cache';
import { FetchResult } from '@apollo/client/core';

import { Observable } from 'rxjs';

import {
  AddCommentGQL,
  AddCommentInput,
  AddCommentMutation,
} from '@app/generated/civic.apollo';

import { NGXLogger } from 'ngx-logger';

import { entityTypeToTypename } from '@app/shared/utilities/entitytype-to-typename';

@Injectable({
  providedIn: 'root'
})
export class CommentAddService implements OnDestroy {
  private storeObj!: StoreObject;

  constructor(private addCommentGQL: AddCommentGQL, private logger: NGXLogger) { }

  addComment(addCommentInput: AddCommentInput): Observable<FetchResult<AddCommentMutation>> {
    this.storeObj= {
      id: addCommentInput.subject.id,
      __typename: entityTypeToTypename(addCommentInput.subject.entityType)
    };
    return this.addCommentGQL.mutate(
      { input: addCommentInput },
      {
        update: (cache: ApolloCache<any>, { data: { addComment } }:FetchResult<any>) => {
          cache.modify({
            id: cache.identify(this.storeObj),
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
