import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'users-home',
  templateUrl: './users-home.page.html',
  styleUrls: ['./users-home.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class UsersHomePage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
