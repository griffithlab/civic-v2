import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { TypeOption } from "@ngx-formly/core/lib/models";

@Component({
  selector: 'cvc-tag-input-type',
  templateUrl: './tag-input.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagInputType extends FieldType<any> {
  

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
