import { Component, Input } from '@angular/core'
import { MpParseErrorType } from '@app/core/utilities/molecular-profile-parser'

@Component({
    selector: 'cvc-mp-editor-popover-help',
    templateUrl: './mp-editor-popover-help.component.html',
    styles: [
        '.help-content { max-width: 500px; } blockquote { margin-left: 1em; }',
    ],
    standalone: false
})
export class MpEditorPopoverHelpComponent {
  @Input() cvcErrorType?: // if undefined, will display 'getting started' help
  MpParseErrorType | 'identicalVariants' | 'unknownVariant'
}
