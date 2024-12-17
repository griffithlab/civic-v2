import { Component, Input, OnInit } from '@angular/core'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import {
  Organization,
  ResolveFlagGQL,
  Maybe,
  ResolveFlagMutation,
  ResolveFlagMutationVariables,
  FlagFragment,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { Observable } from 'rxjs'

@UntilDestroy()
@Component({
    selector: 'cvc-flag-resolve-form',
    templateUrl: './flag-resolve.form.html',
    standalone: false
})
export class CvcFlagResolveForm implements OnInit {
  @Input() flag!: FlagFragment
  @Input() flagResolvedCallback?: () => void

  selectedOrg: Maybe<Organization>
  comment?: string

  errorMessages: string[] = []
  loading: boolean = false
  success: boolean = false
  flagResolvePopoverVisible: boolean = false

  viewer$: Observable<Viewer>

  resolveFlagMutator: MutatorWithState<
    ResolveFlagGQL,
    ResolveFlagMutation,
    ResolveFlagMutationVariables
  >

  constructor(
    private gql: ResolveFlagGQL,
    private viewerService: ViewerService,
    private networkErrorService: NetworkErrorsService
  ) {
    this.resolveFlagMutator = new MutatorWithState(this.networkErrorService)
    this.viewer$ = this.viewerService.viewer$
  }

  ngOnInit() {
    if (this.flag === undefined) {
      throw new Error('Must pass a Flag in to resolve component.')
    }

    this.viewerService.viewer$
      .pipe(untilDestroyed(this))
      .subscribe((v: Viewer) => {
        this.selectedOrg = v.mostRecentOrg
      })
  }

  onOrgSelected(org: Organization) {
    this.selectedOrg = org
  }

  resolveFlag() {
    if (this.comment) {
      this.errorMessages = []
      let state = this.resolveFlagMutator.mutate(this.gql, {
        input: {
          id: this.flag.id,
          comment: this.comment,
          organizationId: this.selectedOrg?.id,
        },
      })
      state.submitSuccess$.pipe(untilDestroyed(this)).subscribe((res) => {
        if (res) {
          this.flagResolvePopoverVisible = false
          this.success = true
          if (this.flagResolvedCallback) {
            this.flagResolvedCallback()
          }
        }
      })
      state.submitError$.pipe(untilDestroyed(this)).subscribe((res) => {
        if (res.length > 0) {
          this.success = false
          this.errorMessages = res
        }
      })

      state.isSubmitting$.pipe(untilDestroyed(this)).subscribe((loading) => {
        this.loading = loading
      })
    }
  }

  onSuccessBannerClose() {
    this.success = false
    if (this.flagResolvedCallback) {
      this.flagResolvedCallback()
    }
  }
}
