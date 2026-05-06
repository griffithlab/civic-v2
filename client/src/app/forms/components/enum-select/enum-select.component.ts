import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core'
import { UntypedFormControl } from '@angular/forms'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'

// mirror internal formly type
export type FormlyAttributeEvent = (
  field: FormlyFieldConfig,
  event?: any
) => void

@Component({
  selector: 'cvc-enum-select',
  templateUrl: './enum-select.component.html',
  styleUrls: ['./enum-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcEnumSelectComponent {
  @Input() cvcFormControl!: UntypedFormControl
  @Input() cvcFormlyAttributes!: FormlyFieldConfig
  @Input() cvcSelectMode: 'multiple' | 'tags' | 'default' = 'default'
  @Input() cvcPlaceholder?: string = 'Select an option'
  @Input() cvcOptions?: NzSelectOptionInterface[] = []
  @Input() cvcShowError: boolean = false
  @Input() cvcDisabled?: boolean = false
  @Input() cvcAllowClear: boolean = true
  @Input() cvcModelChange?: FormlyAttributeEvent
  // custom template for field value render
  @Input() cvcCustomTemplate?: TemplateRef<any> | null = null
  @Output() readonly cvcOnFocus = new EventEmitter<void>()

  constructor() {}
}
