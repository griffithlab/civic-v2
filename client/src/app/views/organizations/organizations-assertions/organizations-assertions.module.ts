import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { OrganizationsAssertionsComponent } from './organizations-assertions.component';

@NgModule({
  declarations: [OrganizationsAssertionsComponent],
  imports: [
    CommonModule,
    CvcEntityTableCardModule,
    CvcAssertionsTableModule,
    NzIconModule,
  ]
})
export class OrganizationsAssertionsModule { }
