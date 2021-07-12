import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cvc-organizations-events',
  templateUrl: './organizations-events.component.html',
  styleUrls: ['./organizations-events.component.less'],
})
export class OrganizationsEventsComponent {
  organizationId: number

  constructor(private route: ActivatedRoute) {
    this.organizationId = +this.route.snapshot.params['organizationId'];
  }
}
