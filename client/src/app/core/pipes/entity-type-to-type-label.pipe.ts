import { Pipe, PipeTransform } from '@angular/core'
import { entityTypeToTypeLabel } from '../utilities/entitytype-to-type-label'

@Pipe({
  name: 'entityTypeToTypeLabel',
  standalone: false,
})
export class EntityTypeToTypelabelPipe implements PipeTransform {
  transform(entity: string): string {
    return entityTypeToTypeLabel(entity)
  }
}
