import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesSuggestPage } from './genes-suggest.page';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { GeneSuggestRevisionFormModule } from '@app/forms/genes/forms/gene-suggest-revision-form/gene-suggest-revision-form.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { SectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';

@NgModule({
  declarations: [GenesSuggestPage],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzCardModule,
    NzGridModule,
    NzSpaceModule,
    NzSkeletonModule,
    NzPageHeaderModule,
    GeneSuggestRevisionFormModule,
    SectionNavigationModule,
  ]
})
export class GenesSuggestModule { }
