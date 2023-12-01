import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PushModule } from "@ngrx/component";
import { NzCardModule } from "ng-zorro-antd/card";
import { CvcActivityCardComponent } from "./activity-card.component";
import { CvcCommentBodyModule } from "@app/components/comments/comment-body/comment-body.module";
import { NzDividerModule } from "ng-zorro-antd/divider";

@NgModule({
  declarations: [CvcActivityCardComponent],
  imports: [
    CommonModule,
    PushModule,
    NzCardModule,
    NzDividerModule,
    CvcCommentBodyModule
  ],
  exports: [CvcActivityCardComponent],
})
export class CvcActivityCardModule {}