import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import {
  FlagEntityGQL,
  FlagEntityMutation,
  FlagEntityMutationVariables,
  FlaggableInput,
  Maybe,
  Organization,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { Observable, Subject } from 'rxjs'

@UntilDestroy()
@Component({
    selector: 'cvc-flag-add-form',
    templateUrl: './flag-add.form.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcFlagAddForm implements OnInit {
  @Input() flaggable!: FlaggableInput
  @Input() flagAddedCallback?: () => void

  errorMessages: string[] = []
  success: boolean = false
  loading: boolean = false

  viewer$: Observable<Viewer>

  comment: string = ''
  selectedOrg: Maybe<Organization>

  addFlagMutator: MutatorWithState<
    FlagEntityGQL,
    FlagEntityMutation,
    FlagEntityMutationVariables
  >

  constructor(
    private gql: FlagEntityGQL,
    private viewerService: ViewerService,
    private networkErrorService: NetworkErrorsService
  ) {
    this.addFlagMutator = new MutatorWithState(this.networkErrorService)
    this.viewer$ = this.viewerService.viewer$
    this.viewerService.viewer$
      .pipe(untilDestroyed(this))
      .subscribe((v: Viewer) => {
        this.selectedOrg = v.mostRecentOrg
      })
  }

  ngOnInit() {
    //For some reason this doesn't work to initially set the org id on entities without any flags.
    //It works on pages with one or more flags. Not sure why

    if (this.flaggable === undefined) {
      throw new Error('Must pass a flagggable into flag add component')
    }
  }

  onOrgSelected(org: Organization) {
    this.selectedOrg = org
  }

  submitFlag() {
    this.errorMessages = []

    let input = {
      comment: this.comment,
      subject: this.flaggable,
      organizationId: this.selectedOrg?.id,
    }

    let state = this.addFlagMutator.mutate(this.gql, { input: input })
    state.submitSuccess$.pipe(untilDestroyed(this)).subscribe((res) => {
      if (res) {
        if (this.flagAddedCallback) {
          this.flagAddedCallback()
        }
        this.success = true
        this.comment = ''
      }
    })
    state.submitError$.pipe(untilDestroyed(this)).subscribe((res) => {
      if (res.length > 0) {
        this.errorMessages = res
      }
    })

    state.isSubmitting$.pipe(untilDestroyed(this)).subscribe((loading) => {
      this.loading = loading
    })
  }

  onSuccessBannerClose() {
    this.success = false
  }
}
