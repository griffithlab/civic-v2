import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
  CoiStatus,
  Maybe,
  UserRole,
  ViewerBaseGQL,
  ViewerFieldsFragment,
  ViewerOrganizationFragment,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { map, Observable, shareReplay } from 'rxjs'
import { pluck } from 'rxjs-etc/operators'

export interface Viewer {
  user?: ViewerFieldsFragment
  mostRecentOrg: Maybe<ViewerOrganizationFragment>
  approvableOrgIds: number[]
  signedIn: boolean
  signedOut: boolean
  isAdmin: boolean
  isEditor: boolean
  isCurator: boolean
  canCurate: boolean
  canModerate: boolean
  invalidCoi: boolean
}

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class ViewerService {
  private queryRef!: QueryRef<any, any>

  viewer$: Observable<Viewer>

  constructor(
    private viewerBaseGQL: ViewerBaseGQL,
    private http: HttpClient
  ) {
    this.queryRef = this.viewerBaseGQL.watch(undefined, {
      notifyOnNetworkStatusChange: false,
    })

    this.viewer$ = this.queryRef.valueChanges.pipe(
      pluck('data', 'viewer'),
      map((v: Maybe<ViewerFieldsFragment>) => {
        return {
          user: v,
          signedIn: v == null ? false : true,
          signedOut: v == null ? true : false,
          canCurate: canCurate(v),
          canModerate: canModerate(v),
          isAdmin: isAdmin(v),
          isEditor: isEditor(v),
          isCurator: isCurator(v),
          organizations: v == null ? [] : v.organizations,
          mostRecentOrg: v == null ? undefined : mostRecentOrg(v),
          approvableOrgIds:
            v == null
              ? []
              : v.organizationsWithApprovalPrivileges?.map((o: any) => o.id) ||
                [],
          invalidCoi:
            isEditor(v) &&
            (!v?.mostRecentConflictOfInterestStatement ||
              v?.mostRecentConflictOfInterestStatement.coiStatus ===
                CoiStatus.Expired ||
              v?.mostRecentConflictOfInterestStatement.coiStatus ===
                CoiStatus.Missing),
        }
      }),
      shareReplay(1)
    )

    function isAdmin(v?: ViewerFieldsFragment): boolean {
      return v && v.role === UserRole.Admin ? true : false
    }

    function isEditor(v?: ViewerFieldsFragment): boolean {
      return v && (v.role === UserRole.Editor || v.role === UserRole.Admin)
        ? true
        : false
    }

    function isCurator(v?: ViewerFieldsFragment): boolean {
      return v && v.role === UserRole.Curator ? true : false
    }

    function canCurate(v?: ViewerFieldsFragment): boolean {
      return v &&
        (v.role === UserRole.Curator ||
          v.role === UserRole.Editor ||
          v.role === UserRole.Admin)
        ? true
        : false
    }

    function canModerate(v?: ViewerFieldsFragment): boolean {
      return v &&
        (v.role === UserRole.Editor || v.role === UserRole.Admin) &&
        v.mostRecentConflictOfInterestStatement &&
        (v.mostRecentConflictOfInterestStatement?.coiStatus ==
          CoiStatus.Conflict ||
          v.mostRecentConflictOfInterestStatement?.coiStatus == CoiStatus.Valid)
        ? true
        : false
    }

    function mostRecentOrg(
      v?: ViewerFieldsFragment
    ): Maybe<ViewerOrganizationFragment> {
      if (v?.mostRecentOrganizationId) {
        return v.organizations.find((o) => o.id === v.mostRecentOrganizationId)
      } else {
        return undefined
      }
    }
  }

  // GET /sign_out with HttpClient, then refetch Viewer
  signOut(): void {
    this.http
      .get('/api/sign_out')
      .pipe(untilDestroyed(this))
      .subscribe(() => this.queryRef.refetch())
  }

  refetch(): void {
    this.queryRef.refetch()
  }
}
