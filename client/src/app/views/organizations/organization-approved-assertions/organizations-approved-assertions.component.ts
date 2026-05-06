import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'cvc-organizations-approved-assertions',
  templateUrl: './organizations-approved-assertions.component.html',
  styleUrls: ['./organizations-approved-assertions.component.less'],
  standalone: false,
})
export class OrganizationsApprovedAssertionsComponent {
  organizationId: number

  constructor(private route: ActivatedRoute) {
    this.organizationId = +this.route.snapshot.params['organizationId']
  }
}
