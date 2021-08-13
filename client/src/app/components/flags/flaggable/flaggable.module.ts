import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcFlaggableOptionsDirective } from './flaggable-options.directive';
import { CvcFlaggableComponent } from './flaggable.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@NgModule({
  declarations: [CvcFlaggableComponent, CvcFlaggableOptionsDirective],
  imports: [
    CommonModule,
    NzBadgeModule,
    NzToolTipModule,
    NzTypographyModule,
  ],
  exports: [CvcFlaggableComponent, CvcFlaggableOptionsDirective]
})
export class CvcFlaggableModule { }
