import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import {TypeOption} from "@ngx-formly/core/lib/services/formly.config";

@Component({
  selector: 'comment-textarea-type',
  templateUrl: './comment-textarea.type.html',
  styleUrls: ['./comment-textarea.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentTextareaType extends FieldType<FormlyFieldConfig> {
  formControl!: FormControl;

  defaultOptions = {
    defaultValue: '',
    validation: {
      messages: {
        'minlength': (_err: any, field: FormlyFieldConfig): string => {
          return `Comments must be at least ${field.templateOptions?.minLength} characters in length.`;
        }
      }
    },
    templateOptions: {
      rows: 4
    },
  };
}

export const CommentTextareaTypeOption: TypeOption = {
  name: 'comment-textarea',
  component: CommentTextareaType,
  wrappers: ['form-field'],
}
