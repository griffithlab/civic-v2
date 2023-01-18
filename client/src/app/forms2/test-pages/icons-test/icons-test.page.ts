import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
  selector: 'cvc-nonstate-form',
  templateUrl: './icons-test.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsTestPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
