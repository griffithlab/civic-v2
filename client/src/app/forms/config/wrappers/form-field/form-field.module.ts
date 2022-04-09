import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CvcPipesModule } from "@app/core/pipes/pipes.module";
import { ReactiveComponentModule } from "@ngrx/component";
import { ConfigOption, FormlyModule } from "@ngx-formly/core";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzPopoverModule } from "ng-zorro-antd/popover";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NgxJsonViewerModule } from "ngx-json-viewer";
import { CvcFormInfoCardModule } from "../../components/form-info-card/form-info-card.module";
import { FormFieldWrapper } from "./form-field.wrapper";

const configOption: ConfigOption = {
  wrappers: [
    {
      name: 'form-field',
      component: FormFieldWrapper
    }
  ]
}

@NgModule({
  declarations: [FormFieldWrapper],
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
    NzSpaceModule,
    NzPopoverModule,
    CvcPipesModule,
    NzTypographyModule
  ],
  exports: [FormFieldWrapper]
})
export class CvcFormFieldWrapperModule { }
