import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core'
import { Router } from '@angular/router'
import { MutationState } from '@app/core/utilities/mutation-state-wrapper'
import { Maybe } from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

@UntilDestroy()
@Component({
  selector: 'cvc-form-submission-status-display',
  templateUrl: './form-submission-status-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcFormSubmissionStatusDisplayComponent implements OnInit {
  private _mutationState?: MutationState
  private currentTimer?: ReturnType<typeof setTimeout>

  @Input() set mutationState(value: Maybe<MutationState>) {
    this._mutationState = value
    if (this.currentTimer) {
      clearTimeout(this.currentTimer)
    }

    if (value) {
      value.submitSuccess$.pipe(untilDestroyed(this)).subscribe((success) => {
        if (success) {
          this.currentTimer = setTimeout(() => {
            if (this.redirectUrl) {
              this.router.navigateByUrl(this.redirectUrl)
            }
          }, 2500)
        }
      })
    }
  }

  get mutationState(): Maybe<MutationState> {
    return this._mutationState
  }

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
    | 'Gene'
    | 'Variant Group'
    | 'Feature'

  @Input() successMessage?: TemplateRef<void>
  @Input() redirectUrl?: string

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
