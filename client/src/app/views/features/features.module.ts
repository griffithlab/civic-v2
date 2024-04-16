// framework imports
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FeaturesRoutingModule } from './features-routing.module'
import { FeaturesView } from './features.view'

@NgModule({
  declarations: [FeaturesView],
  imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
