import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceListItemComponent } from './source-list-item/source-list-item.component';

@NgModule({
  declarations: [SourceListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [SourceListItemComponent]
})
export class SourcesComponentsModule { }
