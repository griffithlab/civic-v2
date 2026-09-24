import { Pipe, PipeTransform } from '@angular/core'
import { SpecificationEvaluationStatus } from '@app/generated/civic.apollo';

@Pipe({
    name: 'specificationToTagColor',
    standalone: false
})
export class SpecificationToTagColorPipe implements PipeTransform {
  transform(status: SpecificationEvaluationStatus): string | undefined {
    switch(status) {
      case SpecificationEvaluationStatus.Met:
        return "#108ee9"
      case SpecificationEvaluationStatus.NotMet:
        return "#FF9900"
      case SpecificationEvaluationStatus.NotEvaluated:
        return undefined
      case SpecificationEvaluationStatus.Excluded:
        return "#A9A9A9"
    }
  }
}
