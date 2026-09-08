import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'organizations-home',
  templateUrl: './organizations-home.page.html',
  styleUrls: ['./organizations-home.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class OrganizationsHomePage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
