import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'enumSort',
  pure: true,
})
export class SortEnumPipe implements PipeTransform {
  transform<T extends string | number>(enumValues: T[]): T[] {
    return [...enumValues].sort((a, b) => {
      if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b)
      }
      return (a as number) - (b as number)
    })
  }
}
