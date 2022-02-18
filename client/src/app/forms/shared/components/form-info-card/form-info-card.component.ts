import { Component, Input, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'cvc-form-info-card',
  templateUrl: './form-info-card.component.html',
  styleUrls: ['./form-info-card.component.less']
})
export class CvcFormInfoCardComponent implements OnInit {
  @Input() fieldGroup: FormlyFieldConfig[] | undefined;
  @Input() affixTo!: HTMLElement;
  
  constructor() { }

  ngOnInit(): void {
  }

}
