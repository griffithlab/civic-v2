import { Component, ChangeDetectionStrategy } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'cvc-license-banner',
  templateUrl: 'license-banner.component.html',
  styleUrls: ['license-banner.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink],
})
export class CvcLicenseBannerComponent {}
