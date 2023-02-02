import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core'
import { MutationState } from '@app/core/utilities/mutation-state-wrapper'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'cvc-form-submission-status-display',
  templateUrl: './form-submission-status-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcFormSubmissionStatusDisplayComponent implements OnInit {
  @Input() mutationState?: MutationState

  @Input() entityType?:
    | 'Assertion'
    | 'Disease'
    | 'Evidence Item'
    | 'Source Suggestion'
    | 'Revision'
    | 'Molecular Profile'
    | 'Source'
    | 'Variant'
    | 'Comment'
  @Input() successMessage?: TemplateRef<void>

  ngOnInit(): void {}
}
