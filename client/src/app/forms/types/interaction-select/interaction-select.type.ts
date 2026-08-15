import { ChangeDetectionStrategy, Component, Type, effect } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CvcAttributeTagComponent } from '@app/forms/components/attribute-tag/attribute-tag.component'
import {
  CvcEnumSelectFieldBase,
  CvcEnumSelectFieldProps,
} from '@app/forms/select'
import { Maybe, TherapyInteraction } from '@app/generated/civic.apollo.types'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { NzSelectModule } from 'ng-zorro-antd/select'

const optionText: Record<string, string> = {
  COMBINATION:
    'Therapies specified were used as part of a combination therapy approach',
  SEQUENTIAL:
    'Therapies specified were used at separate timepoints in the same treatment plan',
  SUBSTITUTES:
    'Therapies specified are often considered to be of the same family, or behave similarly in a treatment setting',
}

const NO_THERAPIES =
  'Interaction type is not applicable when no therapies are selected.'
const ONE_THERAPY =
  'A single associated therapy does not have an Interaction type'
const PROMPT = 'Select an Interaction Type'

export type CvcInteractionSelectFieldOptions = Partial<
  FieldTypeConfig<CvcInteractionSelectFieldProps>
>

export interface CvcInteractionSelectFieldProps
  extends CvcEnumSelectFieldProps {}

export interface CvcInteractionSelectFieldConfig
  extends FormlyFieldConfig<CvcInteractionSelectFieldProps> {
  type: 'interaction-select' | Type<CvcInteractionSelectField>
}

/**
 * An interaction only means something between two or more therapies, so this
 * field follows the therapy multi-select's length rather than the form's
 * entity type.
 */
@Component({
  selector: 'cvc-interaction-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    NzSelectModule,
    CvcAttributeTagComponent,
  ],
  templateUrl: './interaction-select.type.html',
})
export class CvcInteractionSelectField extends CvcEnumSelectFieldBase<
  TherapyInteraction,
  CvcInteractionSelectFieldProps
> {
  defaultOptions: CvcInteractionSelectFieldOptions = {
    props: {
      label: 'Therapy Interaction',
      isMultiSelect: false,
      placeholder: 'Select Therapy Interaction',
      tooltip: 'Characterizes the interaction of a multi-therapy treatment',
    },
  }

  override ngOnInit(): void {
    super.ngOnInit()
    if (!this.state) {
      console.error(
        `${this.field.id} requires a form state to populate its options, none was found.`
      )
      return
    }

    if (!this.state.enums.interaction) {
      console.error(
        `${this.field.id} could not find form state's interaction to populate select.`
      )
    } else {
      this.connectStateEnum(this.state.enums.interaction)
    }

    const therapies = this.state.fields.therapyIds
    if (!therapies) {
      console.warn(
        `${this.field.id} could not find state's fields.therapyIds to handle its required & disabled states.`
      )
      this.connectValueDescription()
      return
    }

    const therapyIds = therapies
    effect(
      () => this.applyGate(therapyIds()?.length ?? 0, this.selected()),
      { injector: this.injector }
    )
  }

  protected override descriptionFor(value: TherapyInteraction): Maybe<string> {
    return optionText[value]
  }

  private applyGate(therapyCount: number, value?: TherapyInteraction): void {
    if (therapyCount < 2) {
      this.props.disabled = true
      this.props.required = false
      this.props.description = therapyCount === 0 ? NO_THERAPIES : ONE_THERAPY
      this.props.extraType = 'prompt'
      if (this.formControl.value !== undefined) this.resetField()
    } else {
      this.props.disabled = false
      this.props.required = true
      this.props.description = value ? optionText[value] : PROMPT
      this.props.extraType = value ? 'description' : 'prompt'
    }
    this.markDirty()
  }
}
