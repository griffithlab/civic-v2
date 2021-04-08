import { Injectable } from '@angular/core';
import { QueryRef } from 'apollo-angular';

import { Observable } from 'rxjs';
import { pluck, map, shareReplay } from 'rxjs/operators';

import { User, ViewerBaseGQL } from '@app/generated/civic.apollo';

import { create } from "rxjs-spy";
import { tag } from "rxjs-spy/operators/tag";

@Injectable({
  providedIn: 'root'
})
export class ViewerService {
  private data$!: Observable<any>;
  private visitorenticated$!: Observable<boolean>;
  private viewer$!: Observable<User>;
  private role$!: Observable<string>;
  private queryRef: QueryRef<any, any>;

  private spy: any;

  constructor(private viewerBaseGQL: ViewerBaseGQL) {
    this.spy = create();

    this.queryRef = this.viewerBaseGQL.watch();

    this.data$ = this.queryRef.valueChanges.pipe(
      tag('visitorData$'),
      shareReplay(1),
      map((r: any) => {
        return {
          data: r.data,
          loading: r.loading,
          networkStatus: r.networkStatus
        };
      }));
    this.spy.log('visitorData$');  }

  logout(): void {

  }

  getViewer(): Observable<User> {
    return this.data$.pipe(pluck('viewer'));
  }

  reloadViewer(): void {

  }

  // getRole(): string | null {
  //   return this.role;
  // }

  // isEditor(): boolean {

  // }

  // isCurator(): boolean {

  // }

  // isAdmin(): boolean {

  // }

}
