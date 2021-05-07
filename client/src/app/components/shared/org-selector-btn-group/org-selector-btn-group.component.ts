import {
  Component,
  Input,
  ContentChild,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

import {
  Subject,
  Observable,
} from 'rxjs';
import { map, pluck, takeUntil, tap } from 'rxjs/operators';

import { ViewerService, Viewer } from '@app/shared/services/viewer/viewer.service';
import { Maybe, Organization } from '@app/generated/civic.apollo';
import { OrgSelectorBtnDirective } from './org-selector-btn.directive';

@Component({
  selector: 'cvc-org-selector-btn-group',
  templateUrl: './org-selector-btn-group.component.html',
  styleUrls: ['./org-selector-btn-group.component.less']
})
export class OrgSelectorBtnGroupComponent implements OnDestroy {
  @Input() selectedOrg!: Maybe<Organization>;
  @Output() selectedOrgChange = new EventEmitter<Organization>();

  @ContentChild(OrgSelectorBtnDirective, {static: false}) button!: OrgSelectorBtnDirective

  organizations$: Observable<Organization[]>;
  mostRecentOrg$: Observable<Maybe<Organization>>;

  mostRecentOrg: Maybe<Organization>;

  private destroy$ = new Subject();

  constructor(private viewerService: ViewerService) {
    this.organizations$ = this.viewerService.viewer$
      .pipe(map((v: Viewer) => v.organizations));

    this.mostRecentOrg$ = this.viewerService.viewer$
      .pipe(
        pluck('mostRecentOrg'),
        tap((org: Maybe<Organization>) => {
          this.mostRecentOrg = org;
          this.selectedOrgChange.emit(org)
        }));

    this.mostRecentOrg$.pipe(takeUntil(this.destroy$)).subscribe();
  }

  get disabled() {
    return this.button.disabled;
  }

  selectOrg(org: any): void {
    this.mostRecentOrg = org;
    this.selectedOrgChange.emit(org);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
