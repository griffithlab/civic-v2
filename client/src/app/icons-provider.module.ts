import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition, ThemeType } from '@ant-design/icons-angular';

import { camelToKebab } from '@app/core/utilities/camel-to-kebab';

import { MenuFoldOutline, MenuUnfoldOutline, FormOutline, DashboardOutline } from '@ant-design/icons-angular/icons';

// NZ icons used in base app components
const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline
];

import {
  CivicIconLiteral,
  civicAdminFullcolor,
  civicAdminOutline,
  civicAdminTwotone,
  civicAdverseresponseOutline,
  civicAssertionFullcolor,
  civicAssertionOutline,
  civicAssertionTwotone,
  civicBenignOutline,
  civicBetteroutcomeOutline,
  civicClinicaltrialFullcolor,
  civicClinicaltrialOutline,
  civicClinicaltrialTwotone,
  civicQueueFullcolor,
  civicQueueOutline,
  civicQueueTwotone,
  civicCombinationOutline,
  civicCommentFullcolor,
  civicCommentOutline,
  civicCommentTwotone,
  civicCommongermlineOutline,
  civicCoordinatesystemFullcolor,
  civicCoordinatesystemOutline,
  civicCoordinatesystemTwotone,
  civicCuratorFullcolor,
  civicCuratorOutline,
  civicCuratorTwotone,
  civicDiagnosticOutline,
  civicDiseaseFullcolor,
  civicDiseaseOutline,
  civicDiseaseTwotone,
  civicDoesnotsupportOutline,
  civicDominantnegativeOutline,
  civicEditorFullcolor,
  civicEditorOutline,
  civicEditorTwotone,
  civicEventFullcolor,
  civicEventOutline,
  civicEventTwotone,
  civicEvidenceFullcolor,
  civicEvidenceOutline,
  civicEvidenceTwotone,
  civicFlagFullcolor,
  civicFlagOutline,
  civicFlagTwotone,
  civicFunctionalOutline,
  civicGainoffunctionOutline,
  civicGeneFullcolor,
  civicGeneOutline,
  civicGeneTwotone,
  civicInterventionFullcolor,
  civicInterventionOutline,
  civicInterventionTwotone,
  civicLikelybenignOutline,
  civicLikelypathogenicOutline,
  civicLossoffunctionOutline,
  civicMolecularprofileFullcolor,
  civicMolecularprofileOutline,
  civicMolecularprofileTwotone,
  civicNaOutline,
  civicNegativeOutline,
  civicNeomorphicOutline,
  civicOncogenicOutline,
  civicOrganizationFullcolor,
  civicOrganizationOutline,
  civicOrganizationTwotone,
  civicPathogenicOutline,
  civicPhenotypeFullcolor,
  civicPhenotypeOutline,
  civicPhenotypeTwotone,
  civicPooroutcomeOutline,
  civicPositiveOutline,
  civicPredictiveOutline,
  civicPredisposingOutline,
  civicPrognosticOutline,
  civicRaregermlineOutline,
  civicReducedsensitivityOutline,
  civicResistanceOutline,
  civicRevisionFullcolor,
  civicRevisionOutline,
  civicRevisionTwotone,
  civicSensitivityresponseOutline,
  civicSequentialOutline,
  civicSignificanceunknownOutline,
  civicSomaticOutline,
  civicSourceFullcolor,
  civicSourceOutline,
  civicSourceTwotone,
  civicSubstitutesOutline,
  civicSupportsOutline,
  civicUnalteredfunctionOutline,
  civicUncertainsignificanceOutline,
  civicUnknownOutline,
  civicUserFullcolor,
  civicUserOutline,
  civicUserTwotone,
  civicVariant,
  civicVariantOutline,
  civicVariantTwotone,
  civicVariantgroupFullcolor,
  civicVariantgroupOutline,
  civicVariantgroupTwotone,
  civicVarianttypeFullcolor,
  civicVarianttypeOutline,
  civicVarianttypeTwotone,
} from '@app/generated/civic.icons';

const iconLiterals = [
  civicAdminOutline,
  civicAdminTwotone,
  civicAdverseresponseOutline,
  civicAssertionOutline,
  civicAssertionTwotone,
  civicBenignOutline,
  civicBetteroutcomeOutline,
  civicClinicaltrialOutline,
  civicClinicaltrialTwotone,
  civicQueueOutline,
  civicQueueTwotone,
  civicCombinationOutline,
  civicCommentOutline,
  civicCommentTwotone,
  civicCommongermlineOutline,
  civicCoordinatesystemOutline,
  civicCoordinatesystemTwotone,
  civicCuratorOutline,
  civicCuratorTwotone,
  civicDiagnosticOutline,
  civicDiseaseOutline,
  civicDiseaseTwotone,
  civicDoesnotsupportOutline,
  civicDominantnegativeOutline,
  civicEditorOutline,
  civicEditorTwotone,
  civicEventOutline,
  civicEventTwotone,
  civicEvidenceOutline,
  civicEvidenceTwotone,
  civicFlagOutline,
  civicFlagTwotone,
  civicFunctionalOutline,
  civicGainoffunctionOutline,
  civicGeneOutline,
  civicGeneTwotone,
  civicInterventionOutline,
  civicInterventionTwotone,
  civicLikelybenignOutline,
  civicLikelypathogenicOutline,
  civicLossoffunctionOutline,
  civicMolecularprofileOutline,
  civicMolecularprofileTwotone,
  civicNaOutline,
  civicNegativeOutline,
  civicNeomorphicOutline,
  civicOncogenicOutline,
  civicOrganizationOutline,
  civicOrganizationTwotone,
  civicPathogenicOutline,
  civicPhenotypeOutline,
  civicPhenotypeTwotone,
  civicPooroutcomeOutline,
  civicPositiveOutline,
  civicPredictiveOutline,
  civicPredisposingOutline,
  civicPrognosticOutline,
  civicRaregermlineOutline,
  civicReducedsensitivityOutline,
  civicResistanceOutline,
  civicRevisionOutline,
  civicRevisionTwotone,
  civicSensitivityresponseOutline,
  civicSequentialOutline,
  civicSignificanceunknownOutline,
  civicSomaticOutline,
  civicSourceOutline,
  civicSourceTwotone,
  civicSubstitutesOutline,
  civicSupportsOutline,
  civicUnalteredfunctionOutline,
  civicUncertainsignificanceOutline,
  civicUnknownOutline,
  civicUserOutline,
  civicUserTwotone,
  civicVariantOutline,
  civicVariantTwotone,
  civicVariantgroupOutline,
  civicVariantgroupTwotone,
  civicVarianttypeOutline,
  civicVarianttypeTwotone,
];

export const fullColorIcons: CivicIconLiteral[] = [
  civicAdminFullcolor,
  civicAssertionFullcolor,
  civicClinicaltrialFullcolor,
  civicQueueFullcolor,
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
  civicVarianttypeFullcolor,
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