import { Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'field-tag-wrapper',
  templateUrl: './field-tag.wrapper.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldTagWrapper extends FieldWrapper implements AfterViewInit {
  constructor() {
    super();
  }
  get errorState() {
    return this.showError ? 'error' : '';
  }

  ngAfterViewInit() {
    console.log(`field-tag afterViewInit.`);
  }
}
