import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ModeratedEntities, ModeratedInput } from '@app/generated/civic.apollo'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-assertions-revisions',
  templateUrl: './assertions-revisions.page.html',
  standalone: false,
})
export class AssertionsRevisionsPage implements OnInit {
  subject!: ModeratedInput

  routeSub: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.subject = {
        id: +params.assertionId,
        entityType: ModeratedEntities['Assertion'],
      }
    })
  }
  ngOnInit(): void {}
}
