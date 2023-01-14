import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReleasesMainModule } from './releases-main/releases-main.module';
import { ReleasesRoutingModule } from './releases-routing.module';
import { ReleasesComponent } from './releases.component';

@NgModule({
  declarations: [ReleasesComponent],
  imports: [CommonModule, ReleasesRoutingModule, ReleasesMainModule],
})
export class ReleasesModule {}
