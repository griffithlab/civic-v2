import { Component, Input, OnInit } from '@angular/core'
import {
  Maybe,
  PhenotypePopover,
  PhenotypePopoverGQL,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
    selector: 'cvc-phenotype-popover',
    templateUrl: './phenotype-popover.component.html',
    styleUrls: ['./phenotype-popover.component.less'],
    standalone: false
})
export class CvcPhenotypePopoverComponent implements OnInit {
  @Input() phenotypeId!: number

  phenotype$?: Observable<Maybe<PhenotypePopover>>

  constructor(private gql: PhenotypePopoverGQL) {}

  ngOnInit() {
    if (this.phenotypeId == undefined) {
      throw new Error('cvc-phenotype-popover requires valid phenotypeId input.')
    }
    this.phenotype$ = this.gql
      .watch({ phenotypeId: this.phenotypeId })
      .valueChanges.pipe(
        map(({ data }) => data?.phenotypePopover),
        filter(isNonNulled)
      )
  }
}
