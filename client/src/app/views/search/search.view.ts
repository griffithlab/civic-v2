import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-search',
  templateUrl: './search.view.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./search.view.less'],
})
export class SearchView {}
