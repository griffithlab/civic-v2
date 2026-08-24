import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'cvc-pages-help',
  templateUrl: './pages-help.page.html',
  styleUrls: ['./pages-help.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PagesHelpPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
