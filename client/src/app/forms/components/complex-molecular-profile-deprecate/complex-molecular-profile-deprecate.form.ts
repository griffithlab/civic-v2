import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core'
import {
  DeprecateComplexMolecularProfileGQL,
  DeprecateComplexMolecularProfileMutation,
  DeprecateComplexMolecularProfileMutationVariables,
  MolecularProfileDeprecationReasonMutationInput,
  Maybe,
  MolecularProfileDetailGQL,
  EvidenceCountsForMolecularProfileGQL,
  Organization,
  ViewerOrganizationFragment,
} from '@app/generated/civic.apollo'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import { ActivatedRoute } from '@angular/router'
import { map, takeUntil } from 'rxjs/operators'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

@UntilDestroy()
@Component({
  selector: 'cvc-complex-molecular-profile-deprecate-form',
  templateUrl: './complex-molecular-profile-deprecate.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ComplexMolecularProfileDeprecateForm implements OnDestroy, OnInit {
  @Input() molecularProfileId!: number

  private destroy$ = new Subject<void>()

  deprecateComplexMolecularProfileMutator: MutatorWithState<
    DeprecateComplexMolecularProfileGQL,
    DeprecateComplexMolecularProfileMutation,
    DeprecateComplexMolecularProfileMutationVariables
  >

  success: boolean = false
  errorMessages: string[] = []
  mutationLoading$ = new BehaviorSubject(false)

  viewer$: Observable<Viewer>

  comment: string = ''
  reason: Maybe<MolecularProfileDeprecationReasonMutationInput>
  selectedOrg: Maybe<ViewerOrganizationFragment>

  hasEvidence$?: Observable<boolean>
  isLoading$?: Observable<boolean>

  constructor(
    private deprecateComplexMolecularProfileGQL: DeprecateComplexMolecularProfileGQL,
    private molecularProfileDetailGQL: MolecularProfileDetailGQL,
    private evidenceCountsForMolecularProfileGQL: EvidenceCountsForMolecularProfileGQL,
    private networkErrorService: NetworkErrorsService,
    private route: ActivatedRoute,
    private viewerService: ViewerService
  ) {
    this.deprecateComplexMolecularProfileMutator = new MutatorWithState(
      networkErrorService
    )
    this.viewer$ = this.viewerService.viewer$
  }

  ngOnInit() {
    this.viewerService.viewer$
      .pipe(untilDestroyed(this))
      .subscribe((v: Viewer) => {
        this.selectedOrg = v.mostRecentOrg
      })

    if (this.molecularProfileId === undefined) {
      throw new Error(
        'Must pass a molecular profile id into deprecate complex molecular profile component'
      )
    }

    let queryRef = this.evidenceCountsForMolecularProfileGQL.fetch({
      molecularProfileId: this.molecularProfileId,
    })

    this.hasEvidence$ = queryRef.pipe(
      map(
        ({ data }) =>
          data.molecularProfile!.evidenceCountsByStatus.submittedCount +
            data.molecularProfile!.evidenceCountsByStatus.acceptedCount >
          0
      )
    )

    this.isLoading$ = queryRef.pipe(map(({ loading }) => loading))
  }

  deprecateMolecularProfile(): void {
    this.errorMessages = []

    if (this.reason && this.comment && this.molecularProfileId) {
      let input = {
        deprecationReason: this.reason,
        comment: this.comment,
        molecularProfileId: this.molecularProfileId,
        organizationId: this.selectedOrg?.id,
      }

      this.mutationLoading$.next(true)

      let state = this.deprecateComplexMolecularProfileMutator.mutate(
        this.deprecateComplexMolecularProfileGQL,
        input,
        {
          refetchQueries: [
            {
              query: this.molecularProfileDetailGQL.document,
              variables: { molecularProfileId: this.molecularProfileId },
            },
          ],
        }
      )

      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res) {
          this.success = true
          this.comment = ''
          this.mutationLoading$.next(false)
        }
      })

      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res.length > 0) {
          this.errorMessages = res
          this.mutationLoading$.next(false)
        }
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
