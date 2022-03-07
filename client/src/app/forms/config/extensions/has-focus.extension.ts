import { FormlyExtension } from '@ngx-formly/core';
import { ExtensionOption } from '@ngx-formly/core/lib/services/formly.config';

export const hasFocus: FormlyExtension = {
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

export const HasFocusExtension: ExtensionOption = {
  name: 'has-focus',
  extension: hasFocus
}
