import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline
} from '@ant-design/icons-angular/icons';

import  * as civicIcons from  '@app/generated/civic.icons';
import { CivicIconLiteral } from '@app/generated/civic.icons';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

// TODO: import civic.icons, create IconDefinition for each, append to icons array
console.log(icons);
console.log(civicIcons);

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}

export function toIconDef(iconLiterals: CivicIconLiteral[]): CivicIconLiteral[] {
  return iconLiterals;
}
