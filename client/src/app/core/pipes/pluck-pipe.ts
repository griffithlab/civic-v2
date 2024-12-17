import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'pluck',
  pure: true,
  standalone: false,
})
export class PluckPipe implements PipeTransform {
  transform(input: any[], key: string): any {
    return input.map((value) => value[key])
  }
}
