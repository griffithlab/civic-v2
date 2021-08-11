import { Component, Input, OnInit } from "@angular/core";
import { DiseasePopoverFragment, DiseasePopoverGQL, Maybe } from "@app/generated/civic.apollo";
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'cvc-disease-popover',
  templateUrl: './cvc-disease-popover.component.html',
  styleUrls: ['./cvc-disease-popover.component.less']
})
export class CvcDiseasePopoverComponent implements OnInit {
  @Input() diseaseId!: number;

  disease$?: Observable<Maybe<DiseasePopoverFragment>>

  constructor(private gql: DiseasePopoverGQL) { }

  ngOnInit() {
    if (this.diseaseId == undefined) {
      throw new Error("cvc-disease-popover requires valid diseaseId input.");
    }
    this.disease$ = this.gql.watch({ diseaseId: this.diseaseId })
      .valueChanges
      .pipe(map(({ data }) => data.browseDiseases.edges[0]?.node))
  }
}
