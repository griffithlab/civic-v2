import { onlyCompleteData } from 'apollo-angular'
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core'
import {
  MolecularProfilePopoverFieldsFragment,
  MolecularProfilePopoverGQL,
} from './molecular-profile-popover.query.gql.generated'
import { Maybe } from '@app/generated/civic.apollo.types'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { PushPipe } from '@ngrx/component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { CvcMolecularProfileTagNameModule } from '../molecular-profile-tag-name/molecular-profile-tag-name.module'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'
import { CvcEntityChildCounts } from '@app/components/shared/entity-child-counts.component/entity-child-counts.component.component'

@Component({
  selector: 'cvc-molecular-profile-popover',
  templateUrl: './molecular-profile-popover.component.html',
  styleUrls: ['./molecular-profile-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PushPipe,
    NzCardModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTagModule,
    NzIconModule,
    NzSpaceModule,
    CvcFeatureTagModule,
    CvcLinkTagModule,
    CvcTagListModule,
    CvcMolecularProfileTagNameModule,
    CvcEntityChildCounts,
  ],
})
export class CvcMolecularProfilePopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() molecularProfileId!: number
  @Output() contentRendered = new EventEmitter<void>()

  molecularProfile$?: Observable<Maybe<MolecularProfilePopoverFieldsFragment>>
  private resizeObserver: ResizeObserver

  constructor(
    private gql: MolecularProfilePopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.molecularProfile$ = this.gql
      .watch({ variables: { molecularProfileId: this.molecularProfileId } })
      .valueChanges.pipe(
        onlyCompleteData(),
        map(({ data }) => data.molecularProfile),
        filter(isNonNulled)
      )
  }
  ngAfterViewInit() {
    this.resizeObserver.observe(this.elementRef.nativeElement)
  }

  ngOnDestroy() {
    this.resizeObserver.disconnect()
  }
}
