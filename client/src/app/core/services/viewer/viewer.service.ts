
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { CoiStatus, Maybe, Organization, User, UserRole, ViewerBaseGQL } from '@app/generated/civic.apollo';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { $D } from "rxjs-debug";
import { catchError, map, pluck, shareReplay, startWith } from 'rxjs/operators';

export interface Viewer extends User {
  mostRecentOrg: Maybe<Organization>;
  signedIn: boolean;
  signedOut: boolean;
  isAdmin: boolean;
  isEditor: boolean;
  isCurator: boolean;
  canCurate: boolean;
  canModerate: boolean;
  invalidCoi: boolean
}

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class ViewerService {
  private queryRef!: QueryRef<any, any>;

  viewer$: Observable<Viewer>;

  signedIn$: Observable<boolean>;
  signedOut$: Observable<boolean>;

  isCurator$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  isEditor$: Observable<boolean>;

  canCurate$: Observable<boolean>;
  canModerate$: Observable<boolean>;

  initialViewer: Viewer = <Viewer>{
    mostRecentOrg: undefined,
    signedIn: false,
    isAdmin: false,
    isEditor: false,
    isCurator: false,
    canCurate: false,
    canModerate: false,
    invalidCoi: true,
  }

  constructor(
    private viewerBaseGQL: ViewerBaseGQL,
    private http: HttpClient,
  ) {
    this.queryRef = this.viewerBaseGQL.watch(undefined, { notifyOnNetworkStatusChange: false });

    this.viewer$ = $D(this.queryRef.valueChanges
      .pipe(pluck('data', 'viewer'),
        map((v: User): Viewer => {
          console.log('************ viewer$ map()')
          console.log(v)
          return {
            ...v,
            signedIn: v == null ? false : true,
            signedOut: v == null ? true : false,
            canCurate: canCurate(v),
            canModerate: canModerate(v),
            isAdmin: isAdmin(v),
            isEditor: isEditor(v),
            isCurator: isCurator(v),
            organizations: v == null ? [] : v.organizations,
            mostRecentOrg: v == null ? undefined : mostRecentOrg(v),
            invalidCoi: isEditor(v) && (!v.mostRecentConflictOfInterestStatement || v.mostRecentConflictOfInterestStatement.coiStatus === CoiStatus.Expired || v.mostRecentConflictOfInterestStatement.coiStatus === CoiStatus.Missing)
          } as Viewer
        }),
        startWith(this.initialViewer),
        shareReplay(1),
        catchError((err) => { throw `error in viewer$: ${err}` }))
      , { id: 'viewer$' });

    this.signedIn$ = this.viewer$.pipe(
      map(v => v.signedIn));

    this.signedOut$ = this.viewer$.pipe(
      map(v => v.signedOut));

    this.isAdmin$ = this.viewer$.pipe(
      map(v => isAdmin(v)));

    this.isEditor$ = this.viewer$.pipe(
      map(v => isEditor(v)));

    this.isCurator$ = this.viewer$.pipe(
      map(v => isCurator(v)));

    this.canCurate$ = this.viewer$.pipe(
      map(v => canCurate(v)));

    this.canModerate$ = this.viewer$.pipe(
      map(v => canModerate(v)));

    function isAdmin(v: User): boolean {

      return (v && (v.role === UserRole.Admin)) ? true : false;
    }

    function isEditor(v: User): boolean {
      return (v && (v.role === UserRole.Editor || v.role === UserRole.Admin)) ? true : false;
    }

    function isCurator(v: User): boolean {
      return (v && (v.role === UserRole.Curator)) ? true : false;
    }

    function canCurate(v: User): boolean {
      return (v && (v.role === UserRole.Curator || v.role === UserRole.Editor || v.role === UserRole.Admin)) ? true : false;
    }

    function canModerate(v: User): boolean {
      return (v && (v.role === UserRole.Editor || v.role === UserRole.Admin) && v.mostRecentConflictOfInterestStatement && (v.mostRecentConflictOfInterestStatement?.coiStatus == CoiStatus.Conflict || v.mostRecentConflictOfInterestStatement?.coiStatus == CoiStatus.Valid)) ? true : false;
    }

    function mostRecentOrg(v: User): Maybe<Organization> {
      if (v.mostRecentOrganizationId) {
        return v.organizations.find(o => o.id === v.mostRecentOrganizationId)
      } else {
        return undefined
      }
    }

  }

  // GET /sign_out with HttpClient, then refetch Viewer
  signOut(): void {
    this.http.get('/api/sign_out')
      .pipe(untilDestroyed(this))
      .subscribe(() => this.queryRef.refetch())
  }

  refetch(): void {
    this.queryRef.refetch();
  }

}
