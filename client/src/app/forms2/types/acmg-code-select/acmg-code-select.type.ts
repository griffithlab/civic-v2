import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    QueryList,
    TemplateRef,
    Type,
    ViewChildren
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum'
import { CvcSelectEntityName } from '@app/forms2/components/entity-select/entity-select.component'
import { BaseFieldType } from '@app/forms2/mixins/base/base-field'
import { EntitySelectField } from '@app/forms2/mixins/entity-select-field.mixin'
import { StringSelectField } from '@app/forms2/mixins/string-select-field.mixin'
import { EntityType } from '@app/forms2/states/base.state'
import {
  AcmgCodeSelectTagGQL,
  AcmgCodeSelectTagQuery,
    AcmgCodeSelectTagQueryVariables,
    AcmgCodeSelectTypeaheadFieldsFragment,
    AcmgCodeSelectTypeaheadGQL,
    AcmgCodeSelectTypeaheadQuery,
    AcmgCodeSelectTypeaheadQueryVariables,
    Maybe,
} from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
    FieldTypeConfig,
    FormlyFieldConfig,
    FormlyFieldProps
} from '@ngx-formly/core'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import { BehaviorSubject, combineLatest, Subject } from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import mixin from 'ts-mixin-extended'

export type CvcAcmgCodeSelectFieldOptions = Partial<
  FieldTypeConfig<CvcAcmgCodeSelectFieldProps>
>
// TODO: finish implementing updated props interface w/ labels, placeholders groups,
// and multiMax limits, multiDefault placeholder
export interface CvcAcmgCodeSelectFieldProps extends FormlyFieldProps {
  // entity names, singular & plural
  entityName: CvcSelectEntityName
  // if true, field is a multi-select & its model value should be an array
  isMultiSelect: boolean
  // if true, field disabled when no entity type available
  requireType: boolean
  placeholders: {
    // default placeholder
    default: string
    // default placeholder for multi-selects
    multiDefault: string
    // placeholder if evidence/assertion type required & field disabled
    requireTypePrompt: string
  },
  tooltip?: string
  description?: string
  extraType?: string
}

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcAcmgCodeSelectFieldConfig
  extends FormlyFieldConfig<CvcAcmgCodeSelectFieldProps> {
  type: 'acmg-code-select' | 'acmg-code-multi-select' | Type<CvcAcmgCodeSelectField>
}

const AcmgCodeSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcAcmgCodeSelectFieldProps>,
    Maybe<number | number[]>
  >(),
  EntitySelectField<
    AcmgCodeSelectTypeaheadQuery,
    AcmgCodeSelectTypeaheadQueryVariables,
    AcmgCodeSelectTypeaheadFieldsFragment,
    AcmgCodeSelectTagQuery,
    AcmgCodeSelectTagQueryVariables,
    Maybe<number | number[]>
  >()
)

@Component({
  selector: 'cvc-acmg-code-select',
  templateUrl: './acmg-code-select.type.html',
  styleUrls: ['./acmg-code-select.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcAcmgCodeSelectField
  extends AcmgCodeSelectMixin
  implements AfterViewInit
{
  // STATE SOURCE STREAMS
  onEntityType$?: Subject<Maybe<EntityType>>
  onRequiresAcmgCode$?: BehaviorSubject<boolean>

  placeholder$: BehaviorSubject<string>

  // FieldTypeConfig defaults
  defaultOptions: CvcAcmgCodeSelectFieldOptions = {
    props: {
      entityName: { singular: 'ACMG/AMP Code', plural: 'ACMG/AMP Codes' },
      isMultiSelect: false,
      requireType: true,
      tooltip: 'TODO',
      // TODO: implement labels/placeholders w/ string replacement using typescript
      // template strings: https://www.codevscolor.com/typescript-template-string
      placeholders: {
        default: 'Search ACMG/AMP Code(s)',
        multiDefault: 'Select ACMG/AMP Code(s)',
        requireTypePrompt: 'Select an ENTITY_NAME Type to search ACMG/AMP Code(s)',
      },
      description: 'TODO',
      extraType: 'description'
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  stateEntityName?: string

  constructor(
    private taq: AcmgCodeSelectTypeaheadGQL,
    private tq: AcmgCodeSelectTagGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super()
    this.placeholder$ = new BehaviorSubject<string>(
      this.defaultOptions.props!.placeholders!.default
    )
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    this.configureStateConnections() // local fn
    this.configureEntitySelectField({
      // mixin fn
      typeaheadQuery: this.taq,
      typeaheadParam$: undefined,
      tagQuery: this.tq,
      getTypeaheadVarsFn: this.getTypeaheadVarsFn,
      getTypeaheadResultsFn: this.getTypeaheadResultsFn,
      getTagQueryVarsFn: this.getTagQueryVarsFn,
      getTagQueryResultsFn: this.getTagQueryResultsFn,
      getSelectedItemOptionFn: this.getSelectedItemOptionFn,
      getSelectOptionsFn: this.getSelectOptionsFn,
      changeDetectorRef: this.changeDetectorRef,
    })
    this.configurePlaceholders()
  } // ngAfterViewInit()

  configureStateConnections(): void {
    if (!this.state) return
  }

  configurePlaceholders(): void {
  }

  getTypeaheadVarsFn(str: string): AcmgCodeSelectTypeaheadQueryVariables {
    return { code: str }
  }

  getTypeaheadResultsFn(r: ApolloQueryResult<AcmgCodeSelectTypeaheadQuery>) {
    return r.data.acmgCodesTypeahead
  }

  getTagQueryResultsFn(
    r: ApolloQueryResult<AcmgCodeSelectTagQuery>
  ): Maybe<AcmgCodeSelectTypeaheadFieldsFragment> {
    return r.data.acmgCode
  }

  getTagQueryVarsFn(id: number): AcmgCodeSelectTagQueryVariables {
    return { id: id }
  }

  getSelectedItemOptionFn(
    acmgCode: AcmgCodeSelectTypeaheadFieldsFragment
  ): NzSelectOptionInterface {
    return { value: acmgCode.id, label: acmgCode.code }
  }

  getSelectOptionsFn(
    results: AcmgCodeSelectTypeaheadFieldsFragment[],
    tplRefs: QueryList<TemplateRef<any>>
  ): NzSelectOptionInterface[] {
    return results.map(
      (acmgCode: AcmgCodeSelectTypeaheadFieldsFragment, index: number) => {
        console.log(acmgCode)
        return <NzSelectOptionInterface>{
          label: tplRefs.get(index) || acmgCode.code,
          value: acmgCode.id,
        }
      }
    )
  }
}
