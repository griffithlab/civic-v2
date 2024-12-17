import { Component, OnInit } from '@angular/core'
import { DataReleasesGQL, ReleaseFragment } from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNotNullish } from 'rxjs-etc'
import { startWith, pluck, map, filter } from 'rxjs/operators'

@Component({
  selector: 'cvc-releases-main',
  templateUrl: './releases-main.component.html',
  styleUrls: ['./releases-main.component.less'],
  standalone: false,
})
export class ReleasesMainComponent implements OnInit {
  loading$?: Observable<boolean>
  releases$?: Observable<ReleaseFragment[]>

  constructor(private gql: DataReleasesGQL) {}

  ngOnInit(): void {
    let queryRef = this.gql.watch().valueChanges

    this.loading$ = queryRef.pipe(pluck('loading'), startWith(true))

    this.releases$ = queryRef.pipe(
      pluck('data'),
      filter(isNotNullish),
      map((releases) => releases.dataReleases)
    )
  }
}
