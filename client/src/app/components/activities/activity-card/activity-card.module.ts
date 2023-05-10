import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PushModule } from "@ngrx/component";
import { NzCardModule } from "ng-zorro-antd/card";
import { CvcActivityCardComponent } from "./activity-card.component";

@NgModule({
  declarations: [CvcActivityCardComponent],
  imports: [
    CommonModule,
    PushModule,
    NzCardModule,
  ],
  exports: [CvcActivityCardComponent],
})
export class CvcActivityCardModule {}