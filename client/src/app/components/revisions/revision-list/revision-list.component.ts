import { Component, Input, OnInit} from '@angular/core';
import { Maybe, Organization, Revision } from '@app/generated/civic.apollo';
import { Observable } from 'rxjs';
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service';

@Component({
  selector: 'cvc-revision-list',
  templateUrl: './revision-list.component.html',
  styleUrls: ['./revision-list.component.less']
})
export class RevisionListComponent implements OnInit{
  @Input() revisions!: Revision[]
  
  mostRecentOrg!: Maybe<Organization>

  viewer$?: Observable<Viewer>;

  //TODO: Get rid of, we need a type guard pipe in the template to narrow the type safely in the template
  //(or the angular team to make ngSwitch better)
  //until then, at least its type checked at the Input level
  untypedRevisons!: any[]

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

    this.untypedRevisons = this.revisions
  }
}
