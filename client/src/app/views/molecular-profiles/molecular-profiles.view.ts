import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-molecular-profiles',
  templateUrl: './molecular-profiles.view.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class MolecularProfilesView {
  constructor() {}
}
