import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  TemplateRef,
  OnInit,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'

export interface WithId {
  id: unknown
}

@Component({
  selector: 'cvc-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.less'],
  standalone: false,
})
export class CvcParticipantListComponent<T extends WithId> implements OnInit {
  @Input() participantList!: T[]
  @Input() listTitle!: string
  @Input() defaultListSize: number = 5
  @Input() preselectedOption?: T

  @Output() participantSelectedEvent = new EventEmitter<Maybe<T>>()

  //Must pass in an <ng-template #itemTemplate> as a child element
  @ContentChild('itemTemplate') itemTemplateRef?: TemplateRef<any>

  selectedItem: Maybe<T>
  originalDefaultListSize: Maybe<number>
  isExpanded = false

  constructor() {}

  ngOnInit() {
    if (this.preselectedOption) {
      this.selectedItem = this.preselectedOption
    }
  }

  onParticipantSelected(u: T) {
    if (u.id == this.selectedItem?.id) {
      this.selectedItem = undefined
    } else {
      this.selectedItem = u
    }
    this.participantSelectedEvent.emit(this.selectedItem)
  }

  onExpandClicked() {
    this.originalDefaultListSize = this.defaultListSize
    this.defaultListSize = this.participantList.length
    this.isExpanded = true
  }

  onCollapseClicked() {
    if (this.originalDefaultListSize) {
      this.defaultListSize = this.originalDefaultListSize
      this.isExpanded = false
    }
  }
}
