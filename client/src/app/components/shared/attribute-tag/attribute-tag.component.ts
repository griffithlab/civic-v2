import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InputEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';

@Component({
  selector: 'cvc-attribute-tag',
  templateUrl: './attribute-tag.component.html',
  styleUrls: ['./attribute-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcAttributeTagComponent {
  @Input() cvcAttribute!: InputEnum;
  constructor() { }

}
