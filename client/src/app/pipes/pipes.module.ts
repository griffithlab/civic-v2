import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmpFormatPipe } from './amp-format-pipe';
import { EventVerbiagePipe } from './event-verbiage-pipe';
import { EvidenceEnumDisplayPipe } from './evidence-enum-display-type';
import { IfEmptyPipe } from './if-empty-pipe';

@NgModule({
  declarations: [
    AmpFormatPipe,
    EventVerbiagePipe,
    EvidenceEnumDisplayPipe,
    IfEmptyPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AmpFormatPipe,
    EventVerbiagePipe,
    EvidenceEnumDisplayPipe,
    IfEmptyPipe,
  ]
})
export class CvcPipesModule { }
