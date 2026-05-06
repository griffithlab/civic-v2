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
import { CvcSelectEntityName } from '@app/forms/components/entity-select/entity-select.component'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { EntitySelectField } from '@app/forms/mixins/entity-select-field.mixin'
import { EntityType } from '@app/forms/states/base.state'
import {
  NccnGuidelineSelectTagGQL,
  NccnGuidelineSelectTagQuery,
  NccnGuidelineSelectTagQueryVariables,
  NccnGuidelineSelectTypeaheadFieldsFragment,
  NccnGuidelineSelectTypeaheadGQL,
  NccnGuidelineSelectTypeaheadQuery,
  NccnGuidelineSelectTypeaheadQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import {
    FieldTypeConfig,
    FormlyFieldConfig,
    FormlyFieldProps
} from '@ngx-formly/core'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import { BehaviorSubject, Subject } from 'rxjs'
import mixin from 'ts-mixin-extended'

export type CvcNccnGuidelineSelectFieldOptions = Partial<
  FieldTypeConfig<CvcNccnGuidelineSelectFieldProps>
>
// TODO: finish implementing updated props interface w/ labels, placeholders groups,
// and multiMax limits, multiDefault placeholder
export interface CvcNccnGuidelineSelectFieldProps extends FormlyFieldProps {
  // entity names, singular & plural
  entityName: CvcSelectEntityName
  // if true, field is a multi-select & its model value should be an array
  isMultiSelect: boolean
  // if true, field disabled when no entity type available
  requireType: boolean
  placeholder: string
  tooltip?: string
  description?: string
  extraType?: string
}

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcNccnGuidelineSelectFieldConfig
  extends FormlyFieldConfig<CvcNccnGuidelineSelectFieldProps> {
  type: 'nccn-guideline-select' | 'nccn-guideline-multi-select' | Type<CvcNccnGuidelineSelectField>
}

const NccnGuidelineSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcNccnGuidelineSelectFieldProps>,
    Maybe<number | number[]>
  >(),
  EntitySelectField<
    NccnGuidelineSelectTypeaheadQuery,
    NccnGuidelineSelectTypeaheadQueryVariables,
    NccnGuidelineSelectTypeaheadFieldsFragment,
    NccnGuidelineSelectTagQuery,
    NccnGuidelineSelectTagQueryVariables,
    Maybe<number | number[]>
  >()
)

@Component({
    selector: 'cvc-nccn-guideline-select',
    templateUrl: './nccn-guideline-select.type.html',
    styleUrls: ['./nccn-guideline-select.type.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcNccnGuidelineSelectField
  extends NccnGuidelineSelectMixin
  implements AfterViewInit
{
  // STATE SOURCE STREAMS
  onEntityType$?: Subject<Maybe<EntityType>>

  placeholder$: BehaviorSubject<Maybe<string>>

  // FieldTypeConfig defaults
  defaultOptions: CvcNccnGuidelineSelectFieldOptions = {
    props: {
      entityName: { singular: 'NCCN Guideline', plural: 'NCCN Guidelines' },
      isMultiSelect: false,
      requireType: false,
      tooltip: 'If applicable, please provide cancer (e.g., Breast Cancer) for the appropriate NCCN guideline.',
      // TODO: implement labels/placeholders w/ string replacement using typescript
      // template strings: https://www.codevscolor.com/typescript-template-string
      placeholder: 'Search NCCN Guidelines',
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  stateEntityName?: string

  constructor(
    private taq: NccnGuidelineSelectTypeaheadGQL,
    private tq: NccnGuidelineSelectTagGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super()
    this.placeholder$ = new BehaviorSubject<Maybe<string>>(undefined)
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
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
      selectComponent: this.selectComponent,
    })
  } // ngAfterViewInit()

  getTypeaheadVarsFn(str: string): NccnGuidelineSelectTypeaheadQueryVariables {
    return { name: str }
  }

  getTypeaheadResultsFn(r: ApolloQueryResult<NccnGuidelineSelectTypeaheadQuery>) {
    return r.data.nccnGuidelinesTypeahead
  }

  getTagQueryResultsFn(
    r: ApolloQueryResult<NccnGuidelineSelectTagQuery>
  ): Maybe<NccnGuidelineSelectTypeaheadFieldsFragment> {
    return r.data.nccnGuideline
  }

  getTagQueryVarsFn(id: number):NccnGuidelineSelectTagQueryVariables {
    return { id: id }
  }

  getSelectedItemOptionFn(
    nccnGuideline: NccnGuidelineSelectTypeaheadFieldsFragment
  ): NzSelectOptionInterface {
    return { value: nccnGuideline.id, label: nccnGuideline.name }
  }

  getSelectOptionsFn(
    results: NccnGuidelineSelectTypeaheadFieldsFragment[],
    tplRefs: QueryList<TemplateRef<any>>
  ): NzSelectOptionInterface[] {
    return results.map(
      (nccnGuideline: NccnGuidelineSelectTypeaheadFieldsFragment, index: number) => {
        return <NzSelectOptionInterface>{
          label: tplRefs.get(index) || nccnGuideline.name,
          value: nccnGuideline.id,
        }
      }
    )
  }
}
