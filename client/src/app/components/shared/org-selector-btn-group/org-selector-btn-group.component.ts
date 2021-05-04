import {
  Component,
  Input,
  ContentChild,
  Output,
  EventEmitter,
} from '@angular/core';

import {
  Observable,
} from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { ViewerService, Viewer } from '@app/shared/services/viewer/viewer.service';
import { Maybe, Organization } from '@app/generated/civic.apollo';
import { OrgSelectorBtnDirective } from './org-selector-btn.directive';

@Component({
  selector: 'cvc-org-selector-btn-group',
  templateUrl: './org-selector-btn-group.component.html',
  styleUrls: ['./org-selector-btn-group.component.less']
})
export class OrgSelectorBtnGroupComponent {
  @Output() orgSelected = new EventEmitter<Organization>();

  @ContentChild(OrgSelectorBtnDirective, {static: false}) button!: OrgSelectorBtnDirective

  organizations$: Observable<Organization[]>;
  mostRecentOrg$: Observable<Maybe<Organization>>;

  constructor(private viewerService: ViewerService) {
    this.organizations$ = this.viewerService.viewer$
      .pipe(map((v: Viewer) => v.organizations));

    this.mostRecentOrg$ = this.viewerService.viewer$
      .pipe(pluck('mostRecentOrg'));
  }

  get disabled() {
    return this.button.disabled;
  }

  selectOrg(org: any): void {
    this.orgSelected.emit(org);
  }
}
