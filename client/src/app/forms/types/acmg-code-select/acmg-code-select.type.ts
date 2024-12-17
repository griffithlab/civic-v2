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
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum'
import { CvcSelectEntityName } from '@app/forms/components/entity-select/entity-select.component'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { EntitySelectField } from '@app/forms/mixins/entity-select-field.mixin'
import { EntityType } from '@app/forms/states/base.state'
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
  FormlyFieldProps,
} from '@ngx-formly/core'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import {
  BehaviorSubject,
  combineLatest,
  distinctUntilChanged,
  Subject,
} from 'rxjs'
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
  placeholder: string
  requireTypePromptFn: (entityName: string, isMultiSelect?: boolean) => string
  tooltip?: string
  description?: string
  extraType?: string
}

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcAcmgCodeSelectFieldConfig
  extends FormlyFieldConfig<CvcAcmgCodeSelectFieldProps> {
  type:
    | 'acmg-code-select'
    | 'acmg-code-multi-select'
    | Type<CvcAcmgCodeSelectField>
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
  standalone: false,
})
export class CvcAcmgCodeSelectField
  extends AcmgCodeSelectMixin
  implements AfterViewInit
{
  // STATE SOURCE STREAMS
  onEntityType$?: Subject<Maybe<EntityType>>
  onRequiresAcmgCode$?: BehaviorSubject<boolean>

  placeholder$: BehaviorSubject<Maybe<string>>

  // FieldTypeConfig defaults
  defaultOptions: CvcAcmgCodeSelectFieldOptions = {
    props: {
      entityName: { singular: 'ACMG/AMP Code', plural: 'ACMG/AMP Codes' },
      isMultiSelect: false,
      requireType: true,
      tooltip:
        'If applicable, please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP.',
      // TODO: implement labels/placeholders w/ string replacement using typescript
      // template strings: https://www.codevscolor.com/typescript-template-string
      placeholder: 'Search ACMG/AMP Codes',
      requireTypePromptFn: (entityName: string, isMultiSelect?: boolean) =>
        `Select an ${entityName} Type to search associated ACMG Code(s)`,
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
    this.placeholder$ = new BehaviorSubject<Maybe<string>>(undefined)
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
      selectComponent: this.selectComponent,
    })
    this.configurePlaceholders()
  } // ngAfterViewInit()

  configureStateConnections(): void {
    if (!this.state) return
    this.stateEntityName = this.state.entityName
    // connect to onRequiresAcmgCode$
    if (!this.state.requires.requiresAcmgCodes$) {
      console.warn(
        `${this.field.id} field's form provides a state, but could not find requiresAcmgCodes$ subject to attach.`
      )
    } else {
      this.onRequiresAcmgCode$ = this.state.requires.requiresAcmgCodes$
    }

    // connect onEntityType$
    if (this.props.requireType) {
      const etName = `${this.stateEntityName.toLowerCase()}Type$`
      if (!this.state.fields[etName]) {
        console.error(
          `${this.field.id} requireType is true, however form state does not provide Subject ${etName}.`
        )
      } else {
        this.onEntityType$ = this.state.fields[etName]
        // this.onEntityType$.pipe(tag(`${this.field.id} onEntityType$`)).subscribe()
      }
    }
  }

  configurePlaceholders(): void {
    this.placeholder$.next(this.props.placeholders)
    if (!this.onRequiresAcmgCode$ || !this.onEntityType$) return
    // update field placeholders & required status on state input events
    combineLatest([this.onRequiresAcmgCode$, this.onEntityType$])
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe(
        ([requiresAcmgCode, entityType]: [boolean, Maybe<EntityType>]) => {
          // ACMG Codes are not associated with this entity type
          if (!requiresAcmgCode && entityType) {
            this.props.required = false
            this.props.disabled = true
            // no ACMG Code required, entity type specified
            this.props.description = `${formatEvidenceEnum(entityType)} ${
              this.state!.entityName
            } does not include associated ACMG/AMP Code(s)`
            this.props.extraType = 'prompt'
            this.resetField()
            this.cdr.markForCheck()
          }
          // if type required, toggle field required property off and show a 'Select Type..' prompt
          else if (this.props.requireType && !entityType) {
            this.props.required = false
            this.props.disabled = true
            // no ACMG Code required, entity type not specified
            this.props.description = this.props.requireTypePromptFn(
              this.state!.entityName,
              this.props.isMultiSelect
            )
            this.props.extraType = 'prompt'
          }
          // state indicates ACMG Code is required, set required, unset disabled, and show the placeholder (state will only return true from requiresAcmgCode$ if entityType provided)
          else if (requiresAcmgCode) {
            this.props.required = true
            this.props.disabled = false
            ;(this.props.description =
              'Please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Richards et. al. 2015</a>. Review all codes and select each one that applies. If a code is not applied, it is inferred to not be met.'),
              (this.props.extraType = 'description')
          }
          // field currently has a value, but state indicates no ACMG Code is required, or no type is provided && type is required, so reset field
          else if (
            (!requiresAcmgCode && this.formControl.value) ||
            (this.props.requireType && !entityType && this.formControl.value)
          ) {
            this.resetField()
          }
        }
      )
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
