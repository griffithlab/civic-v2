import { Component, ChangeDetectionStrategy } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'cvc-ai-banner',
  templateUrl: 'ai-banner.component.html',
  styleUrls: ['ai-banner.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink],
})
export class CvcAiBannerComponent {}
