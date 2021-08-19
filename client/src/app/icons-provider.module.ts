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

// NZ icons used in base app components
const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline
];

// all civic custom icons
import {
  // attribute icons
  civicAdverseresponseOutline,
  civicBenignOutline,
  civicBetteroutcomeOutline,
  civicCommongermlineOutline,
  civicDiagnosticOutline,
  civicDoesnotsupportOutline,
  civicDominantnegativeOutline,
  civicFunctionalOutline,
  civicGainoffunctionOutline,
  civicLikelybenignOutline,
  civicLikelypathogenicOutline,
  civicLossoffunctionOutline,
  civicNaOutline,
  civicNegativeOutline,
  civicNeomorphicOutline,
  civicOncogenicOutline,
  civicUnknownOutline,
  civicPathogenicOutline,
  civicPositiveOutline,
  civicPredictiveOutline,
  civicPredisposingOutline,
  civicPrognosticOutline,
  civicRaregermlineOutline,
  civicReducedsensitivityOutline,
  civicResistanceOutline,
  civicSensitivityresponseOutline,
  civicSignificanceunknownOutline,
  civicSomaticOutline,
  civicSupportsOutline,
  civicUnalteredfunctionOutline,
  civicUncertainsignificanceOutline,
  civicPooroutcomeOutline,

  // entity & artifact fullcolor icons
  civicAdminFullcolor,
  civicAssertionFullcolor,
  civicCommentFullcolor,
  civicCoordinatesystemFullcolor,
  civicCuratorFullcolor,
  civicDiseaseFullcolor,
  civicEventFullcolor,
  civicEditorFullcolor,
  civicEvidenceFullcolor,
  civicFlagFullcolor,
  civicGeneFullcolor,
  civicInterventionFullcolor,
  civicMolecularprofileFullcolor,
  civicOrganizationFullcolor,
  civicPhenotypeFullcolor,
  civicRevisionFullcolor,
  civicSourceFullcolor,
  civicUserFullcolor,
  civicVariant,
  civicVariantgroupFullcolor,

  // entity & artifact 1 color icons
  civicAdminOutline,
  civicAssertionOutline,
  civicCommentOutline,
  civicCoordinatesystemOutline,
  civicCuratorOutline,
  civicDiseaseOutline,
  civicEventOutline,
  civicEditorOutline,
  civicEvidenceOutline,
  civicFlagOutline,
  civicGeneOutline,
  civicInterventionOutline,
  civicMolecularprofileOutline,
  civicOrganizationOutline,
  civicPhenotypeOutline,
  civicRevisionOutline,
  civicSourceOutline,
  civicUserOutline,
  civicVariantgroupOutline,
  civicVariantOutline,

  // entity & artifact two-tone icons
  civicAdminTwotone,
  civicAssertionTwotone,
  civicCommentTwotone,
  civicCoordinatesystemTwotone,
  civicCuratorTwotone,
  civicDiseaseTwotone,
  civicEventTwotone,
  civicEditorTwotone,
  civicEvidenceTwotone,
  civicFlagTwotone,
  civicGeneTwotone,
  civicInterventionTwotone,
  civicMolecularprofileTwotone,
  civicOrganizationTwotone,
  civicPhenotypeTwotone,
  civicRevisionTwotone,
  civicSourceTwotone,
  civicUserTwotone,
  civicVariantTwotone,
  civicVariantgroupTwotone,
  CivicIconLiteral
} from '@app/generated/civic.icons';

const iconLiterals = [
  civicAdverseresponseOutline,
  civicBenignOutline,
  civicBetteroutcomeOutline,
  civicCommongermlineOutline,
  civicDiagnosticOutline,
  civicDoesnotsupportOutline,
  civicDominantnegativeOutline,
  civicFunctionalOutline,
  civicGainoffunctionOutline,
  civicLikelybenignOutline,
  civicLikelypathogenicOutline,
  civicLossoffunctionOutline,
  civicNaOutline,
  civicNegativeOutline,
  civicNeomorphicOutline,
  civicOncogenicOutline,
  civicUnknownOutline,
  civicPathogenicOutline,
  civicPositiveOutline,
  civicPredictiveOutline,
  civicPredisposingOutline,
  civicPrognosticOutline,
  civicRaregermlineOutline,
  civicReducedsensitivityOutline,
  civicResistanceOutline,
  civicSensitivityresponseOutline,
  civicSignificanceunknownOutline,
  civicSomaticOutline,
  civicSupportsOutline,
  civicUnalteredfunctionOutline,
  civicUncertainsignificanceOutline,
  civicPooroutcomeOutline,
  civicAdminOutline,
  civicAssertionOutline,
  civicCommentOutline,
  civicCoordinatesystemOutline,
  civicCuratorOutline,
  civicDiseaseOutline,
  civicEditorOutline,
  civicEventOutline,
  civicEvidenceOutline,
  civicFlagOutline,
  civicGeneOutline,
  civicInterventionOutline,
  civicMolecularprofileOutline,
  civicOrganizationOutline,
  civicPhenotypeOutline,
  civicRevisionOutline,
  civicSourceOutline,
  civicUserOutline,
  civicVariantgroupOutline,
  civicVariantOutline,
  civicAdminTwotone,
  civicAssertionTwotone,
  civicCommentTwotone,
  civicCoordinatesystemTwotone,
  civicCuratorTwotone,
  civicDiseaseTwotone,
  civicEditorTwotone,
  civicEventTwotone,
  civicEvidenceTwotone,
  civicFlagTwotone,
  civicGeneTwotone,
  civicInterventionTwotone,
  civicMolecularprofileTwotone,
  civicOrganizationTwotone,
  civicPhenotypeTwotone,
  civicRevisionTwotone,
  civicSourceTwotone,
  civicUserTwotone,
  civicVariantTwotone,
  civicVariantgroupTwotone,
];

export const fullColorIcons: CivicIconLiteral[] = [
  civicAdminFullcolor,
  civicAssertionFullcolor,
  civicCommentFullcolor,
  civicCoordinatesystemFullcolor,
  civicCuratorFullcolor,
  civicDiseaseFullcolor,
  civicEditorFullcolor,
  civicEventFullcolor,
  civicEvidenceFullcolor,
  civicFlagFullcolor,
  civicGeneFullcolor,
  civicInterventionFullcolor,
  civicMolecularprofileFullcolor,
  civicOrganizationFullcolor,
  civicPhenotypeFullcolor,
  civicRevisionFullcolor,
  civicSourceFullcolor,
  civicUserFullcolor,
  civicVariant,
  civicVariantgroupFullcolor,
];

export const civicIcons: IconDefinition[] = toIconDefs(iconLiterals);

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons },
  ]
})

export class IconsProviderModule { }

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

// remove theme, prepend namespace
export function getName(name: string): string {
  const regex = /Outline|Fill|TwoTone/i;
  return 'civic-' + camelToKebab(name.replace(regex, ''));
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
