import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core'
import { labelSegments } from '@app/tags'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcSelectNotFoundDisplay } from './select-messages'

/** nz-select's notFound slot: searching/empty message with an optional spinner. */
@Component({
  selector: 'cvc-select-messages',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzIconModule],
  template: `
    @if (display().showSpinner) {
      <nz-icon nzType="loading" />
    }
    {{ display().message }}
  `,
})
export class CvcSelectMessagesComponent {
  readonly display = input.required<CvcSelectNotFoundDisplay>()
}

/** Chrome around a quick-add form rendered in nz-select's dropdown footer. */
@Component({
  selector: 'cvc-select-add-form',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzDividerModule],
  template: `
    <nz-divider />
    <div class="add-form-container"><ng-content /></div>
  `,
  styles: `
    nz-divider {
      margin: 4px 0 0 0;
    }
    .add-form-container {
      padding: 4px 8px 8px 8px;
    }
  `,
})
export class CvcSelectAddFormComponent {}

/**
 * Renders option metadata with the typeahead query emphasized. Segment spans
 * replace the old highlightTypeahead pipe, which built a RegExp from unescaped
 * user input and rendered it through bypassSecurityTrustHtml.
 */
@Component({
  selector: 'cvc-highlight',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `@for (segment of segments(); track $index) {
    <span [class.typeahead-match]="segment.highlight">{{ segment.text }}</span>
  }`,
  styles: `
    .typeahead-match {
      font-weight: bold;
    }
  `,
})
export class CvcHighlightComponent {
  readonly text = input.required<string>()
  readonly emphasize = input<string | undefined>(undefined)
  protected readonly segments = computed(() =>
    labelSegments(this.text(), this.emphasize())
  )
}
