import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcQuicksearchComponent } from './quicksearch-component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { RouterModule } from '@angular/router';
import { LetModule, PushModule } from '@ngrx/component';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [CvcQuicksearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LetModule, PushModule,
    NzTypographyModule,
    NzSelectModule,
    NzInputModule,
    NzFormModule,
    NzIconModule,
    NzAutocompleteModule,
  ],
  exports: [CvcQuicksearchComponent],
})
export class CvcQuicksearchModule {}
