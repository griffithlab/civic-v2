import {
  Component,
  ContentChild,
  Input,
  OnInit,
  AfterViewInit,
  ElementRef,
  Renderer2,
  OnChanges,
} from '@angular/core'
import { FlaggableEntities, Maybe } from '@app/generated/civic.apollo'
import { CvcFlaggableOptionsDirective } from './flaggable-options.directive'

export interface FlaggableSubject {
  id: number
  entityType: FlaggableEntities
  displayName: string
  icon: string
}

@Component({
    selector: '[cvcFlaggable]',
    templateUrl: './flaggable.component.html',
    standalone: false
})
export class CvcFlaggableComponent implements AfterViewInit, OnChanges {
  @Input() flags?: Maybe<number>
  @Input() endorsements?: Maybe<number>
  @Input() entity?: Maybe<FlaggableSubject>
  @ContentChild(CvcFlaggableOptionsDirective, {
    static: false,
    read: ElementRef,
  })
  flaggedChild!: ElementRef

  constructor(private renderer: Renderer2) {}

  ngOnChanges(): void {
    (this.flags && this.flags > 0) || (this.endorsements && this.endorsements > 0) ? this.addFlagged() : this.removeFlagged()
  }

  ngAfterViewInit(): void {
    (this.flags && this.flags > 0) || (this.endorsements && this.endorsements > 0) ? this.addFlagged() : this.removeFlagged()
  }

  addFlagged(): void {
    if (this.flaggedChild) {
      this.renderer.addClass(this.flaggedChild.nativeElement, 'flaggedChild')
    }
  }

  removeFlagged(): void {
    if (this.flaggedChild) {
      this.renderer.removeClass(this.flaggedChild.nativeElement, 'flaggedChild')
    }
  }
}
