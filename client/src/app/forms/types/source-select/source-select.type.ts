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
import { formatSourceTypeEnum } from '@app/core/utilities/enum-formatters/format-source-type-enum'
import { CvcSelectEntityName } from '@app/forms/components/entity-select/entity-select.component'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { EntitySelectField } from '@app/forms/mixins/entity-select-field.mixin'
import {
  Maybe,
  SourceSelectTagGQL,
  SourceSelectTagQuery,
  SourceSelectTagQueryVariables,
  SourceSelectTypeaheadFieldsFragment,
  SourceSelectTypeaheadGQL,
  SourceSelectTypeaheadQuery,
  SourceSelectTypeaheadQueryVariables,
  SourceSource,
} from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs'
import mixin from 'ts-mixin-extended'

export interface CvcSourceSelectFieldProps extends FormlyFieldProps {
  entityName: CvcSelectEntityName
  isMultiSelect: boolean
  minSearchStrLength: number
  placeholders: {
    default: string
    contextualFn: (sourceName: string) => string
  }
  tooltip?: string
  description?: string
  extraType?: string
}

export interface CvcSourceSelectFieldConfig
  extends FormlyFieldConfig<CvcSourceSelectFieldProps> {
  type: 'source-select' | 'source-multi-select' | Type<CvcSourceSelectField>
}

export type CvcSourceSelectFieldOptions = Partial<
  FieldTypeConfig<CvcSourceSelectFieldProps>
>

export function getPlaceholder(
  strings: TemplateStringsArray,
  sourceType: SourceSource
) {
  return `${strings[0]}${sourceType}${strings[1]}`
}

const SourceSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcSourceSelectFieldProps>,
    Maybe<number | number[]>
  >(),
  EntitySelectField<
    SourceSelectTypeaheadQuery,
    SourceSelectTypeaheadQueryVariables,
    SourceSelectTypeaheadFieldsFragment,
    SourceSelectTagQuery,
    SourceSelectTagQueryVariables,
    SourceSource
  >()
)

@Component({
    selector: 'cvc-source-select',
    templateUrl: './source-select.type.html',
    styleUrls: ['./source-select.type.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcSourceSelectField
  extends SourceSelectMixin
  implements AfterViewInit
{
  // LOCAL SOURCE STREAMS
  // LOCAL INTERMEDIATE STREAMS
  sourceType$: BehaviorSubject<SourceSource>

  // LOCAL PRESENTATION STREAMS
  placeholder$: BehaviorSubject<string>
  sourceTypeName$: BehaviorSubject<string>
  onModel$ = new Observable<any>()

  showTypeSelect$: Observable<boolean>

  defaultSourceType: SourceSource = SourceSource.Pubmed
  initialDescription!: Maybe<string>

  // FieldTypeConfig defaults
  defaultOptions: CvcSourceSelectFieldOptions = {
    props: {
      entityName: { singular: 'Source', plural: 'Sources' },
      isMultiSelect: false,
      minSearchStrLength: 2,
      tooltip:
        'PubMed, ASCO, or ASH Abstract Source(s) that support items, statements or descriptions.',
      placeholders: {
        default: 'Search PubMed, ASCO, and ASH Sources',
        contextualFn: (sourceName: string) => {
          return `Search ${sourceName} Sources`
        },
      },
      description: 'Select Source type, then enter its ID to search Sources',
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(
    private taq: SourceSelectTypeaheadGQL,
    private tq: SourceSelectTagGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super()
    this.sourceType$ = new BehaviorSubject<SourceSource>(this.defaultSourceType)
    this.sourceTypeName$ = new BehaviorSubject<string>(
      formatSourceTypeEnum(this.defaultSourceType)
    )
    this.placeholder$ = new BehaviorSubject<string>(
      this.defaultOptions.props!.placeholders.contextualFn(
        formatSourceTypeEnum(this.defaultSourceType)
      )
    )
    this.showTypeSelect$ = new Observable<boolean>()
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    this.configureEntitySelectField({
      // mixin fn
      typeaheadQuery: this.taq,
      typeaheadParam$: this.sourceType$,
      typeaheadParamName$: this.sourceTypeName$ || undefined,
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
      minSearchStrLength: this.field.props.minSearchStrLength,
    })

    this.initialDescription = this.props.description

    this.showTypeSelect$ = this.onValueChange$.pipe(
      map((value) => {
        if (!value || (value && Array.isArray(value))) return true
        else return false
      })
    )

    // update sourceTypeName, placeholder, reset field when new sourceType selected
    this.sourceType$
      .pipe(untilDestroyed(this))
      .subscribe((src: SourceSource) => {
        const srcName = formatSourceTypeEnum(src)
        this.sourceTypeName$.next(srcName)
        this.placeholder$.next(this.props.placeholders.contextualFn(srcName))
        //FIXME
        //this.resetField()
      })

    // update model provided to quick-add form when either sourceType or citationId changes
    this.onModel$ = combineLatest([this.sourceType$, this.onSearch$]).pipe(
      map(([sourceType, citationId]: [SourceSource, Maybe<string>]) => {
        return { citationId: citationId, sourceType: sourceType }
      })
    )
    // hide/show prompt when field is populated/undefined
    this.onValueChange$.pipe(untilDestroyed(this)).subscribe((sourceId) => {
      if (sourceId) {
        this.props.description = undefined
      } else {
        this.props.description = this.initialDescription
      }
    })
  }

  getTypeaheadVarsFn(
    str: string,
    param: SourceSource = SourceSource.Pubmed
  ): SourceSelectTypeaheadQueryVariables {
    return { partialCitationId: str, sourceType: param }
  }

  getTypeaheadResultsFn(r: ApolloQueryResult<SourceSelectTypeaheadQuery>) {
    return r.data.sourceTypeahead
  }

  getTagQueryVarsFn(id: number): SourceSelectTagQueryVariables {
    return { id: id }
  }

  getTagQueryResultsFn(
    r: ApolloQueryResult<SourceSelectTagQuery>
  ): Maybe<SourceSelectTypeaheadFieldsFragment> {
    return r.data.source
  }

  getSelectedItemOptionFn(
    source: SourceSelectTypeaheadFieldsFragment
  ): NzSelectOptionInterface {
    return { value: source.id, label: source.name }
  }

  getSelectOptionsFn(
    results: SourceSelectTypeaheadFieldsFragment[],
    tplRefs: QueryList<TemplateRef<any>>
  ): NzSelectOptionInterface[] {
    return results.map(
      (source: SourceSelectTypeaheadFieldsFragment, index: number) => {
        return <NzSelectOptionInterface>{
          label: tplRefs.get(index) || source.name,
          value: source.id,
        }
      }
    )
  }
}
