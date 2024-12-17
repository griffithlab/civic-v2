import { Component, Input, OnInit } from '@angular/core'
import {
  Maybe,
  MolecularProfilePopoverFieldsFragment,
  MolecularProfilePopoverGQL,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-molecular-profile-popover',
  templateUrl: './molecular-profile-popover.component.html',
  styleUrls: ['./molecular-profile-popover.component.less'],
  standalone: false,
})
export class CvcMolecularProfilePopoverComponent implements OnInit {
  @Input() molecularProfileId!: number

  molecularProfile$?: Observable<Maybe<MolecularProfilePopoverFieldsFragment>>

  constructor(private gql: MolecularProfilePopoverGQL) {}

  ngOnInit() {
    if (this.molecularProfileId === undefined) {
      throw new Error(
        'Must pass a molecular profile ID into the molecular profile popover component.'
      )
    }

    this.molecularProfile$ = this.gql
      .watch({ molecularProfileId: this.molecularProfileId })
      .valueChanges.pipe(
        map(({ data }) => data?.molecularProfile),
        filter(isNonNulled)
      )
  }
}
