import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PushPipe } from "@ngrx/component";
import { NzAlertModule } from "ng-zorro-antd/alert";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzSpinModule } from "ng-zorro-antd/spin";
import { CvcFormSubmissionStatusDisplayComponent } from "./form-submission-status-display.component";

@NgModule({
  declarations: [CvcFormSubmissionStatusDisplayComponent],
  imports: [
    CommonModule,
    PushPipe,
    NzSpinModule,
    NzAlertModule,
    NzSpaceModule
  ],
  exports: [CvcFormSubmissionStatusDisplayComponent]
})
export class CvcFormSubmissionStatusDisplayModule {}