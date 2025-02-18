import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import {
  buildSortParams,
  SortDirectionEvent,
} from '@app/core/utilities/datatable-helpers'
import { ScrollEvent } from '@app/directives/table-scroll/table-scroll.directive'
import {
  EvidenceBrowseGQL,
  EvidenceBrowseQuery,
  EvidenceBrowseQueryVariables,
  EvidenceSignificance,
  EvidenceDirection,
  EvidenceGridFieldsFragment,
  EvidenceItemConnection,
  EvidenceLevel,
  EvidenceSortColumns,
  EvidenceStatusFilter,
  EvidenceType,
  Maybe,
  PageInfo,
  VariantOrigin,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  skip,
  takeWhile,
  withLatestFrom,
} from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

export interface EvidenceTableUserFilters {
  eidInput?: Maybe<string>
  diseaseNameInput?: Maybe<string>
  therapyNameInput?: Maybe<string>
  descriptionInput?: Maybe<string>
  evidenceLevelInput?: Maybe<EvidenceLevel>
  evidenceTypeInput?: Maybe<EvidenceType>
  evidenceDirectionInput?: Maybe<EvidenceDirection>
  SignificanceInput?: Maybe<EvidenceSignificance>
  variantOriginInput?: Maybe<VariantOrigin>
  evidenceRatingInput?: Maybe<number>
  molecularProfileNameInput?: Maybe<string>
  geneSymbolInput?: Maybe<string>
  statusInput?: Maybe<EvidenceStatusFilter>
}

@UntilDestroy()
@Component({
  selector: 'cvc-evidence-table',
  templateUrl: './evidence-table.component.html',
  styleUrls: ['./evidence-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcEvidenceTableComponent implements OnInit {
  @Input() cvcHeight: Maybe<string>
  @Input() assertionId: Maybe<number>
  @Input() clinicalTrialId: Maybe<number>
  @Input() cvcTitle: Maybe<string>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() diseaseId: Maybe<number>
  @Input() displayMolecularProfile = true
  @Input() therapyId: Maybe<number>
  @Input() organizationId: Maybe<number>
  @Input() phenotypeId: Maybe<number>
  @Input() sourceId: Maybe<number>
  @Input() status: Maybe<EvidenceStatusFilter>
  @Input() userId: Maybe<number>
  @Input() variantId: Maybe<number>
  @Input() molecularProfileId: Maybe<number>
  @Input() initialPageSize = 35
  @Input()
  set initialUserFilters(f: Maybe<EvidenceTableUserFilters>) {
    // assign any attributes in filters object to this class
    if (f) Object.assign(this, f)
  }

  @Output() initialTotalCount = new EventEmitter<number>()

  // SOURCE STREAMS
  scrollEvent$: BehaviorSubject<ScrollEvent>
  sortChange$: Subject<SortDirectionEvent>
  filterChange$: Subject<void>

  // INTERMEDIATE STREAMS
  queryRef!: QueryRef<EvidenceBrowseQuery, EvidenceBrowseQueryVariables>
  result$!: Observable<ApolloQueryResult<EvidenceBrowseQuery>>
  connection$!: Observable<EvidenceItemConnection>

  // PRESENTATION STREAMS
  pageInfo$!: Observable<PageInfo>
  initialLoading$!: Observable<boolean>
  moreLoading$!: Observable<boolean>
  row$!: Observable<Maybe<EvidenceGridFieldsFragment>[]>
  scrollIndex$: Subject<number>
  noMoreRows$: BehaviorSubject<boolean>

  // need a static var for scrolling state b/c sub/unsub in
  // virtual scroll rows degrades performance
  isScrolling = false

  // filters
  SignificanceInput: Maybe<EvidenceSignificance>
  descriptionInput: Maybe<string>
  diseaseNameInput: Maybe<string>
  therapyNameInput: Maybe<string>
  eidInput: Maybe<string>
  evidenceDirectionInput: Maybe<EvidenceDirection>
  evidenceLevelInput: Maybe<EvidenceLevel>
  evidenceRatingInput: Maybe<number>
  evidenceTypeInput: Maybe<EvidenceType>
  molecularProfileNameInput: Maybe<string>
  variantOriginInput: Maybe<VariantOrigin>
  statusInput: Maybe<EvidenceStatusFilter> = EvidenceStatusFilter.NonRejected

  availableStatusFilters = EvidenceStatusFilter
  statusFilterVisible = false

  sortColumns = EvidenceSortColumns
  evidenceLevels = EvidenceLevel

  constructor(
    private gql: EvidenceBrowseGQL,
    private cdr: ChangeDetectorRef
  ) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)
    this.scrollEvent$ = new BehaviorSubject<ScrollEvent>('stop')
    this.sortChange$ = new Subject<SortDirectionEvent>()
    this.filterChange$ = new Subject<void>()
    this.scrollIndex$ = new Subject<number>()
  }

  ngOnInit() {
    this.queryRef = this.gql.watch({
      assertionId: this.assertionId,
      significance: this.SignificanceInput ? this.SignificanceInput : undefined,
      clinicalTrialId: this.clinicalTrialId,
      description: this.descriptionInput,
      diseaseId: this.diseaseId,
      diseaseName: this.diseaseNameInput,
      therapyId: this.therapyId,
      therapyName: this.therapyNameInput,
      evidenceDirection: this.evidenceDirectionInput
        ? this.evidenceDirectionInput
        : undefined,
      evidenceLevel: this.evidenceLevelInput
        ? this.evidenceLevelInput
        : undefined,
      evidenceType: this.evidenceTypeInput ? this.evidenceTypeInput : undefined,
      first: this.initialPageSize,
      organizationId: this.organizationId,
      phenotypeId: this.phenotypeId,
      rating: this.evidenceRatingInput ? this.evidenceRatingInput : undefined,
      sourceId: this.sourceId,
      status: this.status || EvidenceStatusFilter.NonRejected,
      userId: this.userId,
      variantId: this.variantId,
      molecularProfileId: this.molecularProfileId,
      molecularProfileName: this.molecularProfileNameInput
        ? this.molecularProfileNameInput
        : undefined,
      variantOrigin: this.variantOriginInput
        ? this.variantOriginInput
        : undefined,
    })

    this.result$ = this.queryRef.valueChanges

    // toggles table overlay 'Loading...' spinner
    this.initialLoading$ = this.result$.pipe(
      pluck('loading'),
      distinctUntilChanged(),
      takeWhile((l) => l !== false, true)
    ) // only activate on 1st true/false sequence

    // toggles table header 'Loading...' tag
    this.moreLoading$ = this.result$.pipe(
      pluck('loading'),
      distinctUntilChanged(),
      skip(2)
    ) // skip 1st true/false sequence

    // entity relay connection
    this.connection$ = this.result$.pipe(
      pluck('data', 'evidenceItems'),
      filter(isNonNulled)
    ) as Observable<EvidenceItemConnection>

    // emit total counts
    this.connection$
      .pipe(
        map((p) => p.totalCount),
        untilDestroyed(this)
      )
      .subscribe((tc) => this.initialTotalCount.next(tc))

    // entity row nodes
    this.row$ = this.connection$.pipe(
      pluck('edges'),
      filter(isNonNulled),
      map((edges) => edges.map((e) => e.node))
    )

    // provided to table-scroll directive for fetchMore queries
    this.pageInfo$ = this.connection$.pipe(
      pluck('pageInfo'),
      filter(isNonNulled)
    )

    // refetch when column sort changes
    this.sortChange$
      .pipe(untilDestroyed(this))
      .subscribe((e: SortDirectionEvent) => {
        this.queryRef.refetch({ sortBy: buildSortParams(e) })
      })

    // refresh when filters change
    this.filterChange$
      .pipe(debounceTime(500), untilDestroyed(this))
      .subscribe(() => {
        this.refresh()
      })

    // for every onScrolled event, convert to bool & set isScrolling
    this.scrollEvent$
      .pipe(
        map((e: ScrollEvent) => (e === 'stop' ? false : true)),
        distinctUntilChanged(),
        untilDestroyed(this)
      )
      .subscribe((e) => {
        this.isScrolling = e
        this.cdr.detectChanges()
      })

    // emit event from noMoreRow$ if hasNextPage false
    this.scrollEvent$
      .pipe(
        filter((e) => e === 'bottom'),
        withLatestFrom(this.pageInfo$),
        map(([_, pageInfo]: [ScrollEvent, PageInfo]) => pageInfo),
        untilDestroyed(this)
      )
      .subscribe((pageInfo: PageInfo) => {
        if (!pageInfo.hasNextPage) {
          this.noMoreRows$.next(true)
          this.cdr.detectChanges()

          // need to send a followup 'false' here or else
          // ng won't interpret subsequent 'true' events as changes
          setInterval(() => this.noMoreRows$.next(false))
        }
      })
  } // ngOnInit

  refresh() {
    let eid: Maybe<number>
    if (this.eidInput)
      if (this.eidInput.toUpperCase().startsWith('EID')) {
        eid = +this.eidInput.toUpperCase().replace('EID', '')
      } else {
        eid = +this.eidInput
      }
    else {
      eid = undefined
    }
    this.queryRef
      .refetch({
        id: eid,
        diseaseName: this.diseaseNameInput,
        therapyName: this.therapyNameInput,
        description: this.descriptionInput,
        status: this.statusInput,
        evidenceLevel: this.evidenceLevelInput
          ? this.evidenceLevelInput
          : undefined,
        evidenceType: this.evidenceTypeInput
          ? this.evidenceTypeInput
          : undefined,
        evidenceDirection: this.evidenceDirectionInput
          ? this.evidenceDirectionInput
          : undefined,
        significance: this.SignificanceInput
          ? this.SignificanceInput
          : undefined,
        variantOrigin: this.variantOriginInput
          ? this.variantOriginInput
          : undefined,
        rating: this.evidenceRatingInput ? this.evidenceRatingInput : undefined,
        molecularProfileName: this.molecularProfileNameInput
          ? this.molecularProfileNameInput
          : undefined,
      })
      .then(() => this.scrollIndex$.next(0))

    this.cdr.detectChanges()
  }

  statusChanged() {
    this.filterChange$.next()
    this.statusFilterVisible = false
  }

  trackByIndex(
    _: number,
    data: Maybe<EvidenceGridFieldsFragment>
  ): Maybe<number> {
    return data?.id
  }
}
