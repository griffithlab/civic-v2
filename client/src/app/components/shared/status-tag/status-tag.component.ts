import { Component, Input, OnInit } from '@angular/core';
import { EvidenceStatus, FlagState, RevisionStatus } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-status-tag',
  templateUrl: './status-tag.component.html',
  styleUrls: ['./status-tag.component.less']
})
export class CvcStatusTagComponent implements OnInit {
  @Input() status?: EvidenceStatus | RevisionStatus | FlagState; // TODO update to accept AssertionStatus when available

  tagStatus?: string;
  statusColorMap: { [key in EvidenceStatus | RevisionStatus | FlagState]: string} = {
    'ACCEPTED': 'success',
    'REJECTED': 'error',
    'SUBMITTED': 'warning',
    'NEW': 'processing',
    'SUPERSEDED': 'default',
    'OPEN': 'error',
    'RESOLVED': 'default',
  }

  constructor() { }

  ngOnInit(): void {
    if (this.status === undefined) {
      throw new Error("Must pass a valid EvidenceStatus or RevisionStatus to cvc-status-tag component");
    }

    this.tagStatus = this.statusColorMap[this.status];
  }

}
