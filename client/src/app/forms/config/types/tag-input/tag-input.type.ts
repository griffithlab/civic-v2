import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { TypeOption } from "@ngx-formly/core/lib/services/formly.config";

@Component({
  selector: 'cvc-tag-input-type',
  templateUrl: './tag-input.type.html',
  styleUrls: ['./tag-input.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagInputType extends FieldType {
  formControl!: FormControl;

  constructor() {
    super();
    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Enter value',
      },
      modelOptions: {
        updateOn: 'blur'
      }
    };
  }

  onEnter(e: any): void {
    const input = e.target as HTMLInputElement;
    this.formControl.setValue(input.value);
  }

}


export const TagInputTypeOption: TypeOption = {
  name: 'tag-input',
  component: TagInputType,
};
