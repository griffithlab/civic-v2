import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcContributorStackComponent } from './contributor-stack.component';
import { RouterModule } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { CvcPipesModule } from '@app/shared/pipes/pipes.module';
import { NzListModule } from 'ng-zorro-antd/list';
import { CvcUserPopoverModule } from '@app/components/users/user-popover/user-popover.module';

@NgModule({
  declarations: [CvcContributorStackComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzAvatarModule,
    NzPopoverModule,
    NzListModule,
    CvcPipesModule,
    CvcUserPopoverModule
  ],
  exports: [CvcContributorStackComponent]
})
export class CvcContributorStackModule { }
