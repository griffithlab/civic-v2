import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcMyChemInfoComponent } from './my-chem-info.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [CvcMyChemInfoComponent],
  imports: [
    CommonModule,
    NzTabsModule,
    NzTableModule,
    NzCardModule,
    NzDescriptionsModule,
    NzGridModule,
    NzTagModule,
    NzTypographyModule,
    CvcPipesModule,
    CvcLinkTagModule,
    CvcTagListModule
  ],
  exports: [CvcMyChemInfoComponent],
})
export class CvcMyChemInfoModule { }
