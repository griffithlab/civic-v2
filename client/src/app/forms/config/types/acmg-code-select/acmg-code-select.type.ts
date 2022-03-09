import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import { Subject } from 'rxjs';
import { SelectOption } from '../../states/entity.state';

export const acmgCodeSelectType: TypeOption = {
  name: 'acmg-code-select',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      placeholder: 'None specified.',
      options: new Subject<SelectOption[]>()
    }
  }
}
