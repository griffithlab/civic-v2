import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersAssertionsComponent } from './users-assertions.component';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';

@NgModule({
  declarations: [UsersAssertionsComponent],
  imports: [
    CommonModule,
    NzIconModule,
    CvcEntityTableCardModule,
    CvcAssertionsTableModule,
  ]
})
export class UsersAssertionsModule { }
