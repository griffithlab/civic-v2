import { Component, Input, OnInit } from '@angular/core';
import { EvidenceStatus } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-status-tag',
  templateUrl: './status-tag.component.html',
  styleUrls: ['./status-tag.component.less']
})
export class StatusTagComponent implements OnInit {
  @Input() status?: EvidenceStatus; // TODO update to accept AssertionStatus when available

  tagStatus?: string;
  statusColorMap: { [key in EvidenceStatus]: string} = {
    'ACCEPTED': 'success',
    'REJECTED': 'error',
    'SUBMITTED': 'warning'
  }

  constructor() { }

  ngOnInit(): void {
    if (this.status === undefined) {
      throw new Error("Must pass a valid EvidenceStatus to cvc-status-tag component");
    }

    this.tagStatus = this.statusColorMap[this.status];
  }

}
