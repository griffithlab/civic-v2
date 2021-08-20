import { Pipe, PipeTransform } from '@angular/core';
import { SourceSource } from '@app/generated/civic.apollo';
import { Maybe } from 'graphql/jsutils/Maybe';

@Pipe({
  name: 'sourceTypeEnumDisplay',
  pure: true
})
export class SourceTypeDisplayPipe implements PipeTransform {
  transform(value: Maybe<SourceSource>): string {
    switch (value) {
      case 'ASCO':
        return 'Asco';
      case 'PUBMED':
        return 'PubMed';
      default:
        return '';
    }
  }
}
