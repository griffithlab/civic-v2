import { ChangeDetectionStrategy, Component } from '@angular/core'
import { environment } from 'environments/environment'
import { NzAlertModule } from 'ng-zorro-antd/alert'

@Component({
  selector: 'cvc-environment-banner',
  templateUrl: './environment-banner.component.html',
  styleUrls: ['./environment-banner.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NzAlertModule],
})
export class CvcEnvironmentBannerComponent {
  isProduction = environment.production
}
