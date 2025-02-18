import { Pipe, PipeTransform } from '@angular/core'
import { entityTypeToTypename } from '../utilities/entitytype-to-typename'

@Pipe({
  name: 'entityTypeToTypename',
  standalone: false,
})
export class EntityTypeToTypenamePipe implements PipeTransform {
  transform(entity: string): string {
    return entityTypeToTypename(entity)
  }
}
