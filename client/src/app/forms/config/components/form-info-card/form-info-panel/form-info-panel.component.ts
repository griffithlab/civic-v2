import { Component, Input, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'cvc-form-info-panel',
  templateUrl: './form-info-panel.component.html',
})
export class CvcFormInfoPanelComponent implements OnInit {
  @Input() field!: FormlyFieldConfig;
  constructor() {}

  ngOnInit(): void {}
}
