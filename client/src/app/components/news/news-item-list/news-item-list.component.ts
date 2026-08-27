import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { NewsItemFieldsFragment } from '@app/generated/civic.apollo'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'

@Component({
  selector: 'cvc-news-item-list',
  templateUrl: './news-item-list.component.html',
  styleUrls: ['./news-item-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    NzAlertModule,
    NzButtonModule,
    NzCardModule,
    NzEmptyModule,
    NzGridModule,
    NzSkeletonModule,
  ],
})
export class NewsItemListComponent {
  @Input() items: NewsItemFieldsFragment[] = []
  @Input() loading = false
  @Input() errorMessage?: string

  @Output() retry = new EventEmitter<void>()
}
