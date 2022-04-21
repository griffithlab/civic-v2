import { Component, Input, OnInit } from "@angular/core";
import { FlagPopoverFragment, FlagPopoverGQL, Maybe } from "@app/generated/civic.apollo";
import { pluck } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'cvc-flag-popover',
  templateUrl: './flag-popover.component.html',
  styleUrls: ['./flag-popover.component.less']
})
export class CvcFlagPopoverComponent implements OnInit {
  @Input() flagId!: number;

  flag$?: Observable<Maybe<FlagPopoverFragment>>

  constructor(private gql: FlagPopoverGQL) { }

  ngOnInit() {
    if (this.flagId == undefined) {
      throw new Error("cvc-flag-popover requires valid flagId input.");
    }
    this.flag$ = this.gql.watch({ flagId: this.flagId })
      .valueChanges
      .pipe(pluck('data', 'flag'))
  }
}
