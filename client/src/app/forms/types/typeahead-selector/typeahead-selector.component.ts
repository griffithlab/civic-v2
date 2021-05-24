import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cvc-typeahead-selector',
  templateUrl: './typeahead-selector.component.html',
  styleUrls: ['./typeahead-selector.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypeaheadSelectorComponent extends FieldType implements OnInit {
  formControl!: FormControl;
  searchChange$ = new BehaviorSubject('');

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
    console.log('typeahead-selector init');
  }

  onSearch(value: string): void {
    // this.isLoading = true;
    this.searchChange$.next(value);
  }
}

export const TypeaheadSelectorType = {
  name: 'typeahead-selector',
  component: TypeaheadSelectorComponent,
  wrappers: ['form-field'],
}
