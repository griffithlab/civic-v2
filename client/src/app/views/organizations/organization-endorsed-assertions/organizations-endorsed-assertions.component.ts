import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'cvc-organizations-endorsed-assertions',
  templateUrl: './organizations-endorsed-assertions.component.html',
  styleUrls: ['./organizations-endorsed-assertions.component.less'],
  standalone: false,
})
export class OrganizationsEndorsedAssertionsComponent {
  organizationId: number

  constructor(private route: ActivatedRoute) {
    this.organizationId = +this.route.snapshot.params['organizationId']
  }
}
