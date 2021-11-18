import { Component, Input, OnInit } from "@angular/core";
import { DrugPopover, DrugPopoverGQL, Maybe } from "@app/generated/civic.apollo";
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'cvc-drug-popover',
  templateUrl: './cvc-drug-popover.component.html',
  styleUrls: ['./cvc-drug-popover.component.less']
})
export class CvcDrugPopoverComponent implements OnInit {
  @Input() drugId!: number;

  drug$?: Observable<Maybe<DrugPopover>>

  constructor(private gql: DrugPopoverGQL) { }

  ngOnInit() {
    if (this.drugId == undefined) {
      throw new Error("cvc-drug-popover requires valid drugId input.");
    }
    this.drug$ = this.gql.watch({ drugId: this.drugId })
      .valueChanges
      .pipe(map(({ data }) => data.drugPopover))
  }
}
