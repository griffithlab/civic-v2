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
  openCount: number
}

@Component({
  selector: 'cvc-variants-revisions',
  templateUrl: './variants-revisions.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
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
            openCount: 0,
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
    //the open revision count reported from the server includes revisions to coordinate fields
    //so we have to do some math here to get the correct number just for the variant fields tab
    let currentTabs = this.tabs()
    if (variant.__typename == 'GeneVariant' && variant.coordinates) {
      currentTabs[0].openCount =
        variant.openRevisionCount - variant.coordinates.openRevisionCount
      currentTabs.push({
        name: 'Variant Coordinates',
        openCount: variant.coordinates.openRevisionCount,
        moderated: {
          id: variant.coordinates.id,
          entityType: ModeratedEntities.VariantCoordinates,
        },
      })
    } else if (variant.__typename == 'FusionVariant') {
      let variantFieldCount = variant.openRevisionCount
      if (variant.fivePrimeEndExonCoordinates) {
        variantFieldCount -=
          variant.fivePrimeEndExonCoordinates.openRevisionCount
        currentTabs.push({
          name: "5' Exon End Coordinates",
          openCount: variant.fivePrimeEndExonCoordinates.openRevisionCount,
          moderated: {
            id: variant.fivePrimeEndExonCoordinates.id,
            entityType: ModeratedEntities.ExonCoordinates,
          },
        })
      }
      if (variant.threePrimeStartExonCoordinates) {
        variantFieldCount -=
          variant.threePrimeStartExonCoordinates.openRevisionCount
        currentTabs.push({
          name: "3' Exon Start Coordinates",
          openCount: variant.threePrimeStartExonCoordinates.openRevisionCount,
          moderated: {
            id: variant.threePrimeStartExonCoordinates.id,
            entityType: ModeratedEntities.ExonCoordinates,
          },
        })
      }
      currentTabs[0].openCount = variantFieldCount
    }
    this.tabs.set(currentTabs)
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe()
    this.coordsSub?.unsubscribe()
  }
}
