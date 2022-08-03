import { AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service';
import { Maybe, Organization } from '@app/generated/civic.apollo';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzButtonType } from 'ng-zorro-antd/button';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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

  @ContentChild(CvcOrgSelectorBtnDirective, { static: false }) button?: CvcOrgSelectorBtnDirective

  organizations$!: Observable<Organization[]>;
  mostRecentOrg$!: Observable<Maybe<Organization>>;

  isDisabled$: Subject<boolean>
  isHidden$: Subject<boolean>
  buttonClass$: BehaviorSubject<string>
  baseButtonClass = 'org-dropdown-btn'
  constructor(private viewerService: ViewerService) {
    this.isDisabled$ = new Subject<boolean>()
    this.isHidden$ = new Subject<boolean>()
    this.buttonClass$ = new BehaviorSubject<string>('')
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
    if (this.button) {
      if (this.button.domChange) {
        this.button.domChange
          .pipe(untilDestroyed(this))
          .subscribe((m: ButtonMutation) => {
            if (m.type === 'class' && typeof m.change === 'string') {
              this.buttonClass$.next(`${this.baseButtonClass} ${m.change}`)
            } else if (m.type === 'disabled' && typeof m.change === 'boolean') {
              this.isDisabled$.next(m.change)
            } else if (m.type === 'hidden' && typeof m.change === 'boolean') {
              this.isHidden$.next(m.change)
            }
          });
      }
    }
  }

}
