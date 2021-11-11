import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter, OnDestroy} from '@angular/core';
import { AcceptRevisionGQL, AcceptRevisionMutation, AcceptRevisionMutationVariables, Maybe, Organization, RejectRevisionGQL, RejectRevisionMutation, RejectRevisionMutationVariables, Revision } from '@app/generated/civic.apollo';
import { Observable, Subject } from 'rxjs';
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { takeUntil } from 'rxjs/operators';

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
  success: boolean = false

  private destroy$ = new Subject();

  @Output() revisionSetSelectedEvent = new EventEmitter<string>();
  @Output() revisionMutationCompleted = new EventEmitter<void>();

  //TODO: Get rid of, we need a type guard pipe in the template to narrow the type safely in the template
  // (or the angular team to make ngSwitch better)
  //until then, at least its type checked at the Input level
  untypedRevisons?: any[];

  acceptRevisionsMutator: MutatorWithState<AcceptRevisionGQL, AcceptRevisionMutation, AcceptRevisionMutationVariables>;
  rejectRevisionsMutator: MutatorWithState<RejectRevisionGQL, RejectRevisionMutation, RejectRevisionMutationVariables>;

  constructor(
    private viewerService: ViewerService,
    private networkErrorService: NetworkErrorsService,
    private acceptRevisionsGql: AcceptRevisionGQL,
    private rejectRevisionsGql: RejectRevisionGQL
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
  }

  onRejectRevisionsClicked(organizationId: number) {
  }

  onAcceptRevisionClicked() {
    this.isLoading = true
    let state = this.acceptRevisionsMutator.mutate(this.acceptRevisionsGql, {
      input: {
        ids: this.selectedRevisionIds,
        organizationId: this.mostRecentOrg?.id  
      }
    })

    state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res) {
        this.isLoading = false
        this.revisionMutationCompleted.emit();
        this.errors = undefined
        this.success = true
      }
    })
    state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res.length > 0) {
        this.isLoading = false
        this.success = false
        this.errors  = res
      }
    })
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
