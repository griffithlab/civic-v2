import { Component, Input } from '@angular/core'
import { MpParseErrorType } from '@app/core/utilities/molecular-profile-parser'

@Component({
  selector: 'cvc-mp-editor-popover-help',
  templateUrl: './mp-editor-popover-help.component.html',
  styles: ['.help-content { max-width: 500px; }'],
})
export class MpEditorPopoverHelpComponent {
  @Input() cvcErrorType?: MpParseErrorType // if undefined, will display 'getting started' help
}
