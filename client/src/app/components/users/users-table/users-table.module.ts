import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CvcUsersTableComponent } from "./users-table.component";
import { NzTableModule } from 'ng-zorro-antd/table';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcUserTagModule } from "../user-tag/user-tag.module";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { CvcOrganizationTagModule } from "@app/components/organizations/organization-tag/organization-tag.module";
import { NzSelectModule } from "ng-zorro-antd/select";
import { FormsModule } from "@angular/forms";
import { NzButtonModule } from "ng-zorro-antd/button";
import { CvcPipesModule } from "@app/core/pipes/pipes.module";
import { CivicTimeagoFormatter } from "@app/core/utilities/timeago-formatter";
import { TimeagoFormatter, TimeagoModule } from "ngx-timeago";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzTypographyModule } from "ng-zorro-antd/typography";

@NgModule({
  declarations: [CvcUsersTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    NzIconModule,
    NzButtonModule,
    NzToolTipModule,
    NzTableModule,
    NzSelectModule,
    NzCardModule,
    NzTypographyModule,
    CvcClearableInputFilterModule,
    CvcLinkTagModule,
    CvcUserTagModule,
    CvcPipesModule,
    TimeagoModule.forChild({ formatter: {useClass: CivicTimeagoFormatter, provide: TimeagoFormatter} }),
    CvcOrganizationTagModule
  ],
  exports: [CvcUsersTableComponent]
})
export class CvcUsersTableModule { }