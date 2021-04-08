import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { QueryRef } from 'apollo-angular';

import { Observable, Subscription } from 'rxjs';
import { pluck, map, tap, shareReplay, startWith } from 'rxjs/operators';

import { User, ViewerBaseGQL } from '@app/generated/civic.apollo';

import { create } from "rxjs-spy";
import { tag } from "rxjs-spy/operators/tag";
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class ViewerService implements OnDestroy {
  private queryRef!: QueryRef<any, any>;
  data$!: Observable<any>;
  isLoading$!: Observable<boolean>;
  viewer$!: Observable<User>;
  role$!: Observable<string>;

  signOut$!: Subscription;

  private spy: any;

  constructor(
    private viewerBaseGQL: ViewerBaseGQL,
    private http: HttpClient,
    private logger: NGXLogger,
  ) {
    this.spy = create();

  }

  watch(): Observable<any> {
    this.queryRef = this.viewerBaseGQL.watch();

    this.data$ = this.queryRef.valueChanges.pipe(
      tag('viewerData$'),
      shareReplay(1),
      map((r: any) => {
        return {
          data: r.data,
          loading: r.loading,
          networkStatus: r.networkStatus
        };
      }));
    this.spy.log('visitorData$');

    this.isLoading$ = this.data$.pipe(
      pluck('loading'),
      startWith(true));

    this.viewer$ = this.data$.pipe(
      tag('viewer$'),
      pluck('data', 'viewer'),
    );

    return this.data$;
  }

  // GET /sign_out with HttpClient, then refetch Viewer
  signOut(): void {
    this.signOut$ = this.http.get('/api/sign_out')
      .subscribe(d => {
        this.logger.trace(d);
      });
  }

  refetch(): void {

  }

  ngOnDestroy(): void {
    this.spy.teardown();
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
