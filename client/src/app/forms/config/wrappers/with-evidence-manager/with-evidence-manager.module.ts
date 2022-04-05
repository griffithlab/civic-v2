import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CvcEvidenceTableModule } from "@app/components/evidence/evidence-table/evidence-table.module";
import { CvcPipesModule } from "@app/core/pipes/pipes.module";
import { ReactiveComponentModule } from "@ngrx/component";
import { ConfigOption, FormlyModule } from "@ngx-formly/core";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzPopoverModule } from "ng-zorro-antd/popover";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NgxJsonViewerModule } from "ngx-json-viewer";
import { CvcFormInfoCardModule } from "../../components/form-info-card/form-info-card.module";
import { WithEvidenceManagerWrapper } from "./with-evidence-manager.wrapper";

const configOption: ConfigOption = {
  wrappers: [
    {
      name: 'evidence-manager',
      component: WithEvidenceManagerWrapper
    }
  ]
}

@NgModule({
  declarations: [WithEvidenceManagerWrapper],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    FormlyModule.forChild(configOption),
    NzGridModule,
    NzCardModule,
    NzCollapseModule,
    CvcFormInfoCardModule,
    NgxJsonViewerModule,
    NzFormModule,
    NzIconModule,
    NzButtonModule,
    NzSpaceModule,
    NzPopoverModule,
    CvcPipesModule,
    CvcEvidenceTableModule,
    NzTypographyModule,
    NzModalModule
  ],
  exports: [WithEvidenceManagerWrapper]
})
export class CvcEvidenceManagerWrapperModule { }
