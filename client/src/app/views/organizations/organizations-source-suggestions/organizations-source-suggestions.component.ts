import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'cvc-organizations-source-suggestions',
  templateUrl: './organizations-source-suggestions.component.html',
  styleUrls: ['./organizations-source-suggestions.component.less'],
  standalone: false,
})
export class OrganizationsSourceSuggestionsComponent {
  userId: number

  constructor(private route: ActivatedRoute) {
    this.userId = +this.route.snapshot.params['userId']
  }
}
