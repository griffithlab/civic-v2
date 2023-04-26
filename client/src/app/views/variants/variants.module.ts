// framework imports
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { VariantsRoutingModule } from './variants-routing.module'
import { VariantsView } from './variants.view'

@NgModule({
  declarations: [VariantsView],
  imports: [CommonModule, VariantsRoutingModule],
})
export class VariantsModule {}
