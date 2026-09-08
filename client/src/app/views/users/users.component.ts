import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class UsersComponent {
  constructor() {}
}
