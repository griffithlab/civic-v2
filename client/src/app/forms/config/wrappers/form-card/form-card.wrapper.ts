import { Component, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

// NOTE: to replicated nz-form-item, this card item
// should ideally replicate its features:
// https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/form/form-item.component.ts

@Component({
  selector: 'form-card-wrapper',
  templateUrl: './form-card.wrapper.html',
  styleUrls: ['./form-card.wrapper.less']
})
export class FormCardWrapper extends FieldWrapper implements OnInit {

  constructor() { super(); }

  ngOnInit(): void {
  }

}
