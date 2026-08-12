import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-sources',
  templateUrl: './sources.view.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SourcesView implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
