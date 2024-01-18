import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'cvc-activity-item',
  standalone: true,
  imports: [],
  templateUrl: './activity-item.component.html',
  styleUrl: './activity-item.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityItem {}
