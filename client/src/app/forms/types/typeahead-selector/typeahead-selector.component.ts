import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'cvc-typeahead-selector',
  templateUrl: './typeahead-selector.component.html',
  styleUrls: ['./typeahead-selector.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypeaheadSelectorComponent extends FieldType implements OnInit {
  formControl!: FormControl;

  constructor() {
    super();
    this.defaultOptions = {
      templateOptions: {
        placeholder: 'placeholder',
        options: []
      },
    };
  }

  ngOnInit(): void {
  }

  onSearch(e: any) {
    console.log(e);
  }

}

export const TypeaheadSelectorType = {
  name: 'typeahead-selector',
  component: TypeaheadSelectorComponent,
  wrappers: ['form-field'],
}
