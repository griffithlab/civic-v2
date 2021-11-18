import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import {
  Organization,
  ResolveFlagGQL,
  ResolveFlagInput,
  Maybe,
  ResolveFlagMutation,
  ResolveFlagMutationVariables,
  FlagFragment,
} from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cvc-flag-resolve',
  templateUrl: './flag-resolve.form.html',
  styleUrls: ['./flag-resolve.form.less'],
})
export class CvcFlagResolveForm implements OnInit, OnDestroy {
  @Input() flag!: FlagFragment;
  @Input() flagResolvedCallback?: () => void;

  formModel!: ResolveFlagInput;
  formFields: FormlyFieldConfig[];
  selectedOrg: Maybe<Organization>;
  formGroup = new FormGroup({});
  formOptions: FormlyFormOptions = {};

  errorMessages: string[] = []

  flagResolvePopoverVisible: boolean = false
  success: boolean = false

  viewer$?: Observable<Viewer>;

  resolveFlagMutator: MutatorWithState<ResolveFlagGQL, ResolveFlagMutation, ResolveFlagMutationVariables>;

  private destroy$ = new Subject();

  constructor(private gql: ResolveFlagGQL, private viewerService: ViewerService, private networkErrorService: NetworkErrorsService) {
    this.formFields = [
      {
        key: 'comment',
        type: 'comment-textarea',
        templateOptions: {
          required: true,
          minLength: 10,
        },
      },
    ];
    this.resolveFlagMutator= new MutatorWithState(networkErrorService)
  }

  ngOnInit() {
    if (this.flag === undefined) {
      throw new Error('Must pass a Flag in to resolve component.');
    }

    this.formModel = {
      id: this.flag.id,
      comment: '',
    };

    this.viewer$ = this.viewerService.viewer$;
    this.viewerService.viewer$.subscribe((v: Viewer) => {
      this.formModel.organizationId = v.mostRecentOrg?.id
    })
  }

  onOrgSelected(org: Organization) {
    this.formModel.organizationId = org.id;
  }

  resolveFlag(input: ResolveFlagInput) {
    this.errorMessages = []
    let state = this.resolveFlagMutator.mutate(this.gql, {input})
    state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res) {
        this.flagResolvePopoverVisible = false
      }
    })
    state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res.length > 0) {
        this.errorMessages = res
      }
    })
  }

  onSuccessBannerClose() {
    this.success = false
    if (this.flagResolvedCallback) {
      this.flagResolvedCallback();
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
