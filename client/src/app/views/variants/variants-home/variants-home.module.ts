import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantsHomePage } from './variants-home.page';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcVariantsTableModule } from '@app/components/variants/variants-table/variants-table.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module';
import { RouterModule } from '@angular/router';
import { LetModule, PushModule } from '@ngrx/component';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { VariantSubmitFormModule } from '@app/forms/variant-submit/variant-submit.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

@NgModule({
  declarations: [VariantsHomePage],
  imports: [
    CommonModule,
    RouterModule,
    LetModule, PushModule,
    NzPageHeaderModule,
    NzGridModule,
    NzIconModule,
    NzTypographyModule,
    NzButtonModule,
    NzSpaceModule,
    NzPopoverModule,
    CvcPipesModule,
    CvcSectionNavigationModule,
    CvcGeneTagModule,
    CvcVariantsTableModule,
    CvcAutoHeightDivModule,
    CvcSectionNavigationModule,
    VariantSubmitFormModule,
  ],
  exports: [VariantsHomePage],
})
export class VariantsHomeModule {}
