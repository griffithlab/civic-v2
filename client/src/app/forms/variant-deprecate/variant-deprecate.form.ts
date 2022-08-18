import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import {
  DeprecateVariantGQL,
  DeprecateVariantMutation,
  DeprecateVariantMutationVariables,
  DeprecationReason,
  Maybe,
  Organization,
} from '@app/generated/civic.apollo';
import { Observable, Subject } from 'rxjs';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service';

@Component({
  selector: 'cvc-variant-deprecate-form',
  templateUrl: './variant-deprecate.form.html',
  styleUrls: ['./variant-deprecate.form.less'],
})
export class VariantDeprecateForm implements OnDestroy, OnInit {
  @Input() variantId!: number

  private destroy$ = new Subject();

  deprecateVariantMutator: MutatorWithState<DeprecateVariantGQL, DeprecateVariantMutation, DeprecateVariantMutationVariables>

  submittedGeneId: Maybe<number>
  submittedVariantId: Maybe<number>

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false

  viewer$?: Observable<Viewer>;

  comment: string = ""
  reason: Maybe<DeprecationReason>
  selectedOrg: Maybe<Organization>

  constructor(
    private deprecateVariantGQL: DeprecateVariantGQL,
    private networkErrorService: NetworkErrorsService,
    private route: ActivatedRoute,
    private viewerService: ViewerService,
    ) {

    this.deprecateVariantMutator = new MutatorWithState(networkErrorService);
  }

  ngOnInit() {
    this.viewer$ = this.viewerService.viewer$;
    this.viewerService.viewer$.subscribe((v: Viewer) => {
      this.selectedOrg = v.mostRecentOrg
    })

    if (this.variantId === undefined) {
        throw new Error("Must pass a variant id into deprecate variant component");
    }
  }

  onOrgSelected(org: Organization) {
    this.selectedOrg = org
  }

  onReasonSelected(e: Event) {
    console.log(e)
  }

  deprecateVariant(): void {
    this.errorMessages = []
    console.log(this.reason)
    console.log(this.comment)
    console.log(this.variantId)

    if (this.reason && this.comment && this.variantId) {
      let input = {
        deprecationReason: this.reason,
        comment: this.comment,
        variantId: this.variantId,
        organizationId: this.selectedOrg?.id
      }

     let state = this.deprecateVariantMutator.mutate(this.deprecateVariantGQL, input)
      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res) {
          this.success = true
          this.comment = ''
        }
      })
      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res.length > 0) {
          this.errorMessages = res
        }
      })

      state.isSubmitting$.pipe(takeUntil(this.destroy$)).subscribe((loading) => {
        this.loading = loading
      })
    }
  }

  onSuccessBannerClose() {
    this.success = false
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
