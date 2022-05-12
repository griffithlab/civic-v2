import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Maybe, PageInfo } from '@app/generated/civic.apollo';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export type TableCountsInfo = {
  totalCount: number
  filteredCount: Maybe<number>
  edgeCount: number
}

export type EntityConnection = {
  edges: Array<EntityEdge>
  nodes: Array<object>
  pageCount: number
  totalCount: number
  filteredCount?: number
  pageInfo: PageInfo
}

export type EntityEdge = {
  cursor: string
  node?: object
}

@Component({
  selector: 'cvc-table-counts',
  templateUrl: './table-counts.component.html',
  styleUrls: ['./table-counts.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableCountsComponent implements OnInit {
  @Input() cvcTableCountsConnection!: Observable<EntityConnection>
  tableCountsInfo$!: Observable<TableCountsInfo>

  private initialTotalCount!: number

  ngOnInit(): void {
    this.tableCountsInfo$ = this.cvcTableCountsConnection
      .pipe(filter((c) => c.totalCount !== undefined),
        map((c: EntityConnection) => {
          const { filteredCount: fc, totalCount: tc, edges } = c
          // if no filtered count, and an initial total count has
          // not been set, set it to total count
          if (!fc && !this.initialTotalCount) this.initialTotalCount = tc
          const itc = this.initialTotalCount
          return {
            edgeCount: edges.length,
            // if the current total is less than the initial total,
            // set total count to initial total count.
            totalCount: (itc && tc < itc) ? itc : tc,
            // If no filtered count, set filtered count to current total count
            filteredCount: fc ? fc : tc
          }
        }));
  }

}
