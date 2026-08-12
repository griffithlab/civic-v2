import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'diseases-home',
  templateUrl: './diseases-home.page.html',
  styleUrls: ['./diseases-home.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class DiseasesHomePage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
