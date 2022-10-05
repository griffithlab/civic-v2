import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcTableDownloaderComponent } from './table-downloader.component';

@NgModule({
  declarations: [CvcTableDownloaderComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule
  ],
  exports: [CvcTableDownloaderComponent]
})
export class CvcTableDownloaderModule { }
