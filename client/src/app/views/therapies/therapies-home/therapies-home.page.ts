import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'therapies-home',
  templateUrl: './therapies-home.page.html',
  styleUrls: ['./therapies-home.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TherapiesHomePage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
