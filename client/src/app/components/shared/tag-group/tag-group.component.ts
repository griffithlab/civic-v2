import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'cvc-tag-group',
  templateUrl: './tag-group.component.html',
  styleUrls: ['./tag-group.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CvcTagGroupComponent {
  constructor() {}
}
