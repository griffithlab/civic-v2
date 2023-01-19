import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
  selector: 'cvc-nonstate-form',
  templateUrl: './tags-test.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsTestPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
