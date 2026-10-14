import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'phenotypes-home',
  templateUrl: './phenotypes-home.page.html',
  styleUrls: ['./phenotypes-home.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PhenotypesHomePage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
