import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ChangeDetectionStrategy,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  input,
  Signal,
  inject,
  Injector,
} from '@angular/core'
import {
  Maybe,
  SpecificationPopoverFragment,
  SpecificationPopoverGQL,
} from '@app/generated/civic.apollo'
import { filter, map } from 'rxjs/operators'
import { isNonNulled } from 'rxjs-etc'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { toSignal } from '@angular/core/rxjs-interop'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'

@Component({
  selector: 'cvc-specification-popover',
  templateUrl: './cvc-specification-popover.component.html',
  styleUrls: ['./cvc-specification-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    NzCardModule,
    NzDescriptionsModule,
    NzIconModule,
    NzTypographyModule,
    NzTagModule,
    NzToolTipModule,
    CvcLinkTagModule,
    CvcPipesModule,
    CvcOrganizationTagModule
  ],
  standalone: true,
})
export class CvcSpecificationPopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  readonly specificationId = input.required<number>();
  @Output() contentRendered = new EventEmitter<void>()

  specification?: Signal<Maybe<SpecificationPopoverFragment>>
  injector = inject(Injector);

  private resizeObserver: ResizeObserver

  constructor(
    private gql: SpecificationPopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.specification = toSignal(this.gql
      .watch({ specificationId: this.specificationId() })
      .valueChanges.pipe(
        map(({ data }) => data?.specification),
        filter(isNonNulled)
      ), { injector: this.injector})
  }

  ngAfterViewInit() {
    this.resizeObserver.observe(this.elementRef.nativeElement)
  }

  ngOnDestroy() {
    this.resizeObserver.disconnect()
  }
}
