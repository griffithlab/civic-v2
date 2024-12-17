import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
  selector: 'cvc-mp-form',
  templateUrl: './molecular-profile-revise-test.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class MolecularProfileReviseTestPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
