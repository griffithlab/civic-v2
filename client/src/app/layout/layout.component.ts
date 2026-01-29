import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

import { Observable, pluck } from 'rxjs'

import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'

@Component({
  selector: 'cvc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class LayoutComponent {
  isCollapsed = false
  viewer$!: Observable<Viewer>

  constructor(private viewerService: ViewerService) {}

  ngOnInit(): void {
    this.viewer$ = this.viewerService.viewer$
  }
}
