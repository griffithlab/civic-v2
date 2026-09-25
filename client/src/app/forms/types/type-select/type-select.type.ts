import { ChangeDetectionStrategy, Component, Type } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CvcAttributeTagComponent } from '@app/forms/components/attribute-tag/attribute-tag.component'
import {
  CvcEnumSelectFieldBase,
  CvcEnumSelectFieldProps,
  CvcSelectEntityName,
} from '@app/forms/select'
import { EntityType } from '@app/forms/states/base.state'
import { Maybe } from '@app/generated/civic.apollo.types'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { NzSelectModule } from 'ng-zorro-antd/select'

const optionText: Record<string, string> = {
  DIAGNOSTIC:
    "Evidence pertains to a variant's impact on patient diagnosis (cancer subtype).",
  PREDICTIVE: "Evidence pertains to a variant's effect on therapeutic response.",
  PROGNOSTIC:
    "Evidence pertains to a variant's impact on disease progression, severity, or patient survival.",
  PREDISPOSING:
    "Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations).",
  ONCOGENIC:
    "Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer.",
  FUNCTIONAL:
    'Evidence pertains to a variant that alters biological function from the reference state.',
}

/** replaced with the form state's entity name once the field is mounted */
const ENTITY_NAME = 'ENTITY_NAME'

export type CvcEntityTypeSelectFieldOptions = Partial<
  FieldTypeConfig<CvcEntityTypeSelectFieldProps>
>

export interface CvcEntityTypeSelectFieldProps extends CvcEnumSelectFieldProps {
  entityName: CvcSelectEntityName
}

export interface CvcEntityTypeSelectFieldConfig
  extends FormlyFieldConfig<CvcEntityTypeSelectFieldProps> {
  type: 'type-select' | Type<CvcEntityTypeSelectField>
}

/**
 * The field the other gated fields watch: choosing an entity type is what
 * decides which significances, directions, diseases and therapies the rest of
 * the form will offer.
 */
@Component({
  selector: 'cvc-type-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    NzSelectModule,
    CvcAttributeTagComponent,
  ],
  templateUrl: './type-select.type.html',
})
export class CvcEntityTypeSelectField extends CvcEnumSelectFieldBase<
  EntityType,
  CvcEntityTypeSelectFieldProps
> {
  defaultOptions: CvcEntityTypeSelectFieldOptions = {
    props: {
      label: `${ENTITY_NAME} Type`,
      entityName: { singular: 'Entity', plural: 'Entities' },
      placeholder: `Select an ${ENTITY_NAME} Type`,
      isMultiSelect: false,
    },
  }

  override ngOnInit(): void {
    super.ngOnInit()
    this.connectValueDescription()

    const state = this.state
    if (!state) {
      console.error(
        `${this.field.id} requires a form state to configure itself, none was found.`
      )
      return
    }

    this.props.placeholder = this.props.placeholder?.replace(
      ENTITY_NAME,
      state.entityName
    )
    this.props.label = this.props.label?.replace(ENTITY_NAME, state.entityName)
    this.props.tooltip = `Type of clinical outcome associated with the ${state.entityName} statement.`

    if (!state.enums.entityType) {
      console.error(
        `${this.field.id} could not find state's enums.entityType to populate its select options.`
      )
      return
    }
    this.connectStateEnum(state.enums.entityType)
  }

  protected override descriptionFor(value: EntityType): Maybe<string> {
    return optionText[value]
  }
}
