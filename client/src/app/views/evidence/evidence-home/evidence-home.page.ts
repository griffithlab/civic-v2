import { Component, OnInit } from '@angular/core'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'evidence-home',
  templateUrl: './evidence-home.page.html',
  styleUrls: ['./evidence-home.page.less'],
  standalone: false,
})
export class EvidenceHomePage implements OnInit {
  viewer$: Observable<Viewer>

  tableView: boolean = true
  constructor(private viewerService: ViewerService) {
    this.viewer$ = this.viewerService.viewer$
  }

  ngOnInit(): void {}
}
