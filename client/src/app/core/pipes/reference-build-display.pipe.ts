import { Pipe, PipeTransform } from '@angular/core'
import { ReferenceBuild } from '@app/generated/civic.apollo'
import { Maybe } from 'graphql/jsutils/Maybe'
import { formatReferenceBuildEnum } from '@app/core/utilities/enum-formatters/format-reference-build-enum'

@Pipe({
  name: 'referenceBuildDisplay',
  pure: true,
  standalone: false,
})
export class ReferenceBuildDisplayPipe implements PipeTransform {
  transform(value: Maybe<ReferenceBuild>): string {
    if (!value) return ''
    return formatReferenceBuildEnum(value)
  }
}
