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

import { ViewerService, Viewer } from '@app/core/services/viewer/viewer.service';
import { Maybe, Organization } from '@app/generated/civic.apollo';
import { CvcOrgSelectorBtnDirective } from './org-selector-btn.directive';
import { NzButtonType } from 'ng-zorro-antd/button';
import { BooleanInput } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'cvc-org-selector-btn-group',
  templateUrl: './org-selector-btn-group.component.html',
  styleUrls: ['./org-selector-btn-group.component.less']
})
export class CvcOrgSelectorBtnGroupComponent implements OnInit, OnDestroy {
  @Input() selectedOrg!: Maybe<Organization>;
  @Output() selectedOrgChange = new EventEmitter<Organization>();

  @Input() buttonType: NzButtonType = 'primary';
  @Input() nzDanger: BooleanInput = false;
  @Input() nzSize: 'large' | 'default' | 'small' = 'small';

  @ContentChild(CvcOrgSelectorBtnDirective, {static: false}) button!: CvcOrgSelectorBtnDirective

  organizations$!: Observable<Organization[]>;
  mostRecentOrg$!: Observable<Maybe<Organization>>;

  private destroy$ = new Subject();

  constructor(private viewerService: ViewerService) { }

  get disabled() {
    return this.button.disabled;
  }

  selectOrg(org: any): void {
    this.selectedOrg = org;
    this.selectedOrgChange.emit(org);
  }

  refreshViewer() {
    setTimeout(() => { this.viewerService.refetch(); }, 2500)
  }

  ngOnInit() {
    this.organizations$ = this.viewerService.viewer$
      .pipe(map((v: Viewer) => v.organizations));

    this.mostRecentOrg$ = this.viewerService.viewer$
      .pipe(pluck('mostRecentOrg'),
        tap((org: Maybe<Organization>) => {
          if (org) {
            this.selectedOrg = org;
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
