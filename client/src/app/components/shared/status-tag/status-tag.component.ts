import { Component, Input, OnInit } from '@angular/core'
import {
  EvidenceStatus,
  FlagState,
  Maybe,
  RevisionStatus,
} from '@app/generated/civic.apollo'

type StatusType = EvidenceStatus | RevisionStatus | FlagState

@Component({
  selector: 'cvc-status-tag',
  templateUrl: './status-tag.component.html',
  standalone: false,
})
export class CvcStatusTagComponent implements OnInit {
  private _status?: StatusType

  @Input() set status(value: Maybe<StatusType>) {
    this._status = value
    if (value) {
      this.tagStatus = this.statusColorMap[value]
    }
  }

  get status(): Maybe<StatusType> {
    return this._status
  }

  tagStatus?: string
  statusColorMap: {
    [key in EvidenceStatus | RevisionStatus | FlagState]: string
  } = {
    ACCEPTED: 'success',
    REJECTED: 'error',
    SUBMITTED: 'warning',
    NEW: 'processing',
    SUPERSEDED: 'default',
    OPEN: 'error',
    RESOLVED: 'default',
  }

  ngOnInit(): void {
    if (this.status === undefined) {
      throw new Error(
        'Must pass a valid EvidenceStatus, RevisionStatus, or FlagState to cvc-status-tag component'
      )
    }
  }
}
