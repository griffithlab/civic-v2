import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'cvc-login-prompt',
  templateUrl: './login-prompt.component.html',
  styleUrls: ['./login-prompt.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CvcLoginPromptComponent {}
