import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { EventFeedMode } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-users-events',
  templateUrl: './users-events.component.html',
  styleUrls: ['./users-events.component.less'],
})
export class UsersEventsComponent {
  userId: number
  mode = EventFeedMode.User

  constructor(private route: ActivatedRoute) {
    this.userId = +this.route.snapshot.params['userId']
  }
}
