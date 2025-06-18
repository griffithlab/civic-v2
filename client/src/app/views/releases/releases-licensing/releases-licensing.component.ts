import { Component } from '@angular/core'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CommonModule } from '@angular/common'
import { PushPipe } from '@ngrx/component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzCardModule } from 'ng-zorro-antd/card'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'

@Component({
  selector: 'cvc-licensing',
  templateUrl: 'releases-licensing.component.html',
  styleUrl: 'releases-licensing.component.less',
  imports: [
    CommonModule,
    PushPipe,
    NzButtonModule,
    NzPageHeaderModule,
    NzGridModule,
    NzIconModule,
    NzTableModule,
    NzSpaceModule,
    NzTypographyModule,
    NzAlertModule,
    NzCardModule,
    CvcSectionNavigationModule,
    CvcLinkTagModule,
  ],
})
export class ReleasesLicensingComponent {}
