import { Component, Input, OnInit} from '@angular/core';
import { Maybe, Organization, Revision } from '@app/generated/civic.apollo';
import { Observable } from 'rxjs';
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cvc-revision-list',
  templateUrl: './revision-list.component.html',
  styleUrls: ['./revision-list.component.less']
})
export class RevisionListComponent implements OnInit{
  @Input() revisions!: Revision[]
  
  mostRecentOrg!: Maybe<Organization>

  viewer$?: Observable<Viewer>;

  constructor(private viewerService : ViewerService) { }

  ngOnInit(): void {
    if (this.revisions === undefined) {
      throw new Error("Must specify a list of revisions.")
    }

    this.viewer$ = this.viewerService.viewer$;
    this.viewerService.viewer$
      .subscribe((v: Viewer) => {
        this.mostRecentOrg = v.mostRecentOrg;
      });
  }
}
