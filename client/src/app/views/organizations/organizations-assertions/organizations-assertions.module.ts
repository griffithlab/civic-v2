import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { OrganizationsAssertionsComponent } from './organizations-assertions.component';

@NgModule({
  declarations: [OrganizationsAssertionsComponent],
  imports: [CommonModule, CvcAssertionsTableModule, NzIconModule],
})
export class OrganizationsAssertionsModule {}
