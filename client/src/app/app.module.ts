import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { CvcFormlyConfig } from '@app/forms/forms.config';
import { HttpClientModule, HttpClientXsrfModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveComponentModule } from '@ngrx/component';
import { CookieService } from 'ngx-cookie-service';
import { civicIcons } from '@app/icons-provider.module';
import { TimeagoFormatter, TimeagoModule } from 'ngx-timeago';
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from '@app/graphql/graphql.module';
import { environment } from 'environments/environment';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcNetworkErrorAlertModule } from './components/app/network-error-alert/network-error-alert.module';
import { CivicTimeagoFormatter } from './core/utilities/timeago-formatter';
import { CvcFormInfoWrapperModule } from './forms/shared/wrappers/form-info.module';
import { CvcSubmitButtonTypeModule } from './forms/shared/types/submit-button/submit-button.module';

registerLocaleData(en);

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
    NzIconModule.forRoot(civicIcons),
    ReactiveFormsModule,
    ReactiveComponentModule,
    TimeagoModule.forRoot({formatter: { provide: TimeagoFormatter, useClass: CivicTimeagoFormatter }}),
    CvcFormInfoWrapperModule, // TODO: figure out a better way of configuring types, wrappers with module dependencies - shouldn't have to import wrapper modules into app.module. Probably should follow the examples here: https://medium.com/hackernoon/organize-your-forms-application-using-ngx-fomrly-796150461045
    CvcSubmitButtonTypeModule,
    FormlyModule.forRoot(CvcFormlyConfig),
    CvcNetworkErrorAlertModule,
  ],
  providers: [
    CookieService,
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
