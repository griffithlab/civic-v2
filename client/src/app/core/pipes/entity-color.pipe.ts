import { Pipe, PipeTransform } from '@angular/core'
import { getEntityColor } from '../utilities/get-entity-color'

@Pipe({
  name: 'entityColor',
  standalone: false,
})
export class EntityColorPipe implements PipeTransform {
  transform(entity: string): string {
    return getEntityColor(entity)
  }
}
