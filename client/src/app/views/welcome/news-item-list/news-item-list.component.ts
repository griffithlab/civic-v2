import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

type NewsItemLink = {
  url: string
  label?: string
}
export type CvcNewsItem = {
  title: string
  date: string // Date() parseable string
  text?: string
  htmlText?: string
  link?: NewsItemLink
  imageUrl?: string
}

@Component({
  selector: 'cvc-news-item-list',
  templateUrl: './news-item-list.component.html',
  styleUrls: ['./news-item-list.component.less'],
  standalone: false,
})
export class NewsItemListComponent {
  @Input() cvcNewsItems?: CvcNewsItem[]
}
