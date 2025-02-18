import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'cvc-users-assertions',
  templateUrl: './users-assertions.component.html',
  styleUrls: ['./users-assertions.component.less'],
  standalone: false,
})
export class UsersAssertionsComponent {
  userId: number

  constructor(private route: ActivatedRoute) {
    this.userId = +this.route.snapshot.params['userId']
  }
}
