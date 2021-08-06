import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesHomeComponent } from './genes-home.component';



@NgModule({
  declarations: [GenesHomeComponent],
  imports: [
    CommonModule
  ],
  exports: [GenesHomeComponent]
})
export class GenesHomeModule { }
