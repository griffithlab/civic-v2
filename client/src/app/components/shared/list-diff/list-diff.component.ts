import { Component, Input, ContentChild, TemplateRef, OnInit} from '@angular/core';

export interface WithId {
  id: unknown
}

@Component({
  selector: 'cvc-list-diff',
  templateUrl: './list-diff.component.html',
  styleUrls: ['./list-diff.component.less']
})
export class ListDiffComponent<T extends WithId> implements OnInit{
    @Input() removed!: T[]
    @Input() added!: T[]
    @Input() final!: T[]
    @Input() entityType!: string

    //Must pass in an <ng-template #itemTemplate> as a child element
    @ContentChild('itemTemplate') itemTemplateRef?: TemplateRef<any>
  constructor() { }

  ngOnInit(): void {
    if (this.removed === undefined) {
      throw new Error('Must specify a list of removed items.');
    }
    if (this.added === undefined) {
      throw new Error("Must specify a list of added items.")
    }
    if (this.final === undefined) {
      throw new Error("Must specify a list of final items.")
    }
    if (this.entityType === undefined) {
      throw new Error("Must specify an entityType.")
    }
  }
}
