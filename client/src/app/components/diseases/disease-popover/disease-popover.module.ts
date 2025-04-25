import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcDiseasePopoverComponent } from './disease-popover.component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [CvcDiseasePopoverComponent],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzCardModule,
    NzDescriptionsModule,
    NzIconModule,
    NzTypographyModule,
    CvcPipesModule,
    CvcLinkTagModule,
  ],
  exports: [CvcDiseasePopoverComponent],
})
export class CvcDiseasePopoverModule {}
