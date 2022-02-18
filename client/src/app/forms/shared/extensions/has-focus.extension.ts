// default-label-extension.ts
import { FormlyExtension } from '@ngx-formly/core';

export const hasFocusExtension: FormlyExtension = {
  prePopulate(field): void {
    if (field.expressionProperties?.hasFocus) { return; };

    field.expressionProperties = {
      ...field.expressionProperties,
      'templateOptions.hasFocus': (model: any, state: any, field: any) => {
        return field.focus;
      }

    }
  },
};
