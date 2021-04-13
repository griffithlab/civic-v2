import {
  Component,
  Input,
  ContentChild,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';

import { Organization } from '@app/generated/civic.apollo';

import { Viewer, ViewerService } from '@app/shared/services/viewer/viewer.service';

import { OrgSelectorBtnDirective } from './org-selector-btn.directive';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'cvc-org-selector-btn-group',
  templateUrl: './org-selector-btn-group.component.html',
  styleUrls: ['./org-selector-btn-group.component.less']
})
export class OrgSelectorBtnGroupComponent implements OnInit {
  @ContentChild(OrgSelectorBtnDirective, {static: false}) button!: OrgSelectorBtnDirective
  get disabled() {
    return this.button.disabled;
  }

  viewer$: Observable<Viewer>;
  organizations$: Observable<any>;

  constructor(private viewerService: ViewerService) {
    this.viewer$ = this.viewerService.viewer$;
    this.organizations$ = this.viewer$.pipe(pluck('organizations'));
  }

  ngOnInit(): void {
  }
}
