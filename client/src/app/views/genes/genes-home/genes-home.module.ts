import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesHomeComponent } from './genes-home.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { GenesBrowseTableModule } from '@app/components/genes/genes-browse-table/genes-browse-table.module';
import { SectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';

@NgModule({
  declarations: [GenesHomeComponent],
  imports: [
    CommonModule,
    GenesBrowseTableModule,
    SectionNavigationModule,
    NzPageHeaderModule,
    NzGridModule
  ],
  exports: [GenesHomeComponent]
})
export class GenesHomeModule { }
