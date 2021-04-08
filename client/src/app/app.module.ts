import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CookieService } from 'ngx-cookie-service';

import { TimeagoModule } from 'ngx-timeago';

import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { IconsProviderModule } from './icons-provider.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GraphQLModule } from '@app/graphql.module';

import { LayoutModule } from './layout/layout.module';
import { GenesComponentsModule } from './components/genes/genes-components.module';
import { SharedComponentsModule } from './components/shared/shared-components.module';
import { AppComponentsModule } from './components/app/app-components.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GenesComponentsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    HttpClientXsrfModule,
    IconsProviderModule,
    LoggerModule.forRoot({
      timestampFormat: 'mediumTime',
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    NgxJsonViewerModule,
    ReactiveFormsModule,
    TimeagoModule.forRoot(),
    SharedComponentsModule,
    AppComponentsModule,
    LayoutModule,
  ],
  providers: [
    CookieService,
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
