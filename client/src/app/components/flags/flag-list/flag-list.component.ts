import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core'
import {
  Flag,
  FlagFragment,
  Maybe,
  Organization,
  ViewerOrganizationFragment,
} from '@app/generated/civic.apollo'
import { Observable, Subject } from 'rxjs'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { MutationState } from '@app/core/utilities/mutation-state-wrapper'
import { takeUntil } from 'rxjs/operators'

type SuccessType = false | 'accepted' | 'rejected'

@Component({
  selector: 'cvc-flag-list',
  templateUrl: './flag-list.component.html',
  styleUrls: ['./flag-list.component.less'],
  standalone: false,
})
export class FlagListComponent implements OnInit, OnDestroy {
  @Input() flags!: FlagFragment[]
  @Input() flagResolvedCallback?: () => void

  mostRecentOrg!: Maybe<ViewerOrganizationFragment>

  selectedFlagId: Maybe<number>

  viewer$?: Observable<Viewer>

  isLoading: boolean = false
  errors: Maybe<string[]>

  success: SuccessType = false

  flagComment: Maybe<string>

  private destroy$ = new Subject<void>()

  constructor(private viewerService: ViewerService) {}

  ngOnInit(): void {
    this.viewer$ = this.viewerService.viewer$
    this.viewerService.viewer$.subscribe((v: Viewer) => {
      this.mostRecentOrg = v.mostRecentOrg
    })
  }

  setupMutationResultHandlers(state: MutationState, successType: SuccessType) {
    state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res) {
        this.isLoading = false
        //this.revisionMutationCompleted.emit();
        this.errors = undefined
        this.success = successType
      }
    })
    state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res.length > 0) {
        this.isLoading = false
        this.success = false
        this.errors = res
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  onErrorBannerClose(err: string) {
    this.errors = this.errors?.filter((e) => e != err)
  }

  onSuccessBannerClose() {
    this.success = false
  }
}
