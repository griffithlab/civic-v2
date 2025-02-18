import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'cvc-users-source-suggestions',
  templateUrl: './users-source-suggestions.component.html',
  styleUrls: ['./users-source-suggestions.component.less'],
  standalone: false,
})
export class UsersSourceSuggestionsComponent {
  userId: number

  constructor(private route: ActivatedRoute) {
    this.userId = +this.route.snapshot.params['userId']
  }
}
