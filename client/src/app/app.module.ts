import { BrowserModule } from '@angular/platform-browser'
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core'
import { registerLocaleData } from '@angular/common'
import en from '@angular/common/locales/en'
import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
  withJsonpSupport,
  withXsrfConfiguration,
} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LetDirective, PushPipe } from '@ngrx/component'
import { CookieService } from 'ngx-cookie-service'
import { civicIcons } from '@app/icons-provider.module'
import { NgxJsonViewerModule } from 'ngx-json-viewer'
import { NZ_I18N } from 'ng-zorro-antd/i18n'
import { en_US } from 'ng-zorro-antd/i18n'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { GraphQLModule } from '@app/graphql/graphql.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcNetworkErrorAlertModule } from './components/app/network-error-alert/network-error-alert.module'
import { Observable } from 'rxjs'
import { AppErrorHandler } from './core/utilities/app-error-handler'
import { CvcForms2Module } from '@app/forms/forms.module'

registerLocaleData(en)

function initializeApiFactory(httpClient: HttpClient): () => Observable<any> {
  return () => httpClient.get('/api/status')
}

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    GraphQLModule,
    NgxJsonViewerModule,
    NzIconModule.forRoot(civicIcons),
    CvcForms2Module,
    LetDirective,
    PushPipe,
    CvcNetworkErrorAlertModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler,
    },
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApiFactory,
      deps: [HttpClient],
      multi: true,
    },
    provideHttpClient(
      withInterceptorsFromDi(),
      withJsonpSupport(),
      withXsrfConfiguration({ cookieName: 'XSRF-TOKEN' })
    ),
  ],
})
export class AppModule {}
