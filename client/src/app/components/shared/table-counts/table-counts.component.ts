import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Maybe, PageInfo } from '@app/generated/civic.apollo';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export type TableCountsInfo = {
  filteredCount: Maybe<number>
  edgeCount: number
}

export type EntityConnection = {
  edges: Array<EntityEdge>
  nodes: Array<object>
  pageCount: number
  filteredCount?: number
  totalCount: number
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
          // If no filtered count, set filtered count to total count
          const filteredCount = fc == undefined ? tc : fc
          return {
            edgeCount: edges.length,
            filteredCount: filteredCount
          }
        }));
  }

}
