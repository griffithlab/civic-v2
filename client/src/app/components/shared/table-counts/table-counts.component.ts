import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

export type TableCountsInfo = {
  totalCount: number
  filteredCount: Maybe<number>
  edgeCount: number
}

@Component({
  selector: 'cvc-table-counts',
  templateUrl: './table-counts.component.html',
  styleUrls: ['./table-counts.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableCountsComponent implements OnInit {
  _counts!: TableCountsInfo
  @Input()
  set cvcTableCountsInfo(tc: TableCountsInfo) {
    if(tc) this._counts = this.setCounts(tc)
  }
  get cvcTableCountsInfo(): TableCountsInfo {
    return this._counts
  }

  @Output() cvcTableCounts = new EventEmitter<TableCountsInfo>()

  private initialTotalCount!: number

  constructor() { }

  setCounts({
    totalCount: tc,
    filteredCount: fc,
    edgeCount: ec
  }: TableCountsInfo): TableCountsInfo {
    // if no filtered count, and an initial total count has
    // not been set, set it to total count
    if(!fc && !this.initialTotalCount) this.initialTotalCount = tc
    const itc = this.initialTotalCount
    const counts = {
      edgeCount: ec,
    // if the current total is less than the initial total,
    // set total count to initial total count.
      totalCount: (itc && tc < itc) ? itc : tc,
    // If no filtered count, set filtered count to current total count
      filteredCount: fc ? fc : tc
    }
    return counts
  }

  ngOnInit(): void {
  }

}
