import { Component, Input, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'cvc-form-info-card',
  templateUrl: './form-info-card.component.html',
  styleUrls: ['./form-info-card.component.less'],
})
export class CvcFormInfoCardComponent implements OnInit {
  @Input() fieldGroup: FormlyFieldConfig[] | undefined;
  @Input() affixTo!: HTMLElement;

  constructor() {}

  ngOnInit(): void {
    // for future debugging form-info panel's field status inconsistencies
    //
    // const dffc = this.fieldGroup!.find(fc => fc.key === 'disease');
    // const dfcv = dffc!.formControl!.valueChanges.subscribe((v) => {
    //   console.log(`form-info-card disease valueChanges: ${v}`);
    // });
    // const dfcs = dffc!.formControl!.statusChanges.subscribe((v) => {
    //   console.log(`form-info-card disease statusChanges: ${v}`);
    // });
  }
}
