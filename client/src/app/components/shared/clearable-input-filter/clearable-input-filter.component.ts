import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'

@Component({
    selector: 'cvc-clearable-input-filter',
    templateUrl: './clearable-input-filter.component.html',
    styleUrls: ['./clearable-input-filter.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcClearableInputFilterComponent {
  @Input() placeholderText?: Maybe<string>
  @Input() onInputChanged?: () => void

  @Input() inputModel: Maybe<string>
  @Output() inputModelChange = new EventEmitter<Maybe<string>>()

  inputVal: Maybe<string>

  onModelUpdated() {
    if (this.inputModel != '') {
      this.inputModelChange.emit(this.inputModel)
    } else {
      this.inputModelChange.emit(undefined)
    }
    if (this.onInputChanged) {
      this.onInputChanged()
    }
  }
}
