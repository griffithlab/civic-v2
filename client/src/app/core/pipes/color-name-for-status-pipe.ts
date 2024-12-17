import { Pipe, PipeTransform } from '@angular/core'
import { EvidenceStatus, Maybe } from '@app/generated/civic.apollo'

@Pipe({
  name: 'colorNameForStatus',
  pure: true,
  standalone: false,
})
export class ColorNameForStatusPipe implements PipeTransform {
  transform(status: Maybe<EvidenceStatus>): string {
    switch (status) {
      case EvidenceStatus.Accepted:
        return 'green'
      case EvidenceStatus.Rejected:
        return 'red'
      case EvidenceStatus.Submitted:
        return 'orange'
      default:
        return 'default'
    }
  }
}
