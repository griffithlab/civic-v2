import { AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service';
import { Maybe, Organization } from '@app/generated/civic.apollo';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzButtonType } from 'ng-zorro-antd/button';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { Observable, Subject } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { ButtonMutation, CvcOrgSelectorBtnDirective } from './org-selector-btn.directive';

@UntilDestroy()
@Component({
  selector: 'cvc-org-selector-btn-group',
  templateUrl: './org-selector-btn-group.component.html',
  styleUrls: ['./org-selector-btn-group.component.less']
})
export class CvcOrgSelectorBtnGroupComponent implements OnInit, AfterViewInit {
  @Input() selectedOrg!: Maybe<Organization>;
  @Output() selectedOrgChange = new EventEmitter<Organization>();

  @Input() buttonType: NzButtonType = 'primary';
  @Input() nzDanger: BooleanInput = false;
  @Input() nzSize: 'large' | 'default' | 'small' = 'small';

  @ContentChild(CvcOrgSelectorBtnDirective, { static: false }) button?: CvcOrgSelectorBtnDirective

  organizations$!: Observable<Organization[]>;
  mostRecentOrg$!: Observable<Maybe<Organization>>;

  isDisabled$: Subject<boolean>

  constructor(private viewerService: ViewerService) {
    this.isDisabled$ = new Subject<boolean>()
    // this.isDisabled$.asObservable()
    // .pipe(tag('org-selector-btn-group isDisabled$')).subscribe();
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

    this.mostRecentOrg$.pipe(untilDestroyed(this)).subscribe();
  }

  ngAfterViewInit() {
    // subscribe to org-selector-btn.directive's domChange @Output,
    // emit mutation events from the appropriate Subjects
    // TODO: handle classList mutations
    if (this.button && this.button.domChange) {
      this.button.domChange
        .pipe(untilDestroyed(this))
        .subscribe((m: ButtonMutation) => {
          if (m.type === 'disabled' && typeof m.change === 'boolean') {
            this.isDisabled$.next(m.change)
          }
        });
    }
  }

}
