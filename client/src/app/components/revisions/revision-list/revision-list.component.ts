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
  AcceptRevisionGQL,
  AcceptRevisionMutation,
  AcceptRevisionMutationVariables,
  Maybe,
  Organization,
  RejectRevisionGQL,
  RejectRevisionMutation,
  RejectRevisionMutationVariables,
  Revision,
  ValidateRevisionsForAcceptanceGQL,
  ValidateRevisionsForAcceptanceQuery,
  ValidateRevisionsForAcceptanceQueryVariables,
  ValidationErrorFragment,
} from '@app/generated/civic.apollo'
import { filter, Observable, Subject, combineLatest } from 'rxjs'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { map, startWith, takeUntil } from 'rxjs/operators'
import { QueryRef } from 'apollo-angular'
import { InternalRefetchQueryDescriptor } from '@apollo/client/core/types'
import { pluck } from 'rxjs-etc/operators'
import { isNonNulled } from 'rxjs-etc'

type SuccessType = false | 'accepted' | 'rejected'

@Component({
    selector: 'cvc-revision-list',
    templateUrl: './revision-list.component.html',
    styleUrls: ['./revision-list.component.less'],
    standalone: false
})
export class RevisionListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() revisions?: Revision[]
  @Input() refetchQueries: InternalRefetchQueryDescriptor[] = []

  mostRecentOrg!: Maybe<Organization>

  selectedRevisionIds: number[] = []

  viewer$: Observable<Viewer>

  isLoading: boolean = false
  errors: Maybe<string[]>

  success: SuccessType = false

  validationPopoverVisible: boolean = false
  revisionComment: Maybe<string>

  private destroy$ = new Subject<void>()

  @Output() revisionSetSelectedEvent = new EventEmitter<number>()
  @Output() revisionMutationCompleted = new EventEmitter<void>()

  //TODO: Get rid of, we need a type guard pipe in the template to narrow the type safely in the template
  // (or the angular team to make ngSwitch better)
  //until then, at least its type checked at the Input level
  untypedRevisons?: any[]
  genericErrors$?: Observable<Maybe<string>[]>
  validationErrors$?: Observable<ValidationErrorFragment[]>
  totalErrorCount$?: Observable<number>

  acceptRevisionsMutator: MutatorWithState<
    AcceptRevisionGQL,
    AcceptRevisionMutation,
    AcceptRevisionMutationVariables
  >
  rejectRevisionsMutator: MutatorWithState<
    RejectRevisionGQL,
    RejectRevisionMutation,
    RejectRevisionMutationVariables
  >

  queryRef!: QueryRef<
    ValidateRevisionsForAcceptanceQuery,
    ValidateRevisionsForAcceptanceQueryVariables
  >

  constructor(
    private viewerService: ViewerService,
    private networkErrorService: NetworkErrorsService,
    private acceptRevisionsGql: AcceptRevisionGQL,
    private rejectRevisionsGql: RejectRevisionGQL,
    private validationGql: ValidateRevisionsForAcceptanceGQL
  ) {
    this.acceptRevisionsMutator = new MutatorWithState(this.networkErrorService)
    this.rejectRevisionsMutator = new MutatorWithState(this.networkErrorService)
    this.viewer$ = this.viewerService.viewer$
  }

  ngOnChanges(_: SimpleChanges) {
    this.untypedRevisons = this.revisions
    this.selectedRevisionIds = []
    if (this.queryRef) {
      this.queryRef.refetch({
        ids: this.selectedRevisionIds,
      })
    }
  }

  ngOnInit(): void {
    this.viewerService.viewer$.subscribe((v: Viewer) => {
      this.mostRecentOrg = v.mostRecentOrg
    })

    this.queryRef = this.validationGql.watch({
      ids: [],
    })

    this.genericErrors$ = this.queryRef.valueChanges.pipe(
      pluck('data', 'validateRevisionsForAcceptance', 'genericErrors'),
      filter(isNonNulled),
      startWith([])
    )

    this.validationErrors$ = this.queryRef.valueChanges.pipe(
      pluck('data', 'validateRevisionsForAcceptance', 'validationErrors'),
      filter(isNonNulled),
      startWith([])
    )

    this.totalErrorCount$ = combineLatest([
      this.genericErrors$,
      this.validationErrors$,
    ]).pipe(
      map(([generic, validation]) => generic.length + validation.length),
      startWith(0)
    )

    this.untypedRevisons = this.revisions
  }

  onChangesetSelected(changesetId: number) {
    this.revisionSetSelectedEvent.emit(changesetId)
  }

  onRevisionCheckboxClicked(value: boolean, revisionId: number) {
    if (value) {
      this.selectedRevisionIds.push(revisionId)
    } else {
      this.selectedRevisionIds = this.selectedRevisionIds.filter(
        (i) => i != revisionId
      )
    }
    this.queryRef.refetch({
      ids: this.selectedRevisionIds,
    })
  }

  setupMutationResultHandlers(state: MutationState, successType: SuccessType) {
    state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res) {
        this.isLoading = false
        this.revisionMutationCompleted.emit()
        this.errors = undefined
        this.success = successType
        this.validationPopoverVisible = false
        this.selectedRevisionIds = []
        this.revisionComment = undefined
      }
    })
    state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res.length > 0) {
        this.isLoading = false
        this.success = false
        this.errors = res
        this.validationPopoverVisible = false
        this.selectedRevisionIds = []
      }
    })
  }

  onRejectRevisionsClicked() {
    if (this.revisionComment && this.revisionComment !== '') {
      this.isLoading = true
      let state = this.rejectRevisionsMutator.mutate(
        this.rejectRevisionsGql,
        {
          input: {
            ids: this.selectedRevisionIds,
            organizationId: this.mostRecentOrg?.id,
            comment: this.revisionComment,
          },
        },
        {
          refetchQueries: this.refetchQueries,
        }
      )
      this.setupMutationResultHandlers(state, 'rejected')
    }
  }

  onAcceptRevisionClicked() {
    this.isLoading = true
    let state = this.acceptRevisionsMutator.mutate(
      this.acceptRevisionsGql,
      {
        input: {
          ids: this.selectedRevisionIds,
          organizationId: this.mostRecentOrg?.id,
          comment:
            this.revisionComment === '' ? undefined : this.revisionComment,
        },
      },
      {
        refetchQueries: this.refetchQueries,
      }
    )
    this.setupMutationResultHandlers(state, 'accepted')
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
