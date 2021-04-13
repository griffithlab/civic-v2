import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { QueryRef } from 'apollo-angular';

import { Observable, Subscription } from 'rxjs';
import { pluck, map, tap, shareReplay, startWith } from 'rxjs/operators';

import { User, ViewerBaseGQL } from '@app/generated/civic.apollo';

import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class ViewerService implements OnDestroy {
  private queryRef!: QueryRef<any, any>;

  data$!: Observable<any>;
  isLoading$!: Observable<boolean>;
  viewer$!: Observable<User>;

  signedIn$!: Observable<boolean>;
  signedOut$!: Observable<boolean>;

  isAdmin$!: Observable<boolean>;
  isEditor$!: Observable<boolean>;

  canCurate$!: Observable<boolean>;
  canModerate$!: Observable<boolean>;

  constructor(
    private viewerBaseGQL: ViewerBaseGQL,
    private http: HttpClient,
    private logger: NGXLogger,
  ) {

  }

  watch(): Observable<any> {
    this.queryRef = this.viewerBaseGQL.watch();

    this.data$ = this.queryRef.valueChanges.pipe(
      shareReplay(1),
      map((r: any) => {
        return {
          data: r.data,
          loading: r.loading,
          networkStatus: r.networkStatus
        };
      }));

    this.isLoading$ = this.data$.pipe(
      pluck('loading'),
      startWith(true));

    this.viewer$ = this.data$.pipe(
      pluck('data', 'viewer'));

    this.signedIn$ = this.viewer$.pipe(
      map(v => v === null ? false : true));

    this.signedOut$ = this.viewer$.pipe(
      map(v => v === null ? true : false));

    this.canCurate$ = this.viewer$.pipe(
      map(v => {
        let canCurate;
        if (v && (v.role === 'curator' || v.role === 'editor' || v.role === 'admin')) {
          canCurate = true;
        } else {
          canCurate = false
        }
        return canCurate;
      }));

    this.canModerate$ = this.viewer$.pipe(
      map(v => {
        let canModerate;
        if (v && (v.role === 'editor' || v.role === 'admin')) {
          canModerate = true;
        } else {
          canModerate = false
        }
        return canModerate;
      }));

    return this.data$;
  }

  // GET /sign_out with HttpClient, then refetch Viewer
  signOut(): void {
    this.http.get('/api/sign_out')
      .subscribe(d => {
        this.refetch();
      });
  }

  refetch(): void {
    this.queryRef.refetch();
  }

  ngOnDestroy(): void {
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
