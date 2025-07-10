import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'cvc-assertions-endorsements',
  templateUrl: './assertions-endorsements.page.html',
  styleUrls: ['./assertions-endorsements.page.less'],
  standalone: false,
})
export class AssertionsEndorsementsPage {
  assertionId: number

  constructor(private route: ActivatedRoute) {
    this.assertionId = +this.route.snapshot.params['assertionId']
  }
}
