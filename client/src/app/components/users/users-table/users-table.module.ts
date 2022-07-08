import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CvcOrganizationTagModule } from "@app/components/organizations/organization-tag/organization-tag.module";
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { CvcNoMoreRowsModule } from "@app/components/shared/no-more-rows/no-more-rows.module";
import { CvcTableCountsModule } from "@app/components/shared/table-counts/table-counts.module";
import { CvcTagListModule } from "@app/components/shared/tag-list/tag-list.module";
import { CvcTagOverflowModule } from "@app/components/shared/tag-overflow/tag-overflow.module";
import { CvcPipesModule } from "@app/core/pipes/pipes.module";
import { CivicTimeagoFormatter } from "@app/core/utilities/timeago-formatter";
import { CvcAutoHeightCardModule } from "@app/directives/auto-height-card/auto-height-card.module";
import { CvcAutoHeightTableModule } from "@app/directives/auto-height-table/auto-height-table.module";
import { CvcTableScrollModule } from "@app/directives/table-scroll/table-scroll.module";
import { ReactiveComponentModule } from '@ngrx/component';
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { TimeagoFormatter, TimeagoModule } from "ngx-timeago";
import { CvcUserTagModule } from "../user-tag/user-tag.module";
import { CvcUsersTableComponent } from "./users-table.component";

@NgModule({
  declarations: [CvcUsersTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,

    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzSelectModule,
    NzTableModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,

    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
    CvcClearableInputFilterModule,
    CvcLinkTagModule,
    CvcNoMoreRowsModule,
    CvcOrganizationTagModule,
    CvcPipesModule,
    CvcTableCountsModule,
    CvcTableScrollModule,
    CvcTagListModule,
    CvcTagOverflowModule,
    CvcUserTagModule,
    TimeagoModule.forChild({ formatter: {useClass: CivicTimeagoFormatter, provide: TimeagoFormatter} }),
  ],
  exports: [CvcUsersTableComponent]
})
export class CvcUsersTableModule { }
