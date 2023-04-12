import { Injectable } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import { FieldType } from '@ngx-formly/core'
import { Subject } from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import { MixinConstructor } from 'ts-mixin-extended'

export function StringTagField<TBase extends MixinConstructor<FieldType>>(
  Base: TBase
) {
  @Injectable()
  abstract class StringTagFieldMixin extends Base {
    // BASE FIELD TYPE SOURCE STREAMS
    onValueChange$?: Subject<Maybe<string | number>>

    // LOCAL SOURCE STREAMS
    onTagClose$!: Subject<MouseEvent> // emits on entity tag closed btn click

    // LOCAL PRESENTATION STREAMS
    tagLabel$!: Subject<Maybe<string>> // emits label for tag

    configureStringTagField(): void {
      if (!this.onValueChange$) {
        console.error(
          `${this.field.id} cannot find onValueChange$ Subject, ensure configureBaseField() has been called before configureDisplayStringTag in its AfterViewInit hook.`
        )
        return
      }

      this.tagLabel$ = new Subject<Maybe<string>>()
      this.onValueChange$
        .pipe(untilDestroyed(this))
        .subscribe((str: Maybe<string | number>) => {
          this.tagLabel$.next(str ? str.toString() : undefined)
        })

      this.onTagClose$ = new Subject<MouseEvent>()

      this.onTagClose$.pipe(untilDestroyed(this)).subscribe((_) => {
        this.formControl.setValue(undefined)
        this.tagLabel$.next(undefined)
      })
    }
  }

  return StringTagFieldMixin
}
