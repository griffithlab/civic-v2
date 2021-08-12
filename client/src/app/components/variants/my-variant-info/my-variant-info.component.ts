import { Component, Input, OnInit } from "@angular/core";
import { Maybe } from "@app/generated/civic.apollo";
import { NzTabChangeEvent } from "ng-zorro-antd/tabs";
import { MyVariantInfoFieldsFragment } from "@app/generated/civic.apollo";

@Component({
    selector: 'cvc-my-variant-info',
    templateUrl: './my-variant-info.component.html',
    styleUrls: ['./my-variant-info.component.less']
})
export class CvcMyVariantInfoComponent implements OnInit {
  @Input() variantInfo: Maybe<MyVariantInfoFieldsFragment>;

  tabIndex: Maybe<number>;

  constructor() {
    this.tabIndex = 0;
  }

  ngOnInit(): void {
    this.tabChange({ index: 0, tab: null });
  }

  tabChange(args: NzTabChangeEvent): void {
    this.tabIndex = args.index;
  }
}
