import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import {
  EntityTagsTestGQL,
  EntityTagsTestQuery,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { BehaviorSubject, filter, map, Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'
import { tag } from 'rxjs-spy/operators'

type LinkableEntityData = {
  __typename: string
  id: number
  name: string
  link: string
}

@UntilDestroy()
@Component({
    selector: 'cvc-nonstate-form',
    templateUrl: './tags-test.page.html',
    styleUrls: ['./tags-test.page.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TagsTestPage implements OnInit {
  emphasizeStr$ = new BehaviorSubject<string>('')
  queryParams = {
    molecularProfileId: 3133,
    geneId: 5,
    variantId: 2,
    therapyId: 16,
    diseaseId: 2198,
    eid: 123,
  }
  // entityTagsData$: Observable<EntityTagsTestQuery>
  entityTagsData$: Observable<LinkableEntityData[]>

  constructor(private entityTagsTestGQL: EntityTagsTestGQL) {
    this.entityTagsData$ = this.entityTagsTestGQL.fetch(this.queryParams).pipe(
      pluck('data'),
      filter(isNonNulled),
      tag('entityTagsData$'),
      map((response: EntityTagsTestQuery) => {
        console.log(response)
        const data = Object.values(response).filter(
          (v) => typeof v === 'object'
        ) as LinkableEntityData[]
        console.log(data)
        return data
      })
    )
  }

  tagChecked(event: any): void {
    console.log(`Tag checked: ${event}`)
  }

  ngOnInit(): void {}
}
