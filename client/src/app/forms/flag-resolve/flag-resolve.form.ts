import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import {
  Viewer,
  ViewerService,
} from '@app/core/services/viewer/viewer.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import {
  Organization,
  ResolveFlagGQL,
  Maybe,
  ResolveFlagMutation,
  ResolveFlagMutationVariables,
  FlagFragment,
} from '@app/generated/civic.apollo';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cvc-flag-resolve-form',
  templateUrl: './flag-resolve.form.html',
})
export class CvcFlagResolveForm implements OnInit, OnDestroy {
  @Input() flag!: FlagFragment;
  @Input() flagResolvedCallback?: () => void;

  selectedOrg: Maybe<Organization>;
  comment?: string;

  errorMessages: string[] = [];
  loading: boolean = false;
  success: boolean = false;
  flagResolvePopoverVisible: boolean = false;

  viewer$?: Observable<Viewer>;

  resolveFlagMutator: MutatorWithState<
    ResolveFlagGQL,
    ResolveFlagMutation,
    ResolveFlagMutationVariables
  >;

  private destroy$ = new Subject();

  constructor(
    private gql: ResolveFlagGQL,
    private viewerService: ViewerService,
    private networkErrorService: NetworkErrorsService
  ) {
    this.resolveFlagMutator = new MutatorWithState(networkErrorService);
  }

  ngOnInit() {
    if (this.flag === undefined) {
      throw new Error('Must pass a Flag in to resolve component.');
    }

    this.viewer$ = this.viewerService.viewer$;
    this.viewerService.viewer$.subscribe((v: Viewer) => {
      this.selectedOrg = v.mostRecentOrg;
    });
  }

  onOrgSelected(org: Organization) {
    this.selectedOrg = org;
  }

  resolveFlag() {
    if (this.comment) {
      this.errorMessages = [];
      let state = this.resolveFlagMutator.mutate(this.gql, {
        input: {
          id: this.flag.id,
          comment: this.comment,
          organizationId: this.selectedOrg?.id,
        },
      });
      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res) {
          this.flagResolvePopoverVisible = false;
          this.success = true;
          if (this.flagResolvedCallback) {
            this.flagResolvedCallback();
          }
        }
      });
      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res.length > 0) {
          this.success = false;
          this.errorMessages = res;
        }
      });

      state.isSubmitting$
        .pipe(takeUntil(this.destroy$))
        .subscribe((loading) => {
          this.loading = loading;
        });
    }
  }

  onSuccessBannerClose() {
    this.success = false;
    if (this.flagResolvedCallback) {
      this.flagResolvedCallback();
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
