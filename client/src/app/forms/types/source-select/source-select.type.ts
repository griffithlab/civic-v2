import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Type,
  computed,
  effect,
  inject,
} from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { formatSourceTypeEnum } from '@app/core/utilities/enum-formatters/format-source-type-enum'
import {
  CvcEntitySelectDirective,
  CvcEntitySelectFieldBase,
  CvcEntitySelectFieldProps,
  CvcHighlightComponent,
  CvcSelectAddFormComponent,
  CvcSelectMessagesComponent,
  entitySelectConfig,
} from '@app/forms/select'
import { Maybe, SourceSource } from '@app/generated/civic.apollo.types'
import { CvcTagComponent } from '@app/tags'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcSourceQuickAddForm } from './source-quick-add/source-quick-add.form'
import {
  SourceSelectTagGQL,
  SourceSelectTypeaheadFieldsFragment,
  SourceSelectTypeaheadGQL,
} from './source-select.query.gql.generated'

export type CvcSourceSelectFieldOptions = Partial<
  FieldTypeConfig<CvcSourceSelectFieldProps>
>

export interface CvcSourceSelectFieldProps extends CvcEntitySelectFieldProps {
  /** set false to suppress the quick-add form on an empty result set */
  showAddEntity?: boolean
}

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcSourceSelectFieldConfig
  extends FormlyFieldConfig<CvcSourceSelectFieldProps> {
  type: 'source-select' | 'source-multi-select' | Type<CvcSourceSelectField>
}

const DEFAULT_SOURCE_TYPE = SourceSource.Pubmed

/**
 * Selects a Source by citation ID within one source repository.
 *
 * Unlike the fields migrated before it, the typeahead takes a parameter the
 * *user* chooses: the source type select in this field's own template drives
 * the base's `param`/`paramName` signals, so switching PubMed → ASCO re-runs
 * the search and re-words the dropdown's messages and placeholder.
 */
@Component({
  selector: 'cvc-source-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    NzGridModule,
    NzSelectModule,
    NzTooltipModule,
    NzTypographyModule,
    CvcTagComponent,
    CvcEntitySelectDirective,
    CvcHighlightComponent,
    CvcSelectAddFormComponent,
    CvcSelectMessagesComponent,
    CvcSourceQuickAddForm,
  ],
  templateUrl: './source-select.type.html',
  styleUrl: './source-select.type.less',
})
export class CvcSourceSelectField extends CvcEntitySelectFieldBase<
  SourceSelectTypeaheadFieldsFragment,
  SourceSource,
  CvcSourceSelectFieldProps
> {
  private readonly typeaheadGQL = inject(SourceSelectTypeaheadGQL)
  private readonly tagGQL = inject(SourceSelectTagGQL)
  private readonly cdr = inject(ChangeDetectorRef)

  protected readonly select = entitySelectConfig({
    entityName: { singular: 'Source', plural: 'Sources' },
    typename: 'Source',
    typeahead: this.typeaheadGQL,
    typeaheadVars: (partialCitationId: string, sourceType: SourceSource) => ({
      partialCitationId,
      sourceType,
    }),
    typeaheadResults: (data) => data?.sourceTypeahead ?? [],
    tag: {
      query: this.tagGQL,
      vars: (id: number) => ({ id }),
      result: (data) => data?.source,
    },
    minSearchStrLength: 2,
  })

  /** the source-type picker is hidden once a single-select holds a Source */
  protected readonly showTypeSelect = computed(() => {
    const value = this.value()
    return !value || Array.isArray(value)
  })

  protected readonly placeholder = computed(
    () => this.props.placeholder ?? `Search ${this.paramName()} Sources`
  )

  /** props.description is help text for an empty field; captured in ngOnInit */
  private initialDescription: Maybe<string>

  defaultOptions: CvcSourceSelectFieldOptions = {
    props: {
      entityName: { singular: 'Source', plural: 'Sources' },
      isMultiSelect: false,
      tooltip:
        'PubMed, ASCO, or ASH Abstract Source(s) that support items, statements or descriptions.',
      description: 'Select Source type, then enter its ID to search Sources',
      showAddEntity: true,
    },
  }

  constructor() {
    super()
    this.setSourceType(DEFAULT_SOURCE_TYPE)
    // Effects created here first run after the initial change detection, so
    // ngOnInit has already captured the description by the time this reads it.
    effect(() => {
      const description = this.value() ? undefined : this.initialDescription
      if (this.props.description === description) return
      this.props.description = description
      // the form-field wrapper renders the description, not this component
      this.cdr.markForCheck()
    })
  }

  override ngOnInit(): void {
    super.ngOnInit()
    this.initialDescription = this.props.description
  }

  /** drives both the typeahead parameter and the wording of every message */
  protected setSourceType(sourceType: SourceSource): void {
    this.param.set(sourceType)
    this.paramName.set(formatSourceTypeEnum(sourceType))
  }

  protected override showAddForm(
    searchStr: string,
    results: SourceSelectTypeaheadFieldsFragment[]
  ): boolean {
    if (this.props.showAddEntity === false) return false
    return super.showAddForm(searchStr, results)
  }
}
