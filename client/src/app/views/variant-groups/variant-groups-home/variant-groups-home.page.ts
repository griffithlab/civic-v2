import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'variant-groups-home',
  templateUrl: './variant-groups-home.page.html',
  styleUrls: ['./variant-groups-home.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class VariantGroupsHomePage implements OnInit {
  viewer$: Observable<Viewer>

  constructor(private viewerService: ViewerService) {
    this.viewer$ = this.viewerService.viewer$
  }

  ngOnInit(): void {}
}
