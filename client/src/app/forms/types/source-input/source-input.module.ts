import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceIdInputComponent, SourceIdInputType } from '../source-id-input/source-id-input.type';
import { FormlyModule } from '@ngx-formly/core';
import { SourceListItemModule } from '@app/components/sources/source-list-item/source-list-item.module';

const formlyConfig = {
  types: [SourceIdInputType]
}

@NgModule({
  declarations: [SourceIdInputComponent],
  imports: [
    CommonModule,
    FormlyModule.forChild(formlyConfig),
    SourceListItemModule,

  ],
  exports: [SourceIdInputComponent],
})
export class SourceInputModule { }
