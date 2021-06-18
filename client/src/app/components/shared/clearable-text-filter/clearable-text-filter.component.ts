import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Maybe } from "@app/generated/civic.apollo";

@Component({
  selector: 'cvc-clearable-text-filter',
  templateUrl: './clearable-text-filter.component.html',
  styleUrls: ['./clearable-text-filter.component.less']
})
export class ClearableTextComponentFilter {
  @Input() placeholderText?: string
  @Input() onInputChanged?: () => void

  @Input() inputModel: Maybe<string>
  @Output() inputModelChange = new EventEmitter<Maybe<string>>()

  inputVal: Maybe<string>

  onModelUpdated() {
    this.inputModelChange.emit(this.inputVal)
    if (this.onInputChanged) {
      this.onInputChanged()
    }
  }
}
