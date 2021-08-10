import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesHomeComponent } from './genes-home.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcGenesTableModule } from '@app/components/genes/cvc-genes-table/cvc-genes-table.module';
import { SectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [GenesHomeComponent],
  imports: [
    CommonModule,
    SectionNavigationModule,
    CvcGenesTableModule,
    NzIconModule,
    NzPageHeaderModule,
    NzGridModule
  ],
  exports: [GenesHomeComponent]
})
export class GenesHomeModule { }
