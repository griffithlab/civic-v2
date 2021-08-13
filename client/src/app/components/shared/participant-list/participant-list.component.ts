import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef} from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

export interface WithId {
  id: number
}

@Component({
  selector: 'cvc-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.less']
})
export class CvcParticipantListComponent<T extends WithId> {
    @Input() participantList!: T[]
    @Input() listTitle!: string

    @Output() participantSelectedEvent = new EventEmitter<Maybe<T>>();

    //Must pass in an <ng-template #itemTemplate> as a child element
    @ContentChild('itemTemplate') itemTemplateRef?: TemplateRef<any>

    selectedItem: Maybe<T>

  constructor() { }

  onParticipantSelected(u: T) {
      if (u.id == this.selectedItem?.id) {
        this.selectedItem = undefined
      } else {
        this.selectedItem = u
      }
      this.participantSelectedEvent.emit(this.selectedItem)
  }
}
