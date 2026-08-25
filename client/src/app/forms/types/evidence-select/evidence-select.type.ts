import {
  ChangeDetectionStrategy,
  Component,
  Type,
  computed,
  inject,
  signal,
} from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ReactiveFormsModule } from '@angular/forms'
import {
  CvcEntitySelectDirective,
  CvcEntitySelectFieldBase,
  CvcEntitySelectFieldProps,
  CvcSelectMessagesComponent,
  entitySelectConfig,
} from '@app/forms/select'
import { AssertionFields, Maybe } from '@app/generated/civic.apollo.types'
import { CvcTagComponent } from '@app/tags'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'
import { Observable, combineLatest, debounceTime, map } from 'rxjs'
import { EvidenceManagerSettings } from './evidence-manager/evidence-manager.component'
import { CvcEvidenceManagerModule } from './evidence-manager/evidence-manager.module'
import {
  ColumnPrefsOption,
  CvcFilterChange,
  EvidenceManagerRowData,
} from './evidence-manager/evidence-manager.types'
import {
  EvidenceSelectTagGQL,
  EvidenceSelectTypeaheadFieldsFragment,
  EvidenceSelectTypeaheadGQL,
} from './evidence-select.query.gql.generated'

export type CvcEvidenceSelectFieldOptions = Partial<
  FieldTypeConfig<CvcEvidenceSelectFieldProps>
>

export interface CvcEvidenceSelectFieldProps extends CvcEntitySelectFieldProps {
  /** renders the evidence manager alongside the select */
  showManager?: boolean
}

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcEvidenceSelectFieldConfig
  extends FormlyFieldConfig<CvcEvidenceSelectFieldProps> {
  type:
    | 'evidence-select'
    | 'evidence-multi-select'
    | Type<CvcEvidenceSelectField>
}

/**
 * Manager table columns kept in sync with the form's own field values.
 *
 * The manager filters entity columns by NAME, not id (only 'id'/EID is
 * numeric), so it resolves each id to a name out of the Apollo cache.
 */
const SYNCHRONIZED_FIELD_TO_COL = new Map<
  keyof AssertionFields,
  keyof Omit<EvidenceManagerRowData, 'id' | 'status'>
>([
  ['molecularProfileId', 'molecularProfile'],
  ['diseaseId', 'disease'],
  ['therapyIds', 'therapies'],
])

/** manager columns shown/hidden in step with whether their field is required */
const REQUIRED_FIELD_TO_COL = new Map<keyof EvidenceManagerRowData, string>([
  ['disease', 'requiresDisease$'],
  ['therapies', 'requiresTherapy$'],
])

/** an EID typed with or without its prefix; anything else matches nothing */
const EID_PATTERN = /^(?:EID)?(\d+)$/i

/**
 * Selects Evidence Items by EID, optionally alongside the evidence manager.
 *
 * Two things make this field unlike the others on this base. Its typeahead is
 * an ID lookup rather than a name search. And it reads the form state not to
 * gate itself but to drive the manager: the values and required-flags of the
 * sibling molecular profile, disease and therapy fields become the manager's
 * column filters and column preferences.
 */
@Component({
  selector: 'cvc-evidence-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzSelectModule,
    NzTooltipModule,
    CvcTagComponent,
    CvcEntitySelectDirective,
    CvcSelectMessagesComponent,
    CvcEvidenceManagerModule,
  ],
  templateUrl: './evidence-select.type.html',
  styleUrl: './evidence-select.type.less',
})
export class CvcEvidenceSelectField extends CvcEntitySelectFieldBase<
  EvidenceSelectTypeaheadFieldsFragment,
  void,
  CvcEvidenceSelectFieldProps
> {
  private readonly typeaheadGQL = inject(EvidenceSelectTypeaheadGQL)
  private readonly tagGQL = inject(EvidenceSelectTagGQL)

  protected readonly select = entitySelectConfig({
    entityName: { singular: 'Evidence Item', plural: 'Evidence Items' },
    typename: 'EvidenceItem',
    typeahead: this.typeaheadGQL,
    typeaheadVars: (search: string) => {
      const match = search.trim().match(EID_PATTERN)
      return { eid: match ? +match[1] : 0 }
    },
    typeaheadResults: (data) => data?.evidenceItems.nodes ?? [],
    tag: {
      query: this.tagGQL,
      vars: (eid: number) => ({ eid }),
      result: (data) => data?.evidenceItem,
    },
    minSearchStrLength: 1,
  })

  /** the manager is a drawer below the select, toggled by its own button */
  protected readonly showManager = signal(false)

  /** column filters and preferences derived from the sibling fields' state */
  protected readonly tableSettings = signal<Maybe<EvidenceManagerSettings>>(
    undefined
  )

  protected readonly selected = computed(() => this.selectedIds())

  defaultOptions: CvcEvidenceSelectFieldOptions = {
    props: {
      label: 'Evidence Items',
      placeholder: 'Select Evidence Items',
      entityName: { singular: 'Evidence Item', plural: 'Evidence Items' },
      isMultiSelect: false,
      showManager: true,
      description:
        'Select Evidence by ID, or use the manager to select with filtering',
    },
  }

  override ngOnInit(): void {
    super.ngOnInit()
    this.connectTableSettings()
  }

  protected toggleManager(): void {
    this.showManager.update((shown) => !shown)
  }

  /**
   * The manager emits the complete selection, so this replaces the value
   * rather than appending to it the way a quick-add does. The tag records are
   * fetched because nz-select will not render a selected item it has never
   * seen as an option.
   */
  protected onManagerSelection(ids: Maybe<number[]>): void {
    const value = ids ?? []
    this.formControl.setValue(value)
    this.fetchTagRecords(value).subscribe()
  }

  private connectTableSettings(): void {
    if (!this.state) return

    // a form may declare either map without the other, so neither is assumed
    const fields = this.state.fields ?? {}
    const requires = this.state.requires ?? {}

    const fieldChanges: Observable<CvcFilterChange>[] = []
    SYNCHRONIZED_FIELD_TO_COL.forEach((column, field) => {
      const stream = fields[`${field}$`]
      if (!stream) return
      fieldChanges.push(
        stream.pipe(map((v) => ({ key: column, value: v ?? null })))
      )
    })

    const requiredChanges: Observable<Partial<ColumnPrefsOption>[]>[] = []
    REQUIRED_FIELD_TO_COL.forEach((requiresKey, column) => {
      const stream = requires[requiresKey]
      if (!stream) return
      requiredChanges.push(
        stream.pipe(map((required) => [{ value: column, checked: required }]))
      )
    })

    if (fieldChanges.length === 0 || requiredChanges.length === 0) return

    combineLatest([
      combineLatest(fieldChanges),
      combineLatest(requiredChanges).pipe(map((prefs) => prefs.flat())),
    ])
      .pipe(
        map(([filters, preferences]) => ({ filters, preferences })),
        debounceTime(100),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((settings) => this.tableSettings.set(settings))
  }
}
