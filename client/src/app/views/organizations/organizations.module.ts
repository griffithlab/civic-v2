import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { LetDirective, PushPipe } from '@ngrx/component'
import { OrganizationsAssertionsModule } from './organizations-assertions/organizations-assertions.module'
import { OrganizationsDetailModule } from './organizations-detail/organizations-detail.module'
import { OrganizationsEventsModule } from './organizations-events/organizations-events.module'
import { OrganizationsEvidenceModule } from './organizations-evidence/organizations-evidence.module'
import { OrganizationsGroupsModule } from './organizations-groups/organizations-groups.module'
import { OrganizationsHomeModule } from './organizations-home/organizations-home.module'
import { OrganizationsMembersModule } from './organizations-members/organizations-members.module'
import { OrganizationsRoutingModule } from './organizations-routing.module'
import { OrganizationsSourceSuggestionsModule } from './organizations-source-suggestions/organizations-source-suggestions.module'
import { OrganizationsComponent } from './organizations.component'
import { OrganizationsEndorsedAssertionsModule } from './organization-endorsed-assertions/organizations-endorsed-assertions.module'

@NgModule({
  declarations: [OrganizationsComponent],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    OrganizationsRoutingModule,
    OrganizationsHomeModule,
    OrganizationsEvidenceModule,
    OrganizationsAssertionsModule,
    OrganizationsDetailModule,
    OrganizationsEventsModule,
    OrganizationsGroupsModule,
    OrganizationsMembersModule,
    OrganizationsSourceSuggestionsModule,
    OrganizationsEndorsedAssertionsModule,
  ],
})
export class OrganizationsModule {}
