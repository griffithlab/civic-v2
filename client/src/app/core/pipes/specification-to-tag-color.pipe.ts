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
        return "#ffc069"
      case SpecificationEvaluationStatus.NotEvaluated:
        return undefined
      case SpecificationEvaluationStatus.Excluded:
        return "#A9A9A9"
    }
  }
}

@Pipe({
    name: 'specificationToFontColor',
    standalone: false
})
export class SpecificationToFontColorPipe implements PipeTransform {
  transform(status: SpecificationEvaluationStatus): string | undefined {
    switch(status) {
      case SpecificationEvaluationStatus.Met:
        return "#e6f9ff"
      case SpecificationEvaluationStatus.NotMet:
        return "#140600"
      case SpecificationEvaluationStatus.NotEvaluated:
        return undefined
      case SpecificationEvaluationStatus.Excluded:
        return "#0f0f0f"
    }
  }
}