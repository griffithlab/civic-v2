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
  ClingenCodeSelectTagGQL,
  ClingenCodeSelectTagQuery,
  ClingenCodeSelectTagQueryVariables,
  ClingenCodeSelectTypeaheadFieldsFragment,
  ClingenCodeSelectTypeaheadGQL,
  ClingenCodeSelectTypeaheadQuery,
  ClingenCodeSelectTypeaheadQueryVariables,
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

export type CvcClingenCodeSelectFieldOptions = Partial<
  FieldTypeConfig<CvcClingenCodeSelectFieldProps>
>
// TODO: finish implementing updated props interface w/ labels, placeholders groups,
// and multiMax limits, multiDefault placeholder
export interface CvcClingenCodeSelectFieldProps extends FormlyFieldProps {
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
export interface CvcClingenCodeSelectFieldConfig
  extends FormlyFieldConfig<CvcClingenCodeSelectFieldProps> {
  type:
    | 'clingen-code-select'
    | 'clingen-code-multi-select'
    | Type<CvcClingenCodeSelectField>
}

const ClingenCodeSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcClingenCodeSelectFieldProps>,
    Maybe<number | number[]>
  >(),
  EntitySelectField<
    ClingenCodeSelectTypeaheadQuery,
    ClingenCodeSelectTypeaheadQueryVariables,
    ClingenCodeSelectTypeaheadFieldsFragment,
    ClingenCodeSelectTagQuery,
    ClingenCodeSelectTagQueryVariables,
    Maybe<number | number[]>
  >()
)

@Component({
    selector: 'cvc-clingen-code-select',
    templateUrl: './clingen-code-select.type.html',
    styleUrls: ['./clingen-code-select.type.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcClingenCodeSelectField
  extends ClingenCodeSelectMixin
  implements AfterViewInit
{
  // STATE SOURCE STREAMS
  onEntityType$?: Subject<Maybe<EntityType>>
  onRequiresClingenCode$?: BehaviorSubject<boolean>

  placeholder$: BehaviorSubject<Maybe<string>>

  exclusiveCodes = new Set<number>()
  previousDescription?: string
  previousDescriptionType?: string
  exclusiveSelected = false

  // FieldTypeConfig defaults
  defaultOptions: CvcClingenCodeSelectFieldOptions = {
    props: {
      entityName: {
        singular: 'ClinGen/CGC/VICC Code',
        plural: 'ClinGen/CGC/VICC Codes',
      },
      isMultiSelect: false,
      requireType: true,
      tooltip:
        'If applicable, please provide evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity).',
      // TODO: implement labels/placeholders w/ string replacement using typescript
      // template strings: https://www.codevscolor.com/typescript-template-string
      placeholder: 'Search ClinGen/CGC/VICC Codes',
      requireTypePromptFn: (entityName: string, isMultiSelect?: boolean) =>
        `Select an ${entityName} Type to search associated ClinGen Code(s)`,
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  stateEntityName?: string

  constructor(
    private taq: ClingenCodeSelectTypeaheadGQL,
    private tq: ClingenCodeSelectTagGQL,
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

    this.onValueChange$.pipe(untilDestroyed(this)).subscribe((codes) => {
      if (codes && Array.isArray(codes) && codes.length > 1) {
        const selectedExclusiveCode = codes.find((c) =>
          this.exclusiveCodes.has(c)
        )
        if (selectedExclusiveCode) {
          this.previousDescription = this.props.description
          this.previousDescriptionType = this.props.extraType
          this.props.description =
            'You have selected N/A which precludes selecting any other codes. Please remove it if you wish to select additional codes.'
          this.exclusiveSelected = true
          this.formControl.setValue([selectedExclusiveCode])
        } else {
          this.exclusiveSelected = false
        }
      }
      if (this.previousDescription && !this.exclusiveSelected) {
        this.props.description = this.previousDescription
        this.props.extraType = this.previousDescriptionType
      }
      this.cdr.detectChanges()
    })
  } // ngAfterViewInit()

  configureStateConnections(): void {
    if (!this.state) return
    this.stateEntityName = this.state.entityName
    // connect to onRequiresClingenCode$
    if (!this.state.requires.requiresClingenCodes$) {
      console.warn(
        `${this.field.id} field's form provides a state, but could not find requiresClingenCodes$ subject to attach.`
      )
    } else {
      this.onRequiresClingenCode$ = this.state.requires.requiresClingenCodes$
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
    if (!this.onRequiresClingenCode$ || !this.onEntityType$) return
    // update field placeholders & required status on state input events
    combineLatest([this.onRequiresClingenCode$, this.onEntityType$])
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe(
        ([requiresClingenCode, entityType]: [boolean, Maybe<EntityType>]) => {
          // ClinGen Codes are not associated with this entity type
          if (!requiresClingenCode && entityType) {
            this.props.required = false
            this.props.disabled = true
            // no ClinGen Code required, entity type specified
            this.props.description = `${formatEvidenceEnum(entityType)} ${
              this.state!.entityName
            } does not include associated ClinGen/CGC/VICC Code(s)`
            this.props.extraType = 'prompt'
            this.resetField()
            this.cdr.markForCheck()
          }
          // if type required, toggle field required property off and show a 'Select Type..' prompt
          else if (this.props.requireType && !entityType) {
            this.props.required = false
            this.props.disabled = true
            // no ClinGen Code required, entity type not specified
            this.props.description = this.props.requireTypePromptFn(
              this.state!.entityName,
              this.props.isMultiSelect
            )
            this.props.extraType = 'prompt'
          }
          // state indicates ClinGen Code is required, set required, unset disabled, and show the placeholder (state will only return true from requiresClinGenCode$ if entityType provided)
          else if (requiresClingenCode) {
            this.props.required = true
            this.props.disabled = false
            this.props.description =
              'Please provide the evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity) in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Horak et. al. 2022.</a>. Review all codes and select each one that applies. If a code is not applied, it is inferred to not be met.'
            this.props.extraType = 'description'
          }
          // field currently has a value, but state indicates no ClinGen Code is required, or no type is provided && type is required, so reset field
          else if (
            (!requiresClingenCode && this.formControl.value) ||
            (this.props.requireType && !entityType && this.formControl.value)
          ) {
            this.resetField()
          }
        }
      )
  }

  getTypeaheadVarsFn(str: string): ClingenCodeSelectTypeaheadQueryVariables {
    return { code: str }
  }

  getTypeaheadResultsFn(r: ApolloQueryResult<ClingenCodeSelectTypeaheadQuery>) {
    r.data.clingenCodesTypeahead.forEach((c) => {
      if (c.exclusive) {
        this.exclusiveCodes.add(c.id)
      }
    })
    return r.data.clingenCodesTypeahead
  }

  getTagQueryResultsFn(
    r: ApolloQueryResult<ClingenCodeSelectTagQuery>
  ): Maybe<ClingenCodeSelectTypeaheadFieldsFragment> {
    return r.data.clingenCode
  }

  getTagQueryVarsFn(id: number): ClingenCodeSelectTagQueryVariables {
    return { id: id }
  }

  getSelectedItemOptionFn(
    clingenCode: ClingenCodeSelectTypeaheadFieldsFragment
  ): NzSelectOptionInterface {
    return { value: clingenCode.id, label: clingenCode.code }
  }

  getSelectOptionsFn(
    results: ClingenCodeSelectTypeaheadFieldsFragment[],
    tplRefs: QueryList<TemplateRef<any>>
  ): NzSelectOptionInterface[] {
    return results.map(
      (
        clingenCode: ClingenCodeSelectTypeaheadFieldsFragment,
        index: number
      ) => {
        return <NzSelectOptionInterface>{
          label: tplRefs.get(index) || clingenCode.code,
          value: clingenCode.id,
        }
      }
    )
  }
}
