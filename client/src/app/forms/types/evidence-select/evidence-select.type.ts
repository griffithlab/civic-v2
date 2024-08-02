import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  QueryList,
  TemplateRef,
  Type,
  ViewChildren,
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { CvcSelectEntityName } from '@app/forms/components/entity-select/entity-select.component'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { EntitySelectField } from '@app/forms/mixins/entity-select-field.mixin'
import { waitUntil } from '@app/forms/utilities/operators/waitUntil'
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
import {
  combineLatest,
  debounceTime,
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
import { EvidenceManagerSettings } from './evidence-manager/evidence-manager.component'
import {
  ColumnPrefsOption,
  CvcFilterChange,
  EvidenceManagerRowData,
} from './evidence-manager/evidence-manager.types'

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

type RequiredChange = {
  key: keyof EvidenceManagerRowData
  required: boolean
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
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  // arrays containing field value change, field required change streams
  synchronizedFields$: Observable<FieldChange>[] = []
  synchronizedRequired$: Observable<RequiredChange>[] = []

  // emits all synchronized field changes when any updated
  onFieldsChange$!: Observable<CvcFilterChange[]>
  // emits all synchronized field required changes when any updated
  onRequiredChange$!: Observable<Partial<ColumnPrefsOption>[]>

  // munges field, required streams into table settings formatted config obj
  tableSettingsChange$!: Observable<EvidenceManagerSettings>

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

  // list of manager table columns that should be kept synchronized with field values

  // NOTE: evidence-manager table filters do not filter by entity ID (except for
  // 'id' (EID)). Instead, entity columns are filtered by their entity name. Therefore
  // the manager will use the provided entity ids to fetch their entity names
  // from the cache, and set the column filter to that name.
  synchronizedFieldToColMap = new Map<
    keyof AssertionFields,
    keyof Omit<EvidenceManagerRowData, 'id' | 'status'>
  >([
    ['molecularProfileId', 'molecularProfile'],
    ['diseaseId', 'disease'],
    ['therapyIds', 'therapies'],
  ])

  // list of manager table columns to be visible/hidden
  // in sync with the required state of their fields
  requiredFieldToColMap = new Map<keyof EvidenceManagerRowData, string>([
    ['disease', 'requiresDisease$'],
    ['therapies', 'requiresTherapy$'],
    // ['therapyInteractionType', 'requiresTherapyInteractionType$'],
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
      // startWith(true),
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

    // this.onEid$
    //   .pipe(tag('evidence-select onEid$'), untilDestroyed(this))
    //   .subscribe()

    // if form value exists on init, emit it so evidence manager will be updated
    if (
      this.formControl.value !== undefined &&
      this.formControl.value.length !== 0
    ) {
      this.onEid$.next(this.formControl.value)
    }

    this.onValueChange$
      .pipe(
        withLatestFrom(this.onEid$),
        // tag('evidence-select onValueChange$'),
        untilDestroyed(this)
      )
      .subscribe(([current, old]) => {
        if (Array.isArray(current)) this.onEid$.next(current)
      })
  }

  private configureStateConnections() {
    if (!this.state) return

    // for each synchronized field specified, find its state.field stream,
    // add it to the synchronized fields array
    this.synchronizedFieldToColMap.forEach((column, field) => {
      // console.log('column', column, 'field', field)
      const stream = this.state!.fields[`${field}$`]
      if (!stream) return
      this.synchronizedFields$.push(
        stream.pipe(
          map((v) => {
            return { key: field, value: v ?? null }
          })
          // tag(`synchronizedFields$ ${field} stream`)
        )
      )
    })

    // for each synchronized field specified, find its state.requires stream,
    // add it to the synchronized synchronizedRequired array
    this.requiredFieldToColMap.forEach((requires, field) => {
      // console.log('requires', requires, 'field', field)
      const stream = this.state!.requires[requires]
      if (!stream) return
      this.synchronizedRequired$.push(
        stream.pipe(
          map((v) => {
            return { key: field, required: v }
          })
          // tag(`synchronizedRequired$ ${field} stream`)
        )
      )
    })

    // combine all synchronized requireds updates, emit table filter changes array
    this.onFieldsChange$ = combineLatest(this.synchronizedFields$).pipe(
      map((fields) => {
        const newFilters: CvcFilterChange[] = []
        fields.forEach((field) => {
          const colKey = this.synchronizedFieldToColMap.get(field.key)
          if (colKey) {
            newFilters.push({
              key: colKey,
              value: field.value,
            })
          }
        })
        return newFilters
      })
      // tag('onFieldsChange$')
    )

    // combine all synchronized requireds updates, emit table prefs array
    this.onRequiredChange$ = combineLatest(this.synchronizedRequired$).pipe(
      map((fields) => {
        const newPrefs: Partial<ColumnPrefsOption>[] = []
        fields.forEach((change) => {
          newPrefs.push({
            value: change.key,
            checked: change.required,
          })
        })
        return newPrefs
      })
      // tag(`onRequiredChange$ stream`)
    )

    this.tableSettingsChange$ = combineLatest([
      this.onFieldsChange$,
      this.onRequiredChange$,
    ]).pipe(
      map(([filters, prefs]) => {
        return { filters: filters, preferences: prefs }
      }),
      // waitUntil(this.state.formReady$),
      // tag('tableSettingsChange$'),
      debounceTime(100),
      shareReplay(1)
    )
  }

  getTypeaheadVarsFn(id: string, param: Maybe<number>) {
    return {
      eid: +id.replace(/EID/i, ''),
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
