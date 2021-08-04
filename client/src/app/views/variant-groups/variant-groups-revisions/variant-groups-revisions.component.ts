import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maybe, Organization } from '@app/generated/civic.apollo';
import {
  VariantGroupsRevisionsService,
  SelectableFieldName,
  UniqueRevisor
} from './variant-groups-revisions.service';

@Component({
  selector: 'cvc-variant-groups-revisions',
  templateUrl: './variant-groups-revisions.component.html',
  styleUrls: ['./variant-groups-revisions.component.less'],
  providers: [VariantGroupsRevisionsService]
})
export class VariantGroupsRevisionsComponent implements OnInit {
  service: VariantGroupsRevisionsService;
  mostRecentOrg: Maybe<Organization>;
  variantGroupId: number

  constructor(
    private variantGroupsRevisionsService: VariantGroupsRevisionsService,
    private route: ActivatedRoute) {

    this.variantGroupId = +this.route.snapshot.params['variantGroupId'];
    this.service = variantGroupsRevisionsService;
  }

  ngOnInit(): void {
    this.service.createQuery({ variantGroupId: this.variantGroupId });
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
