import { Component, ChangeDetectionStrategy } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'cvc-discover-banner',
  templateUrl: 'discover-banner.component.html',
  styleUrls: ['discover-banner.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink],
})
export class CvcDiscoverBannerComponent {}
