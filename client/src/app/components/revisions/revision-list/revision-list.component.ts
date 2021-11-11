import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { Maybe, Organization, Revision } from '@app/generated/civic.apollo';
import { Observable } from 'rxjs';
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service';

@Component({
  selector: 'cvc-revision-list',
  templateUrl: './revision-list.component.html',
  styleUrls: ['./revision-list.component.less']
})
export class RevisionListComponent implements OnInit, OnChanges{
  @Input() revisions?: Revision[]
  
  mostRecentOrg!: Maybe<Organization>

  selectedRevisionIds: number[] = []

  viewer$?: Observable<Viewer>;

  @Output() revisionSetSelectedEvent = new EventEmitter<string>();

  //TODO: Get rid of, we need a type guard pipe in the template to narrow the type safely in the template
  // (or the angular team to make ngSwitch better)
  //until then, at least its type checked at the Input level
  untypedRevisons?: any[]

  constructor(private viewerService : ViewerService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.untypedRevisons = this.revisions
  }

  ngOnInit(): void {
    this.viewer$ = this.viewerService.viewer$;
    this.viewerService.viewer$
      .subscribe((v: Viewer) => {
        this.mostRecentOrg = v.mostRecentOrg;
      });

    this.untypedRevisons = this.revisions
  }

  onChangesetSelected(changesetId: string) {
    this.revisionSetSelectedEvent.emit(changesetId)
  }

  onRevisionCheckboxClicked(value: boolean, revisionId: number) {
    if (value) {
      this.selectedRevisionIds.push(revisionId)
    }
    else {
      this.selectedRevisionIds = this.selectedRevisionIds.filter(i => i != revisionId)
    }
    console.log(this.selectedRevisionIds)
  }
}
