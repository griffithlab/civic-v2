import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'devRandomBool' })
export class DevRandomBoolPipe implements PipeTransform {
  transform(pctTrue: number): boolean {
    return Math.random() < pctTrue
  }
}
