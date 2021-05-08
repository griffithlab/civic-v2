import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

export interface CommentsParticipant {
    id: number
    username: string
    profileImagePath: Maybe<string>
}

@Component({
  selector: 'cvc-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.less']
})
export class ParticipantListComponent {
    @Input() participantList!: CommentsParticipant[]
    @Input() listTitle!: string

    @Output() participantSelectedEvent = new EventEmitter<Maybe<CommentsParticipant>>();

    selectedUser: Maybe<CommentsParticipant>

  constructor() { }

  onParticipantSelected(u: CommentsParticipant) {
      if (u.id == this.selectedUser?.id) {
        this.selectedUser = undefined
      } else {
        this.selectedUser = u
      }
      this.participantSelectedEvent.emit(this.selectedUser)
  }
}
