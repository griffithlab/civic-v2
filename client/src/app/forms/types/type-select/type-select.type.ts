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
import { CvcSelectEntityName } from '@app/forms/components/entity-select/entity-select.component'
import { CvcInputEnum } from '@app/forms/forms.types'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { EnumSelectField } from '@app/forms/mixins/enum-select-field.mixin'
import { EntityType } from '@app/forms/states/base.state'
import { CvcFormFieldExtraType } from '@app/forms/wrappers/form-field/form-field.wrapper'
import { Maybe } from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { BehaviorSubject, filter, map, take } from 'rxjs'
import mixin from 'ts-mixin-extended'

const optionText: { [option: string]: string } = {
  DIAGNOSTIC:
    "Evidence pertains to a variant's impact on patient diagnosis (cancer subtype).",
  PREDICTIVE:
    "Evidence pertains to a variant's effect on therapeutic response.",
  PROGNOSTIC:
    "Evidence pertains to a variant's impact on disease progression, severity, or patient survival.",
  PREDISPOSING:
    "Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations).",
  ONCOGENIC:
    "Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer.",
  FUNCTIONAL:
    'Evidence pertains to a variant that alters biological function from the reference state.',
}

interface CvcEntityTypeSelectFieldProps extends FormlyFieldProps {
  label: string
  placeholder: string
  entityName: CvcSelectEntityName
  isMultiSelect: boolean
  description?: string
  tooltip?: string
  extraType?: CvcFormFieldExtraType
}

export interface CvcEntityTypeSelectFieldConfig
  extends FormlyFieldConfig<CvcEntityTypeSelectFieldProps> {
  type: 'type-select' | 'type-multi-select' | Type<CvcEntityTypeSelectField>
}

const EntityTypeSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcEntityTypeSelectFieldProps>,
    Maybe<EntityType>
  >(),
  EnumSelectField<EntityType, CvcInputEnum>()
)

@Component({
  selector: 'cvc-type-select',
  templateUrl: './type-select.type.html',
  styleUrls: ['./type-select.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcEntityTypeSelectField
  extends EntityTypeSelectMixin
  implements AfterViewInit
{
  // STATE SOURCE STREAMS
  typeEnums$!: BehaviorSubject<CvcInputEnum[]>

  defaultOptions: Partial<FieldTypeConfig<CvcEntityTypeSelectFieldProps>> = {
    props: {
      label: 'ENTITY_NAME Type',
      entityName: { singular: 'Entity', plural: 'Entities' },
      placeholder: 'Select an ENTITY_NAME Type',
      isMultiSelect: false,
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(private cdr: ChangeDetectorRef) {
    super()
    this.typeEnums$ = new BehaviorSubject<CvcInputEnum[]>([])
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    if (this.state && this.state.formReady$) {
      this.state.formReady$
        .pipe(
          filter((r) => r), // only pass true values
          take(1), // unsubscribe after 1st emit
          untilDestroyed(this) // or form destroyed
        )
        .subscribe((_) => {
          this.configureField()
        })
    } else {
      this.configureField()
    }
  }

  configureField(): void {
    // update field description on value changes
    this.onValueChange$
      .pipe(untilDestroyed(this))
      .subscribe((v: Maybe<EntityType>) => {
        if (!v) {
          this.props.description = undefined
          this.props.extraType = undefined
        } else {
          this.props.description = optionText[v]
          this.props.extraType = 'description'
          this.field.formControl.markAsTouched()
        }
      })
    if (!this.state) {
      console.error(
        `${this.field.id} requires a form state to configure itself, none was found.`
      )
      return
    }

    // set placeholder & label w/ proper entity name

    this.props.placeholder = this.props.placeholder.replace(
      'ENTITY_NAME',
      this.state.entityName
    )

    this.props.label = this.props.label.replace(
      'ENTITY_NAME',
      this.state.entityName
    )
    this.props.tooltip = `Type of clinical outcome associated with the ${this.state.entityName} statement.`

    // subscribe to state's type options
    if (!this.state.enums.entityType$) {
      console.error(
        `${this.field.id} could not find state's enums.inputEnum$ to populate its select options.`
      )
      return
    }

    // update type enums when state entityType$ emits
    this.state.enums.entityType$
      .pipe(untilDestroyed(this))
      .subscribe((enums: CvcInputEnum[]) => {
        this.typeEnums$.next(enums)
      })

    // check if option templates exist
    if (!this.optionTemplates) {
      console.error(
        `${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`
      )
    }
    this.optionTemplate$ = this.optionTemplates?.changes.pipe(
      // tag(`${this.field.id} optionTemplate$`),
      // return QueryLists's array of TemplateRefs
      map((ql: QueryList<TemplateRef<any>>) => {
        return ql.map((q) => q)
      })
      // tag('type-select optionTemplate$')
    )

    this.configureEnumSelect()
  }

  configureEnumSelect() {
    this.configureEnumSelectField({
      optionEnum$: this.typeEnums$,
      optionTemplate$: this.optionTemplate$,
      changeDetectorRef: this.cdr,
    })
  }
}
