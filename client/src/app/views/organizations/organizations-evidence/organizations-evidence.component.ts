import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'cvc-organizations-evidence',
    templateUrl: './organizations-evidence.component.html',
    styleUrls: ['./organizations-evidence.component.less'],
    standalone: false
})
export class OrganizationsEvidenceComponent {
  organizationId: number

  constructor(private route: ActivatedRoute) {
    this.organizationId = +this.route.snapshot.params['organizationId']
  }
}
