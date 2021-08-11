import { Component, Input, OnInit } from "@angular/core";
import { Maybe, SourcePopoverFragment, SourcePopoverGQL } from "@app/generated/civic.apollo";
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'cvc-source-popover',
  templateUrl: './source-popover.component.html',
  styleUrls: ['./source-popover.component.less']
})
export class CvcSourcePopoverComponent implements OnInit {
  @Input() sourceId!: number;

  source$?: Observable<Maybe<SourcePopoverFragment>>

  constructor(private gql: SourcePopoverGQL) { }

  ngOnInit() {
    if (this.sourceId == undefined) {
      throw new Error("cvc-source-popover requires valid sourceId input.");
    }
    this.source$ = this.gql.watch({ sourceId: this.sourceId })
      .valueChanges
      .pipe(map(({ data }) => data.browseSources.edges[0]?.node))
  }
}
