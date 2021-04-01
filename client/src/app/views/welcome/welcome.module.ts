import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { AppComponentsModule } from '@app/components/app/app-components.module';

@NgModule({
  imports: [WelcomeRoutingModule, AppComponentsModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
