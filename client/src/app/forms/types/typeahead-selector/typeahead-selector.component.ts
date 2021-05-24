import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'cvc-typeahead-selector',
  templateUrl: './typeahead-selector.component.html',
  styleUrls: ['./typeahead-selector.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypeaheadSelectorComponent extends FieldType implements OnInit {
  defaultOptions = {
    templateOptions: { options: [] },
  };

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}

export const TypeaheadSelectorType = {
  name: 'typeahead-selector',
  component: TypeaheadSelectorComponent,
  wrappers: ['form-field'],
}
