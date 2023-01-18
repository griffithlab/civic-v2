import { Component, ChangeDetectionStrategy, Type, AfterViewInit } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field';

export type CvcCheckboxFieldOptions = Partial<
  FieldTypeConfig<CvcCheckboxFieldProps>
>
export interface CvcCheckboxFieldProps extends FormlyFieldProps {
  indeterminate?: boolean;
}

export interface FormlyCheckboxFieldConfig extends FormlyFieldConfig<CvcCheckboxFieldProps> {
  type: 'checkbox' | Type<CvcCheckboxField>;
}

@Component({
  selector: 'cvc-checkbox',
  templateUrl: './checkbox.type.html',
  styleUrls: ['./checkbox.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcCheckboxField extends FieldType<FieldTypeConfig<CvcCheckboxFieldProps>> implements AfterViewInit {
  override defaultOptions = {
    props: {
      indeterminate: true,
      hideLabel: true,
    },
  };

  ngAfterViewInit(): void {
    console.log(this.props)
  }
}
