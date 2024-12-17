import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'cvc-organizations-assertions',
  templateUrl: './organizations-assertions.component.html',
  styleUrls: ['./organizations-assertions.component.less'],
  standalone: false,
})
export class OrganizationsAssertionsComponent {
  organizationId: number

  constructor(private route: ActivatedRoute) {
    this.organizationId = +this.route.snapshot.params['organizationId']
  }
}
