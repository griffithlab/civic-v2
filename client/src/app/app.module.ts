import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { formlyConfig } from '@app/forms/forms.config';

import { HttpClientModule, HttpClientXsrfModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveComponentModule } from '@ngrx/component';
import { CookieService } from 'ngx-cookie-service';

import { civicIcons } from '@app/icons-provider.module';

import { TimeagoModule } from 'ngx-timeago';

import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GraphQLModule } from '@app/graphql/graphql.module';
import { environment } from 'environments/environment';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NzIconModule } from 'ng-zorro-antd/icon';

registerLocaleData(en);
const maskConfig: Partial<IConfig> = {
  validation: true,
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    HttpClientXsrfModule,
    HttpClientJsonpModule,
    LoggerModule.forRoot({
      timestampFormat: 'mediumTime',
      level: !environment.production ? NgxLoggerLevel.TRACE : NgxLoggerLevel.OFF,
      enableSourceMaps: true,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    NgxJsonViewerModule,
    NgxMaskModule.forRoot(maskConfig),
    NzIconModule.forRoot(civicIcons),
    ReactiveFormsModule,
    ReactiveComponentModule,
    TimeagoModule.forRoot(),
    FormlyModule.forRoot(formlyConfig),
  ],
  providers: [
    CookieService,
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
