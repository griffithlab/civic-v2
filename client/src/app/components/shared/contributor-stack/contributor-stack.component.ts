import { Component, Input, OnInit } from '@angular/core';
import { ContributorFieldsFragment, Maybe } from "@app/generated/civic.apollo";

@Component({
  selector: 'cvc-contributor-stack',
  templateUrl: './contributor-stack.component.html',
  styleUrls: ['./contributor-stack.component.less'],
})
export class ContributorStackComponent implements OnInit {
  @Input() contributors: Maybe<ContributorFieldsFragment[]>

  ngOnInit() {
    if(this.contributors === undefined) {
      throw new Error("Must pass a list of contributors into the contributor stack")
    }
  }
}