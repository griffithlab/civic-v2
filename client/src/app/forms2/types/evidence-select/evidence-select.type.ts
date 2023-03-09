import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  QueryList,
  TemplateRef,
  Type,
  ViewChildren,
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { CvcSelectEntityName } from '@app/forms2/components/entity-select/entity-select.component'
import { BaseFieldType } from '@app/forms2/mixins/base/base-field'
import { EntitySelectField } from '@app/forms2/mixins/entity-select-field.mixin'
import {
  AssertionFields,
  EvidenceSelectTagGQL,
  EvidenceSelectTagQuery,
  EvidenceSelectTagQueryVariables,
  EvidenceSelectTypeaheadFieldsFragment,
  EvidenceSelectTypeaheadGQL,
  EvidenceSelectTypeaheadQuery,
  EvidenceSelectTypeaheadQueryVariables,
  Maybe,
  SubmitAssertionMutationVariables,
} from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { Apollo } from 'apollo-angular'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import { NzTableFilterList } from 'ng-zorro-antd/table'
import {
  combineLatest,
  map,
  Observable,
  of,
  ReplaySubject,
  scan,
  shareReplay,
  startWith,
  Subject,
  switchMap,
  withLatestFrom,
} from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import mixin from 'ts-mixin-extended'
import { EvidenceManagerRowData } from './evidence-manager/evidence-manager.types'

export type CvcEvidenceSelectFieldOptions = Partial<
  FieldTypeConfig<CvcEvidenceSelectFieldProps>
>

export interface CvcEvidenceSelectFieldProps extends FormlyFieldProps {
  isMultiSelect: boolean // is child of a repeat-field type
  entityName: CvcSelectEntityName
  placeholder: string
  tooltip?: string
  description?: string
  minSearchStrLength: number
}

export interface CvcEvidenceSelectFieldConfig
  extends FormlyFieldConfig<Partial<CvcEvidenceSelectFieldProps>> {
  type:
    | 'evidence-select'
    | 'evidence-multi-select'
    | Type<CvcEvidenceSelectField>
}

type FieldChange = {
  key: keyof AssertionFields
  value: SubmitAssertionMutationVariables | null
}

const EvidenceSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcEvidenceSelectFieldProps>,
    Maybe<number | number[]>
  >(),
  EntitySelectField<
    EvidenceSelectTypeaheadQuery,
    EvidenceSelectTypeaheadQueryVariables,
    EvidenceSelectTypeaheadFieldsFragment,
    EvidenceSelectTagQuery,
    EvidenceSelectTagQueryVariables,
    Maybe<number>
  >()
)
@Component({
  selector: 'cvc-evidence-select',
  templateUrl: './evidence-select.type.html',
  styleUrls: ['./evidence-select.type.less'],
})
export class CvcEvidenceSelectField
  extends EvidenceSelectMixin
  implements AfterViewInit
{
  // SOURCE STREAMS
  onEid$: ReplaySubject<Maybe<number[]>>
  onShowMgrClick$: Subject<void>

  // PRESENTATION STREAMS
  showMgr$: Observable<boolean>

  synchronizedFields$: Observable<FieldChange>[] = []
  tableFilterChange$!: Observable<NzTableFilterList>

  mgrOpen: boolean = false

  defaultOptions: CvcEvidenceSelectFieldOptions = {
    props: {
      label: 'Evidence Items',
      placeholder: 'Select Evidence Items',
      isMultiSelect: true,
      description:
        'Select Evidence by ID, or use the manager to select with filtering',
      entityName: {
        singular: 'Evidence Item',
        plural: 'Evidence Items',
      },
      minSearchStrLength: 1,
    },
  }

  // list of manager table columns that should be kept
  // synchronized with field values
  // NOTE: evidence-manager table filters do not filter by ID -
  // except for 'id' (EID) - and entity columns are filtered by name.
  // Therefore the manager will use the provided entity ids to fetch their
  // entity names from the cache, and filter by those names. In the
  // case of multiple ids (e.g. Therapies), the name associated with the
  // first id in the array will be used.
  // FIXME: currently using these assertion submit form fields, however a
  // more generic solution will be required for this field to be used
  // in other forms.
  synchronizedFieldToColMap = new Map<
    keyof AssertionFields,
    keyof Omit<EvidenceManagerRowData, 'id' | 'status'>
  >([
    ['molecularProfileId', 'molecularProfile'],
    ['diseaseId', 'disease'],
    ['therapyIds', 'therapies'],
    ['assertionType', 'evidenceType'],
    ['assertionDirection', 'evidenceDirection'],
    ['significance', 'significance'],
  ])

  // list of manager table columns to be visible/hidden
  // in sync with the required state of their fields
  disabledFieldToColMap = new Map<
    keyof AssertionFields,
    keyof EvidenceManagerRowData
  >([
    ['diseaseId', 'disease'],
    ['therapyIds', 'therapies'],
  ])

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(
    private taq: EvidenceSelectTypeaheadGQL,
    private tq: EvidenceSelectTagGQL,
    private changeDetectorRef: ChangeDetectorRef,
    private apollo: Apollo
  ) {
    super()
    this.onEid$ = new ReplaySubject<Maybe<number[]>>()
    this.onShowMgrClick$ = new Subject<void>()
    this.showMgr$ = this.onShowMgrClick$.pipe(
      startWith(true),
      scan((acc, _) => !acc, false)
    )
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    this.configureStateConnections() // local fn
    this.configureEntitySelectField({
      typeaheadQuery: this.taq,
      tagQuery: this.tq,
      getTypeaheadVarsFn: this.getTypeaheadVarsFn,
      getTypeaheadResultsFn: this.getTypeaheadResultsFn,
      getTagQueryVarsFn: this.getTagQueryVarsFn,
      getTagQueryResultsFn: this.getTagQueryResultsFn,
      getSelectedItemOptionFn: this.getSelectedItemOptionFn,
      getSelectOptionsFn: this.getSelectOptionsFn,
      changeDetectorRef: this.changeDetectorRef,
      selectOpen$: this.selectOpen$,
      selectComponent: this.selectComponent,
    })

    // if form value exists on init, emit it so evidence manager will be updated
    this.onEid$.next(this.formControl.value)
    this.onValueChange$
      .pipe(
        tag('evidence-select onValueChange$'),
        withLatestFrom(this.onEid$),
        untilDestroyed(this)
      )
      .subscribe(([current, old]) => {
        if (Array.isArray(current)) this.onEid$.next(current)
      })
  }

  private arraysContainSame(a: number[], b: number[]) {
    a = Array.isArray(a) ? a : [a]
    b = Array.isArray(b) ? b : [b]
    return a.length === b.length && a.every((el) => b.includes(el))
  }

  private configureStateConnections() {
    if (!this.state) return
    // for each synchronized field, find its state.${field}$ stream,
    // add it to the synchronized fields array
    this.synchronizedFieldToColMap.forEach((column, field) => {
      if (!this.state) return
      // console.log(f,c)
      const stream = this.state.fields[`${field}$`]
      if (!stream) return
      this.synchronizedFields$.push(
        stream.pipe(
          switchMap((v) => {
            return of({ key: field, value: v ?? null })
          }),
          startWith({ key: field, value: null })
        )
      )
    })

    // combine synchronized fields streams into tableFilterChange$, convert
    // FieldChange object to NzTableFilter. provides a NzTableFilterList
    // to evidence-manager's cvcTableFilters Input
    this.tableFilterChange$ = combineLatest(this.synchronizedFields$).pipe(
      map((fields) => {
        const newFilters: NzTableFilterList = []
        fields.forEach((field) => {
          const colKey = this.synchronizedFieldToColMap.get(field.key)
          if (colKey) {
            newFilters.push({
              text: colKey,
              value: field.value,
            })
          }
        })
        return [...newFilters]
      }),
    ),
    shareReplay(1),
    tag('tableFilterChange$')
  }

  getTypeaheadVarsFn(id: string, param: Maybe<number>) {
    return {
      eid: +id,
    }
  }

  getTypeaheadResultsFn(r: ApolloQueryResult<EvidenceSelectTypeaheadQuery>) {
    return r.data.evidenceItems.nodes
  }

  getTagQueryVarsFn(id: number): EvidenceSelectTagQueryVariables {
    return { eid: id }
  }

  getTagQueryResultsFn(
    r: ApolloQueryResult<EvidenceSelectTagQuery>
  ): Maybe<EvidenceSelectTypeaheadFieldsFragment> {
    return r.data.evidenceItem
  }

  getSelectedItemOptionFn(
    evidenceItem: EvidenceSelectTypeaheadFieldsFragment
  ): NzSelectOptionInterface {
    return { value: evidenceItem.id, label: `EID${evidenceItem.id}` }
  }

  getSelectOptionsFn(
    results: EvidenceSelectTypeaheadFieldsFragment[],
    tplRefs: QueryList<TemplateRef<any>>
  ): NzSelectOptionInterface[] {
    return results.map(
      (evidenceItem: EvidenceSelectTypeaheadFieldsFragment, index: number) => {
        return <NzSelectOptionInterface>{
          label: tplRefs.get(index) || `EID${evidenceItem.id}`,
          value: evidenceItem.id,
        }
      }
    )
  }
}
