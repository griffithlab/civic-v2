import { Pipe, PipeTransform } from '@angular/core'
@Pipe({
  name: 'ordinal',
  standalone: false,
})
export class OrdinalPipe implements PipeTransform {
  transform(int: number) {
    const ones = +int % 10,
      tens = (+int % 100) - ones
    return int + ['th', 'st', 'nd', 'rd'][tens === 10 || ones > 3 ? 0 : ones]
  }
}
