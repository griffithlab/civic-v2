import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'variant-types-home',
  templateUrl: './variant-types-home.page.html',
  styleUrls: ['./variant-types-home.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class VariantTypesHomePage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
