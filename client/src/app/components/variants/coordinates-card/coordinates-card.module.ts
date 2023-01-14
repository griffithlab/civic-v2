import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcCoordinatesCard } from './coordinates-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { CvcEmptyRevisableModule } from '@app/components/shared/empty-revisable/empty-revisable.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

@NgModule({
  declarations: [CvcCoordinatesCard],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzCardModule,
    NzDescriptionsModule,
    CvcPipesModule,
    CvcLinkTagModule,
    CvcEmptyRevisableModule,
  ],
  exports: [CvcCoordinatesCard],
})
export class CvcCoordinatesCardModule {}
