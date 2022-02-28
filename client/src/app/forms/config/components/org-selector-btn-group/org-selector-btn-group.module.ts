import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcOrgSelectorBtnGroupComponent } from './org-selector-btn-group.component';
import { CvcOrgSelectorBtnDirective } from './org-selector-btn.directive';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@NgModule({
  declarations: [CvcOrgSelectorBtnDirective, CvcOrgSelectorBtnGroupComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzAvatarModule,
    NzDropDownModule,
    NzSpaceModule,
  ],
  exports: [CvcOrgSelectorBtnDirective, CvcOrgSelectorBtnGroupComponent]
})
export class CvcOrgSelectorBtnGroupModule { }
