import { Component, OnInit } from '@angular/core'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'variants-home',
  templateUrl: './variants-home.page.html',
  styleUrls: ['./variants-home.page.less'],
  standalone: false,
})
export class VariantsHomePage implements OnInit {
  viewer$: Observable<Viewer>

  constructor(private viewerService: ViewerService) {
    this.viewer$ = this.viewerService.viewer$
  }

  ngOnInit(): void {}
}
