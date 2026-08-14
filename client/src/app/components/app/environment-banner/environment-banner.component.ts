import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { toSignal } from '@angular/core/rxjs-interop'
import { catchError, of, tap } from 'rxjs'
import { environment } from 'environments/environment'
import { NzAlertModule } from 'ng-zorro-antd/alert'

interface ServerConfig {
  displayEnvBanner: boolean
  env: string
  status: string
}

@Component({
  selector: 'cvc-environment-banner',
  templateUrl: './environment-banner.component.html',
  styleUrls: ['./environment-banner.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NzAlertModule],
})
export class CvcEnvironmentBannerComponent {
  // fetched here rather than in a blocking app initializer so first paint
  // doesn't wait on the /api/status round-trip; a failed request just leaves
  // the banner hidden
  private serverConfig = toSignal(
    inject(HttpClient)
      .get<ServerConfig>('/api/status')
      .pipe(
        tap((config) => {
          environment.displayEnvBanner = config.displayEnvBanner
          environment.backendEnv = config.env
        }),
        catchError(() => of(undefined))
      )
  )
  displayBanner = computed(() => this.serverConfig()?.displayEnvBanner ?? false)
  displayMsg = computed(
    () => `You are in the ${this.serverConfig()?.env} environment`
  )
}
