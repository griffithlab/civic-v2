import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  WritableSignal,
  signal,
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  CoordinateIdsForVariantGQL,
  ModeratedEntities,
  ModeratedInput,
  VariantCoordinateIdsFragment,
} from '@app/generated/civic.apollo'
import { Subscription } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/dist/esm/operators'
import { filter, map } from 'rxjs/operators'

interface RevisionsTab {
  name: string
  moderated: ModeratedInput
}

@Component({
  selector: 'cvc-variants-revisions',
  templateUrl: './variants-revisions.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantsRevisionsPage implements OnDestroy, OnInit {
  routeSub?: Subscription
  coordsSub?: Subscription

  tabs: WritableSignal<RevisionsTab[]> = signal([])

  constructor(
    private gql: CoordinateIdsForVariantGQL,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params
      .pipe(
        filter(isNonNulled),
        map((params) => +params.variantId),
        filter(isNonNulled)
      )
      .subscribe((variantId) => {
        this.tabs.set([
          {
            name: 'Variant Fields',
            moderated: {
              id: variantId,
              entityType: ModeratedEntities.Variant,
            },
          },
        ])

        this.coordsSub = this.gql
          .fetch({ variantId: variantId }, { fetchPolicy: 'no-cache' })
          .pipe(
            filter(isNonNulled),
            pluck('data', 'variant'),
            filter(isNonNulled)
          )
          .subscribe((variant) => {
            this.updateTabs(variant)
          })
      })
  }

  updateTabs(variant: VariantCoordinateIdsFragment) {
    if (variant.__typename == 'GeneVariant') {
      this.tabs.set([
        ...this.tabs(),
        {
          name: 'Variant Coordinates',
          moderated: {
            id: variant.coordinates.id,
            entityType: ModeratedEntities.VariantCoordinates,
          },
        },
      ])
    }
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe()
    this.coordsSub?.unsubscribe()
  }
}
