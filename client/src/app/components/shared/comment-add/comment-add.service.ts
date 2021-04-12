import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { QueryRef } from 'apollo-angular';

import { Observable, Subscription } from 'rxjs';
import { pluck, map, tap, shareReplay, startWith } from 'rxjs/operators';

import { AddCommentGQL, AddCommentInput, CommentableInput } from '@app/generated/civic.apollo';

import { create } from "rxjs-spy";
import { tag } from "rxjs-spy/operators/tag";
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class CommentAddService implements OnDestroy {
  private queryRef!: QueryRef<any, any>;

  constructor(private addCommentGQL: AddCommentGQL) {

  }

  addComment(addCommentInput: AddCommentInput): Observable<any> {
    return this.addCommentGQL.mutate({ input: addCommentInput })
  }

  ngOnDestroy(): void {
  }
}
