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

@Component({
  selector: 'cvc-molecular-profile-popover',
  templateUrl: './molecular-profile-popover.component.html',
  styleUrls: ['./molecular-profile-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
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
