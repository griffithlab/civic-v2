import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'isArray' })
export class IsArrayPipe implements PipeTransform {
  transform(value: unknown): boolean {
    if (value === undefined || value === null) return false
    return Array.isArray(value)
  }
}