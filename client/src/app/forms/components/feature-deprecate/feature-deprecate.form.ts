import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core'
import {
  Maybe,
  Organization,
  DeprecateFeatureGQL,
  DeprecateFeatureMutation,
  DeprecateFeatureMutationVariables,
  FeatureDeprecationReason,
  FeatureDetailGQL,
  VariantsForFeatureGQL,
} from '@app/generated/civic.apollo'
import { Observable, Subject } from 'rxjs'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import { RouterModule } from '@angular/router'
import { map, takeUntil, filter } from 'rxjs/operators'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { isNonNulled } from 'rxjs-etc'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { CvcFormErrorsAlertModule } from '../form-errors-alert/form-errors-alert.module'
import { CvcFormButtonsModule } from '../form-buttons/form-buttons.module'
import { CvcSubmitButtonTypeModule } from '@app/forms/types/submit-button/submit-button.module'
import { CvcCommentInputFormModule } from '../comment-input/comment-input.module'
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module'
import { LinkableVariant } from '@app/components/variants/variant-tag/variant-tag.component'

@UntilDestroy()
@Component({
    selector: 'cvc-feature-deprecate-form',
    templateUrl: './feature-deprecate.form.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        LetDirective,
        PushPipe,
        NzFormModule,
        NzAlertModule,
        NzGridModule,
        NzButtonModule,
        NzSpinModule,
        NzCardModule,
        NzSpaceModule,
        NzTypographyModule,
        NzToolTipModule,
        NzSelectModule,
        CvcFormErrorsAlertModule,
        CvcFormButtonsModule,
        CvcSubmitButtonTypeModule,
        CvcCommentInputFormModule,
        CvcVariantTagModule,
    ]
})
export class CvcFeatureDeprecateForm implements OnDestroy, OnInit {
  @Input() featureId!: number

  private destroy$ = new Subject<void>()

  deprecateFeatureMutator: MutatorWithState<
    DeprecateFeatureGQL,
    DeprecateFeatureMutation,
    DeprecateFeatureMutationVariables
  >

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false

  viewer$: Observable<Viewer>

  comment: string = ''
  reason: Maybe<FeatureDeprecationReason>
  selectedOrg: Maybe<Organization>

  undeprecatedVariants$?: Observable<LinkableVariant[]>
  variantListLoading$?: Observable<boolean>

  constructor(
    private deprecateFeatureGQL: DeprecateFeatureGQL,
    private featureDetailGQL: FeatureDetailGQL,
    private variantsForFeatureGQL: VariantsForFeatureGQL,
    private networkErrorService: NetworkErrorsService,
    private viewerService: ViewerService
  ) {
    this.deprecateFeatureMutator = new MutatorWithState(networkErrorService)
    this.viewer$ = this.viewerService.viewer$
  }

  ngOnInit() {
    this.viewerService.viewer$
      .pipe(untilDestroyed(this))
      .subscribe((v: Viewer) => {
        this.selectedOrg = v.mostRecentOrg
      })

    if (this.featureId === undefined) {
      throw new Error('Must pass a feature id into deprecate feature component')
    }

    let queryRef = this.variantsForFeatureGQL.fetch({
      featureId: this.featureId,
    })

    this.undeprecatedVariants$ = queryRef.pipe(
      map(({ data }) => data.variants.nodes),
      filter(isNonNulled),
      map((variants) => variants.filter((variant) => !variant.deprecated))
    )
    //
    //this.mpsWithEvidence$ = queryRef.pipe(
    //  map(({ data }) => data.molecularProfiles.nodes),
    //  filter(isNonNulled),
    //  map((mps) =>
    //    mps.filter(
    //      (mp) =>
    //        mp.evidenceCountsByStatus.submittedCount +
    //          mp.evidenceCountsByStatus.acceptedCount >
    //        0
    //    )
    //  )
    //)

    this.variantListLoading$ = queryRef.pipe(map(({ loading }) => loading))
  }

  deprecateFeature(): void {
    this.errorMessages = []

    if (this.reason && this.comment && this.featureId) {
      let input = {
        deprecationReason: this.reason,
        comment: this.comment,
        featureId: this.featureId,
        organizationId: this.selectedOrg?.id,
      }

      let state = this.deprecateFeatureMutator.mutate(
        this.deprecateFeatureGQL,
        input,
        {
          refetchQueries: [
            {
              query: this.featureDetailGQL.document,
              variables: { featureId: this.featureId },
            },
          ],
        }
      )

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

      state.isSubmitting$
        .pipe(takeUntil(this.destroy$))
        .subscribe((loading) => {
          this.loading = loading
        })
    }
  }

  onSuccessBannerClose() {
    this.success = false
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
