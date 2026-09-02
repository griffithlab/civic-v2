import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'cvc-features-home',
  templateUrl: './features-home.page.html',
  styleUrls: ['./features-home.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class FeaturesHomePage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
