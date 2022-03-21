import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

// NOTE: to replicated nz-form-item, this card item
// should ideally replicate its features:
// https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/form/form-item.component.ts

@Component({
  selector: 'form-card-wrapper',
  templateUrl: './form-card.wrapper.html',
  styleUrls: ['./form-card.wrapper.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCardWrapper extends FieldWrapper implements OnInit {
  get errorState() {
    console.log(`form-card.wrapper showError: ${this.showError}`);
    return this.showError ? 'error' : '';
  }

  constructor() { super(); }

  ngOnInit(): void {
  }

}
