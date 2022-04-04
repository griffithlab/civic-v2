import { Component, Input, OnInit } from "@angular/core";
import { Maybe } from "@app/generated/civic.apollo";
import { NzTabChangeEvent } from "ng-zorro-antd/tabs";
import { MyVariantInfoFieldsFragment } from "@app/generated/civic.apollo";

@Component({
    selector: 'cvc-my-variant-info',
    templateUrl: './my-variant-info.component.html',
    styleUrls: ['./my-variant-info.component.less']
})
export class CvcMyVariantInfoComponent {
  @Input() variantInfo: Maybe<MyVariantInfoFieldsFragment>;

  tabIndex: number = 0;

  constructor() { }


  tabChange(index: number): void {
    this.tabIndex = index;
  }
}
