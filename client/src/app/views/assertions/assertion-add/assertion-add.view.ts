import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'cvc-assertion-add',
  templateUrl: './assertion-add.view.html',
  styleUrls: ['./assertion-add.view.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AssertionAddView implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
