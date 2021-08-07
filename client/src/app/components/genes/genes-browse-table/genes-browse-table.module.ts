import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesBrowseTableComponent } from './genes-browse-table.component';



@NgModule({
  declarations: [GenesBrowseTableComponent],
  imports: [
    CommonModule
  ],
  exports: [GenesBrowseTableComponent]
})
export class GenesBrowseTableModule { }
