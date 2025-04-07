import { BrowserModule } from '@angular/platform-browser'
import {
  ErrorHandler,
  inject,
  NgModule,
  provideAppInitializer,
} from '@angular/core'
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
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcNetworkErrorAlertModule } from './components/app/network-error-alert/network-error-alert.module'
import { firstValueFrom, Observable, tap } from 'rxjs'
import { AppErrorHandler } from './core/utilities/app-error-handler'
import { CvcForms2Module } from '@app/forms/forms.module'
import { graphqlProvider } from './graphql/graphql.module'
import { CvcEnvironmentBannerComponent } from './components/app/environment-banner/environment-banner.component'
import { environment } from 'environments/environment'

registerLocaleData(en)

interface ServerConfig {
  displayEnvBanner: boolean
  env: string
  status: string
}

const initlializerProvider = provideAppInitializer(() => {
  const http = inject(HttpClient)
  return firstValueFrom(
    http.get<ServerConfig>('/api/status').pipe(
      tap((config) => {
        environment.displayEnvBanner = config.displayEnvBanner
        environment.backendEnv = config.env
      })
    )
  )
})

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgxJsonViewerModule,
    NzIconModule.forRoot(civicIcons),
    CvcForms2Module,
    LetDirective,
    PushPipe,
    CvcNetworkErrorAlertModule,
    CvcEnvironmentBannerComponent,
  ],
  providers: [
    initlializerProvider,
    graphqlProvider,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler,
    },
    { provide: NZ_I18N, useValue: en_US },
    provideHttpClient(
      withInterceptorsFromDi(),
      withJsonpSupport(),
      withXsrfConfiguration({ cookieName: 'XSRF-TOKEN' })
    ),
  ],
})
export class AppModule {}
