import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class OrganizationsComponent {
  constructor() {}
}
