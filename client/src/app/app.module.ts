import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {
  HttpClientModule,
  HttpClientXsrfModule,
  HttpClientJsonpModule,
  HttpClient,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveComponentModule } from '@ngrx/component';
import { CookieService } from 'ngx-cookie-service';
import { civicIcons } from '@app/icons-provider.module';
import { TimeagoFormatter, TimeagoModule } from 'ngx-timeago';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
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
import { CvcFormsModule } from './forms/forms.module';
import { Observable } from 'rxjs';
import { AppLoadErrorHandler } from './core/utilities/app-reload-handler';

registerLocaleData(en);

function initializeApiFactory(httpClient: HttpClient): () => Observable<any> {
  return () => httpClient.get('/api/status');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    HttpClientXsrfModule,
    HttpClientJsonpModule,
    LoggerModule.forRoot({
      timestampFormat: 'mediumTime',
      level: !environment.production
        ? NgxLoggerLevel.TRACE
        : NgxLoggerLevel.OFF,
      enableSourceMaps: true,
      serverLogLevel: NgxLoggerLevel.ERROR,
    }),
    NgxJsonViewerModule,
    NzIconModule.forRoot(civicIcons),
    ReactiveComponentModule,
    TimeagoModule.forRoot({
      formatter: { provide: TimeagoFormatter, useClass: CivicTimeagoFormatter },
    }),
    CvcFormsModule,
    CvcNetworkErrorAlertModule,
  ],
  providers: [
    CookieService,
    {
      provide: ErrorHandler,
      useClass: AppLoadErrorHandler,
    },
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApiFactory,
      deps: [HttpClient],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
