import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, pluck } from 'rxjs/operators';

import {
  CommentListGQL,
  Comment
} from '@app/generated/civic.apollo';

@Injectable({
  providedIn: 'root'
})
export class CommentListService {

  constructor(private commentListGQL: CommentListGQL) { }

  watchCommentList(id: number): Observable<any> {
    return this.commentListGQL.watch({
      geneId: id
    })
      .valueChanges
      .pipe(shareReplay(1));
  }
}
