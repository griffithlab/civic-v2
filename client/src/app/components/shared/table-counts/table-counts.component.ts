import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

export type TableCountsConnection = {
  totalCount: number
  filteredCount: Maybe<number>
  nodeCount: number
}

@Component({
  selector: 'cvc-table-counts',
  templateUrl: './table-counts.component.html',
  styleUrls: ['./table-counts.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableCountsComponent implements OnInit {
  _connection!: TableCountsConnection
  @Input()
  set cvcConnection(tc: TableCountsConnection) {
    this._connection = this.setFilteredCount(tc)
  }
  get cvcConnection(): TableCountsConnection {
    return this._connection
  }

  @Output() cvcTableCounts = new EventEmitter<TableCountsConnection>()

  private initialTotalCount!: number

  constructor() { }

  setFilteredCount({
    totalCount: tc,
    filteredCount: fc,
    nodeCount: nc
  }: TableCountsConnection): TableCountsConnection {
    // if no filtered count, and an initial total count has
    // not been set, set it to total count
    if(!fc && !this.initialTotalCount) this.initialTotalCount = tc
    // if the current total is less than the initial total,
    // set total count to initial total count.
    // If no filtered count, set filtered count to current total count
    const itc = this.initialTotalCount
    return {
      totalCount: (itc && tc < itc) ? itc : tc,
      nodeCount: nc,
      filteredCount: fc ? fc : tc
    }
  }

  ngOnInit(): void {
  }

}
