import { InjectionToken, NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition, ThemeType } from '@ant-design/icons-angular';

import { camelToKebab } from '@app/shared/utilities/camel-to-kebab';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline
} from '@ant-design/icons-angular/icons';

import {
  civicAdminOutline,
  civicAssertionOutline,
  civicCommentOutline,
  civicCoordinateSystemOutline,
  civicCuratorOutline,
  civicDiseaseOutline,
  civicEditorOutline,
  civicEvidenceOutline,
  civicFlagOutline,
  civicGeneOutline,
  civicInterventionOutline,
  civicMolecularProfileOutline,
  civicOrganizationOutline,
  civicPhenotypeOutline,
  civicRevisionOutline,
  civicSourceOutline,
  civicVariantGroupOutline,
  civicVariantOutline,
  civicAdminTwotone,
  civicAssertionTwotone,
  civicCommentTwotone,
  civicCoordinateSystemTwotone,
  civicCuratorTwotone,
  civicDiseaseTwotone,
  civicEditorTwotone,
  civicEvidenceTwotone,
  civicFlagTwotone,
  civicGeneTwotone,
  civicInterventionTwotone,
  civicMolecularProfileTwotone,
  civicOrganizationTwotone,
  civicPhenotypeTwotone,
  civicRevisionTwotone,
  civicSourceTwotone,
  civicVariantTwotone,
  civicVariantgroupTwotone,
  CivicIconLiteral
} from '@app/generated/civic.icons';

export const CIVIC_ICONS = new InjectionToken('civic_icons');

const iconLiterals = [
  civicAdminOutline,
  civicAssertionOutline,
  civicCommentOutline,
  civicCoordinateSystemOutline,
  civicCuratorOutline,
  civicDiseaseOutline,
  civicEditorOutline,
  civicEvidenceOutline,
  civicFlagOutline,
  civicGeneOutline,
  civicInterventionOutline,
  civicMolecularProfileOutline,
  civicOrganizationOutline,
  civicPhenotypeOutline,
  civicRevisionOutline,
  civicSourceOutline,
  civicVariantGroupOutline,
  civicVariantOutline,
  civicAdminTwotone,
  civicAssertionTwotone,
  civicCommentTwotone,
  civicCoordinateSystemTwotone,
  civicCuratorTwotone,
  civicDiseaseTwotone,
  civicEditorTwotone,
  civicEvidenceTwotone,
  civicFlagTwotone,
  civicGeneTwotone,
  civicInterventionTwotone,
  civicMolecularProfileTwotone,
  civicOrganizationTwotone,
  civicPhenotypeTwotone,
  civicRevisionTwotone,
  civicSourceTwotone,
  civicVariantTwotone,
  civicVariantgroupTwotone,
];

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];
const civicIcons = toIconDefs(iconLiterals);

console.log(NZ_ICONS);
console.log(CIVIC_ICONS);

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons },
    { provide: CIVIC_ICONS, useValue: civicIcons }
  ]
})
export class IconsProviderModule {
}

export function toIconDefs(icons: CivicIconLiteral[]): IconDefinition[] {
  const defs: any[] = [];
  icons.forEach((icon: CivicIconLiteral): void => {
    const def: IconDefinition = {
      name: getName(icon.name),
      theme: getTheme(icon.name),
      icon: icon.data
    }
    defs.push(def);
  });
  return defs;
}

export function getName(name: string): string {
  const regex = /Outline|Fill|TwoTone/i;
  return 'civic:' + camelToKebab(name.replace(regex, ''));
}

export function getTheme(name: string): ThemeType | undefined {
  if (name.includes('Twotone')) {
    return 'twotone';
  } else if (name.includes('Outline')) {
    return 'outline';
  } else if (name.includes('Fill')){
    return 'fill';
  } else {
    return
  }
}
