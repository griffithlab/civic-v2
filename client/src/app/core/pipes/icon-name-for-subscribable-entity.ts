
import { Pipe, PipeTransform } from '@angular/core';
import { SubscribableEntities } from '@app/generated/civic.apollo';

@Pipe({
  name: 'iconNameForSubscribableEntity',
  pure: true
})
export class IconNameForSubscribableEntity implements PipeTransform {
  transform(e: SubscribableEntities | string) : string {
    if (typeof e === "string") {
      switch (e) {
        case ("Assertion"):
          return 'civic:assertion'
        case ("EvidenceItem"):
          return 'civic:evidence'
        case ("Gene"):
          return 'civic:gene'
        case ("Revision"):
          return 'civic:revision'
        case ("Variant"):
          return 'civic:variant'
        default:
          console.log('No icon name found for ' + e);
          return 'border-outer'
      }
    }
    else {
      switch (e) {
        case (SubscribableEntities.Assertion):
          return 'civic:assertion'
        case (SubscribableEntities.EvidenceItem):
          return 'civic:evidence'
        case (SubscribableEntities.Gene):
          return 'civic:gene'
        case (SubscribableEntities.Revision):
          return 'civic:revision'
        case (SubscribableEntities.Variant):
          return 'civic:variant'
        default:
          console.log('No icon name found for ' + e);
          return 'border-outer'
      }
    }
  }
}