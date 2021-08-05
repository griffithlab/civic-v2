import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maybe, Organization } from '@app/generated/civic.apollo';
import {
  GenesRevisionsService,
  SelectableFieldName,
  UniqueRevisor
} from './genes-revisions.service';

@Component({
  selector: 'cvc-genes-revisions',
  templateUrl: './genes-revisions.component.html',
  styleUrls: ['./genes-revisions.component.less'],
  providers: [GenesRevisionsService]
})
export class GenesRevisionsComponent implements OnInit {
  service: GenesRevisionsService;
  mostRecentOrg: Maybe<Organization>;
  geneId: number

  constructor(
    private genesRevisionsService: GenesRevisionsService,
    private route: ActivatedRoute) {

    this.geneId = +this.route.snapshot.params['geneId'];
    this.service = genesRevisionsService;
  }

  ngOnInit(): void {
    this.service.createQuery({geneId: this.geneId});
  }

  onFieldNameSelected(field: Maybe<SelectableFieldName>) {
    this.service.fieldNameSelected(field)
  }

  onRevisorSelected(user: Maybe<UniqueRevisor>) {
    this.service.revisorSelected(user)
  }

  selectOrg(org: Organization): void {
    this.mostRecentOrg = org;
  }

}
