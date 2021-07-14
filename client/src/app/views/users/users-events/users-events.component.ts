import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cvc-users-events',
  templateUrl: './users-events.component.html',
  styleUrls: ['./users-events.component.less'],
})
export class UsersEventsComponent {
  userId: number

  constructor(private route: ActivatedRoute) {
    this.userId = +this.route.snapshot.params['userId'];
  }
}
