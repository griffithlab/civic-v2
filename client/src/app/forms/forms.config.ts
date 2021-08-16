import { FormlyFieldConfig } from '@ngx-formly/core';
import { ValidationMessageOption } from '@ngx-formly/core/lib/services/formly.config';
import { CommentTextareaType } from './comments/types/comment-textarea/comment-textarea.type';
import { MultiFieldType } from './shared/types/multi-field/multi-field.type';

export const defaultValidationMessages: ValidationMessageOption[] = [
  {
    name: 'required',
    message: 'This field is required.'
  },
  {
    name: 'minlength',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field has a minimum length of ${field.templateOptions?.minLength}.`;
    }
  },
  {
    name: 'maxlength',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field has a maximum length of ${field.templateOptions?.maxLength}.`;
    }
  },
  {
    name: 'min',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field has a minimum value of ${field.templateOptions?.min}.`;
    }
  },
  {
    name: 'max',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field has a maximum value of ${field.templateOptions?.max}.`;
    }
  },
  {
    name: 'pattern',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field's value must fit the pattern ${field.templateOptions?.pattern}.`;
    }
  },

];

export const formlyConfig = {
  types: [
    CommentTextareaType,
    MultiFieldType,
  ],
  validationMessages: defaultValidationMessages,
}
