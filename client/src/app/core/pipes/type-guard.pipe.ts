// NOTE: taken from https://github.com/angular/angular/issues/34522#issuecomment-762973301
// and
// https://github.com/angular/angular/issues/34522#issuecomment-1247786493
//
import { Pipe, PipeTransform } from '@angular/core'

export type TypeGuard<A, B extends A> = (a: A) => a is B

@Pipe({
  name: 'guardType',
})
export class GuardTypePipe implements PipeTransform {
  transform<A, B extends A>(
    value: A,
    typeGuard: TypeGuard<A, B>
  ): B | undefined {
    return typeGuard(value) ? value : undefined
  }
}
