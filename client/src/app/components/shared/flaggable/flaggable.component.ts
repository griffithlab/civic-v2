import { Component, ContentChild, Input, OnInit, AfterViewInit, ElementRef, Renderer2, OnChanges } from '@angular/core';
import { Flag, FlaggableEntities } from '@app/generated/civic.apollo';
import { FlaggableOptionsDirective } from './flaggable-options.directive';

export interface FlaggableSubject {
  id: number,
  entityType: FlaggableEntities,
  displayName: string,
  icon: string
}

@Component({
  selector: '[cvcFlaggable]',
  templateUrl: './flaggable.component.html',
  styleUrls: ['./flaggable.component.less']
})
export class FlaggableComponent implements AfterViewInit, OnChanges {
  // TODO: figure out why null option required here for flags Input
  // to avoid "Type 'number | null' is not assignable to type 'number'."
  // error when provided Observable<number> returning of(flags { totalCount })
  // in gene-details template
  @Input() flags!: number | null;
  @Input() entity!: FlaggableSubject;
  @ContentChild(FlaggableOptionsDirective,
                {static: false, read: ElementRef}) flaggedChild!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnChanges(): void {
    (this.flags && this.flags === 0) ? this.removeFlagged() : this.addFlagged();
  }

  ngAfterViewInit(): void {
    (this.flags && this.flags === 0) ? this.removeFlagged() : this.addFlagged();
  }

  addFlagged(): void {
    if(this.flaggedChild) {
      this.renderer.addClass(this.flaggedChild.nativeElement, 'flaggedChild');
    }
  }

  removeFlagged(): void {
    if (this.flaggedChild) {
      this.renderer.removeClass(this.flaggedChild.nativeElement, 'flaggedChild');
    }
  }
}
