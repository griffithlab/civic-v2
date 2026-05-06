import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'cvc-users-evidence',
    templateUrl: './users-evidence.component.html',
    styleUrls: ['./users-evidence.component.less'],
    standalone: false
})
export class UsersEvidenceComponent {
  userId: number

  constructor(private route: ActivatedRoute) {
    this.userId = +this.route.snapshot.params['userId']
  }
}
