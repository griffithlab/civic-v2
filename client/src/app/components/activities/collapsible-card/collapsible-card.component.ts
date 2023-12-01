import { ChangeDetectionStrategy, Component, Input, TemplateRef } from "@angular/core";
import { Observable, Subject, Subscription, pipe, scan, startWith } from "rxjs";


@Component({
    selector: 'cvc-collapsible-card',
    templateUrl: './collapsible-card.component.html',
    styleUrls: ['./collapsible-card.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
export class CvcCollapsibleCardComponent {
  @Input() header?: TemplateRef<any>
  @Input() contents?: TemplateRef<any>

  toggle$ = new Subject<void>()
  
  isOpen$ = this.toggle$.pipe(
    scan((state, _) => !state, false),
    startWith(false)
  )
}