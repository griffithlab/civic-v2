import {
  Component,
  Input,
  ContentChild,
  Output,
  EventEmitter,
  OnDestroy,
  OnInit,
} from '@angular/core';

import {
  Subject,
  Observable,
} from 'rxjs';
import { map, pluck, takeUntil, tap } from 'rxjs/operators';

import { ViewerService, Viewer } from '@app/shared/services/viewer/viewer.service';
import { Maybe, Organization } from '@app/generated/civic.apollo';
import { CvcOrgSelectorBtnDirective } from './org-selector-btn.directive';

@Component({
  selector: 'cvc-org-selector-btn-group',
  templateUrl: './org-selector-btn-group.component.html',
  styleUrls: ['./org-selector-btn-group.component.less']
})
export class CvcOrgSelectorBtnGroupComponent implements OnInit, OnDestroy {
  @Input() selectedOrg!: Maybe<Organization>;
  @Output() selectedOrgChange = new EventEmitter<Organization>();

  @ContentChild(CvcOrgSelectorBtnDirective, {static: false}) button!: CvcOrgSelectorBtnDirective

  organizations$!: Observable<Organization[]>;
  mostRecentOrg$!: Observable<Maybe<Organization>>;

  mostRecentOrg: Maybe<Organization>;

  private destroy$ = new Subject();

  constructor(private viewerService: ViewerService) { }

  get disabled() {
    return this.button.disabled;
  }

  selectOrg(org: any): void {
    this.mostRecentOrg = org;
    this.selectedOrgChange.emit(org);
  }

  ngOnInit() {
    this.organizations$ = this.viewerService.viewer$
      .pipe(map((v: Viewer) => v.organizations));

    this.mostRecentOrg$ = this.viewerService.viewer$
      .pipe(pluck('mostRecentOrg'),
        tap((org: Maybe<Organization>) => {
          this.mostRecentOrg = org;
          if (org) {
            this.selectedOrgChange.emit(org)
          }
        }));

    this.mostRecentOrg$.pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
