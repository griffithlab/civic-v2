import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'cvc-attribute-tag',
  templateUrl: './attribute-tag.component.html',
  styleUrls: ['./attribute-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcAttributeTagComponent {
  @Input() cvcAttrValue!: any
  @Input() iconPropertyType?: 'clinical-significance' | 'type'

  @Input() cvcShowLabel: boolean = true
  @Input() cvcShowTooltip: boolean = true
  @Input() showIcon: boolean = true
}
