import { Component, Input, OnInit} from '@angular/core';
import { Organization, Revision } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-revision-list',
  templateUrl: './revision-list.component.html',
  styleUrls: ['./revision-list.component.less']
})
export class RevisionListComponent implements OnInit{
  @Input() revisions!: Revision[]
  @Input() mostRecentOrg?: Organization
  constructor() { }

  ngOnInit(): void {
    if (this.revisions === undefined) {
      throw new Error("Must specify a list of revisions.")
    }
  }
}
