import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import { Maybe, PageInfo } from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators'

export type TableCountsInfo = {
  filteredCount: Maybe<number>
  edgeCount: number
  lastUpdated?: string
}

export type EntityConnection = {
  edges: Array<EntityEdge>
  nodes?: Array<object>
  pageCount: number
  filteredCount?: number
  totalCount?: number
  pageInfo: PageInfo
  lastUpdated?: string
}

export type EntityEdge = {
  cursor: string
  node?: object
}

@Component({
    selector: 'cvc-table-counts',
    templateUrl: './table-counts.component.html',
    styleUrls: ['./table-counts.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TableCountsComponent implements OnInit {
  @Input() cvcTableCountsConnection!: Observable<EntityConnection>
  tableCountsInfo$!: Observable<TableCountsInfo>

  private initialTotalCount!: number

  ngOnInit(): void {
    this.tableCountsInfo$ = this.cvcTableCountsConnection.pipe(
      filter((c) => c.totalCount != undefined || c.filteredCount != undefined),
      map((c: EntityConnection) => {
        const fc = c.filteredCount
        const tc = c.totalCount
        const edges = c.edges
        // Need to provide either filtered count or total count
        if (fc == undefined && tc == undefined) {
          console.log(
            'Need to provide either filtered count or total count in the table counts component'
          )
        }
        // If no filtered count, set filtered count to total count
        const filteredCount = fc == undefined ? tc : fc
        return {
          edgeCount: edges.length,
          filteredCount: filteredCount,
          lastUpdated: c.lastUpdated
        }
      })
    )
  }
}
