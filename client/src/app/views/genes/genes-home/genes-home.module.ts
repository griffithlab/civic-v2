import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesHomeComponent } from './genes-home.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcGenesTableModule } from '@app/components/genes/cvc-genes-table/cvc-genes-table.module';
import { SectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { IconsProviderModule } from '@app/icons-provider.module';

@NgModule({
  declarations: [GenesHomeComponent],
  imports: [
    CommonModule,
    IconsProviderModule,
    SectionNavigationModule,
    CvcGenesTableModule,
    NzPageHeaderModule,
    NzGridModule
  ],
  exports: [GenesHomeComponent]
})
export class GenesHomeModule { }
