import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormlyModule } from "@ngx-formly/core";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NgxJsonViewerModule } from "ngx-json-viewer";
import { CvcFormInfoCardModule } from "../components/form-info-card/form-info-card.module";
import { CvcFormInfoWrapper } from "./form-info.wrapper";

@NgModule({
  declarations: [CvcFormInfoWrapper],
  imports: [
    CommonModule,
    FormlyModule,
    NzGridModule,
    CvcFormInfoCardModule,
    NgxJsonViewerModule,
  ],
  exports: [CvcFormInfoWrapper]
})
export class CvcFormInfoWrapperModule { }
