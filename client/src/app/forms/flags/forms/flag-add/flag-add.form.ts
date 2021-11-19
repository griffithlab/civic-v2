import { ThisReceiver } from "@angular/compiler";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NetworkErrorsService } from "@app/core/services/network-errors.service";
import { Viewer, ViewerService } from "@app/core/services/viewer/viewer.service";
import { MutatorWithState } from "@app/core/utilities/mutation-state-wrapper";
import { FlagEntityGQL, FlagEntityInput, FlagEntityMutation, FlagEntityMutationVariables, FlaggableInput, Maybe, Organization } from "@app/generated/civic.apollo";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { Observable, Subject } from 'rxjs';
import { takeUntil } from "rxjs/operators";

@Component({
    selector: 'cvc-flag-add',
    templateUrl: './flag-add.form.html',
    styleUrls: ['./flag-add.form.less']
})
export class CvcFlagAddForm implements OnInit, OnDestroy {
    @Input() flaggable!: FlaggableInput
    @Input() flagAddedCallback?: () => void

    formModel!: FlagEntityInput
    formFields: FormlyFieldConfig[]
    selectedOrg: Maybe<Organization>
    formGroup = new FormGroup({})
    formOptions: FormlyFormOptions = {};

    errorMessages: string[] = []

    viewer$?: Observable<Viewer>;
    success: boolean = false

    addFlagMutator: MutatorWithState<FlagEntityGQL, FlagEntityMutation, FlagEntityMutationVariables>;

    private destroy$ = new Subject();

    constructor(private gql: FlagEntityGQL, private viewerService: ViewerService, private networkErrorService: NetworkErrorsService) {
        this.formFields = [{
            key: 'comment',
            type: 'comment-textarea',
            templateOptions: {
                required: true,
                minLength: 10,
                placeholder: 'Reason for flagging this entity (minimum 10 characters)'
            }
        }]
        this.addFlagMutator= new MutatorWithState(networkErrorService)
    }

    ngOnInit() {
        this.formModel = {
            subject: this.flaggable,
            comment: ""
        }

        //For some reason this doesn't work to initially set the org id on entities without any flags.
        //It works on pages with one or more flags. Not sure why
        this.viewer$ = this.viewerService.viewer$;
        this.viewerService.viewer$.subscribe((v: Viewer) => {
          this.formModel.organizationId = v.mostRecentOrg?.id
        })

        if (this.flaggable === undefined) {
            throw new Error("Must pass a flagggable into flag add component");
        }
    }

    onOrgSelected(org: Organization) {
        this.formModel.organizationId = org.id
    }

    submitFlag(input: FlagEntityInput) {
      this.errorMessages = []
      let state = this.addFlagMutator.mutate(this.gql, {input})
      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res) {
          if (this.flagAddedCallback) {
            this.flagAddedCallback()
          }
          this.success = true
          //This should work to clear the comment but for some reason resetModel is undefined
          //this.formOptions.resetModel()
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
    }

    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
}
