import { Component, Input, OnInit } from '@angular/core'
import {
  ContributorAvatarsGQL,
  ContributorFieldsFragment,
  Maybe,
  SubscribableInput,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { pluck } from 'rxjs-etc/operators'

@Component({
  selector: 'cvc-contributor-avatars',
  templateUrl: './contributor-avatars.component.html',
  styleUrls: ['./contributor-avatars.component.less'],
  standalone: false,
})
export class CvcContributorAvatarsComponent implements OnInit {
  @Input() subscribable: Maybe<SubscribableInput>

  curators$?: Observable<Maybe<ContributorFieldsFragment[]>>
  editors$?: Observable<Maybe<ContributorFieldsFragment[]>>

  constructor(private gql: ContributorAvatarsGQL) {}

  ngOnInit(): void {
    if (this.subscribable === undefined) {
      throw new Error(
        'Must pass a subscribable into ContributorAvatars component.'
      )
    }

    let observable = this.gql.watch({
      subscribable: this.subscribable,
    }).valueChanges

    this.curators$ = observable.pipe(pluck('data', 'contributors', 'curators'))

    this.editors$ = observable.pipe(pluck('data', 'contributors', 'editors'))
  }
}
