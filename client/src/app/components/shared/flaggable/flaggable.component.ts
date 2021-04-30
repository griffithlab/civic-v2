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
  @Input() flags!: number;
  @Input() entity!: FlaggableSubject;
  @ContentChild(FlaggableOptionsDirective,
                {static: false, read: ElementRef}) flagged!: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnChanges(): void {
    this.flags === 0 ? this.removeFlagged() : this.addFlagged();
  }

  ngAfterViewInit(): void {
    this.flags === 0 ? this.removeFlagged() : this.addFlagged();
  }

  addFlagged(): void {
    if(this.flagged) {
      this.renderer.addClass(this.flagged.nativeElement, 'flagged');
    }
  }

  removeFlagged(): void {
    if (this.flagged) {
      this.renderer.removeClass(this.flagged.nativeElement, 'flagged');
    }
  }
}
