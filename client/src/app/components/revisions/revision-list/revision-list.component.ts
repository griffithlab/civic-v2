import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter, OnDestroy} from '@angular/core';
import { AcceptRevisionGQL, AcceptRevisionMutation, AcceptRevisionMutationVariables, Maybe, Organization, RejectRevisionGQL, RejectRevisionMutation, RejectRevisionMutationVariables, Revision, ValidateRevisionsForAcceptanceGQL, ValidateRevisionsForAcceptanceQuery, ValidateRevisionsForAcceptanceQueryVariables } from '@app/generated/civic.apollo';
import { Observable, Subject, Subscription } from 'rxjs';
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service';
import { MutationState, MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { map, takeUntil } from 'rxjs/operators';
import { QueryRef } from 'apollo-angular';

type SuccessType = false | 'accepted' | 'rejected'

@Component({
  selector: 'cvc-revision-list',
  templateUrl: './revision-list.component.html',
  styleUrls: ['./revision-list.component.less'],
})
export class RevisionListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() revisions?: Revision[];

  mostRecentOrg!: Maybe<Organization>;

  selectedRevisionIds: number[] = [];

  viewer$?: Observable<Viewer>;
  
  isLoading: boolean = false
  errors: Maybe<string[]>;

  success: SuccessType = false

  validationPopoverVisible: boolean = false
  revisionComment: Maybe<string>

  private destroy$ = new Subject();

  @Output() revisionSetSelectedEvent = new EventEmitter<string>();
  @Output() revisionMutationCompleted = new EventEmitter<void>();

  //TODO: Get rid of, we need a type guard pipe in the template to narrow the type safely in the template
  // (or the angular team to make ngSwitch better)
  //until then, at least its type checked at the Input level
  untypedRevisons?: any[];
  validationErrors$?: Observable<Maybe<string>[]>

  acceptRevisionsMutator: MutatorWithState<AcceptRevisionGQL, AcceptRevisionMutation, AcceptRevisionMutationVariables>;
  rejectRevisionsMutator: MutatorWithState<RejectRevisionGQL, RejectRevisionMutation, RejectRevisionMutationVariables>;

  queryRef!: QueryRef<ValidateRevisionsForAcceptanceQuery, ValidateRevisionsForAcceptanceQueryVariables>

  constructor(
    private viewerService: ViewerService,
    private networkErrorService: NetworkErrorsService,
    private acceptRevisionsGql: AcceptRevisionGQL,
    private rejectRevisionsGql: RejectRevisionGQL,
    private validationGql: ValidateRevisionsForAcceptanceGQL
  ) {
    this.acceptRevisionsMutator= new MutatorWithState(networkErrorService)
    this.rejectRevisionsMutator = new MutatorWithState(networkErrorService)
  }

  ngOnChanges(changes: SimpleChanges) {
    this.untypedRevisons = this.revisions;
  }

  ngOnInit(): void {
    this.viewer$ = this.viewerService.viewer$;
    this.viewerService.viewer$.subscribe((v: Viewer) => {
      this.mostRecentOrg = v.mostRecentOrg;
    });

    this.queryRef = this.validationGql.watch({
      ids: []
    })

    this.validationErrors$ = this.queryRef.valueChanges.pipe(
        map(({data}) => { return data.validateRevisionsForAcceptance.validationErrors })
    );

    this.untypedRevisons = this.revisions;
  }

  onChangesetSelected(changesetId: string) {
    this.revisionSetSelectedEvent.emit(changesetId);
  }

  onRevisionCheckboxClicked(value: boolean, revisionId: number) {
    if (value) {
      this.selectedRevisionIds.push(revisionId);
    } else {
      this.selectedRevisionIds = this.selectedRevisionIds.filter(
        (i) => i != revisionId
      );
    }
    this.queryRef.refetch({
      ids: this.selectedRevisionIds
    })
    console.log(this.validationErrors$)
  }

  setupMutationResultHandlers(state: MutationState, successType: SuccessType) {
      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res) {
          this.isLoading = false
          this.revisionMutationCompleted.emit();
          this.errors = undefined
          this.success = successType
          this.validationPopoverVisible = false
          this.selectedRevisionIds = []
        }
      })
      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res.length > 0) {
          this.isLoading = false
          this.success = false
          this.errors  = res
          this.validationPopoverVisible = false
          this.selectedRevisionIds = []
        }
      })
  }

  onRejectRevisionsClicked() {
    if (this.revisionComment && this.revisionComment !== "") {
      this.isLoading = true
      let state = this.rejectRevisionsMutator.mutate(this.rejectRevisionsGql, {
        input: {
          ids: this.selectedRevisionIds,
          organizationId: this.mostRecentOrg?.id,
          comment: this.revisionComment 
        }
      })
      this.setupMutationResultHandlers(state, 'rejected')
    }
  }

  onAcceptRevisionClicked() {
    this.isLoading = true
    let state = this.acceptRevisionsMutator.mutate(this.acceptRevisionsGql, {
      input: {
        ids: this.selectedRevisionIds,
        organizationId: this.mostRecentOrg?.id,
        comment: this.revisionComment === "" ? undefined : this.revisionComment
      }
    })
    this.setupMutationResultHandlers(state, 'accepted')
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onErrorBannerClose(err: string) {
    this.errors = this.errors?.filter(e => e != err)
  }

  onSuccessBannerClose() {
    this.success = false
  }
}
