import { Component, Input, OnInit } from "@angular/core";
import { AssertionPopoverFragment, AssertionPopoverGQL, Maybe } from "@app/generated/civic.apollo";
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'cvc-assertion-popover-r',
  templateUrl: './assertion-popover.component.html',
  styleUrls: ['./assertion-popover.component.less']
})
export class CvcAssertionPopoverComponent implements OnInit {
  @Input() assertionId!: number;

  assertion$?: Observable<Maybe<AssertionPopoverFragment>>

  constructor(private gql: AssertionPopoverGQL) { }

  ngOnInit() {
    if (this.assertionId == undefined) {
      throw new Error("cvc-assertion-popover requires valid assertionId input.");
    }
    this.assertion$ = this.gql.watch({ assertionId: this.assertionId })
      .valueChanges
      .pipe(map(({ data }) => data.assertion))
  }
}
