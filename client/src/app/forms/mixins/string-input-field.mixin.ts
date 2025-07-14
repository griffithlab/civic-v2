import { Injectable } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import { FieldType } from '@ngx-formly/core'
import { Subject } from 'rxjs'
import { MixinConstructor } from 'ts-mixin-extended'

export function StringTagField<TBase extends MixinConstructor<FieldType>>(
  Base: TBase
) {
  @Injectable()
  abstract class StringTagFieldMixin extends Base {
    // LOCAL SOURCE STREAMS
    onTagClose$!: Subject<MouseEvent> // emits on entity tag closed btn click

    // LOCAL PRESENTATION STREAMS
    tagLabel$!: Subject<Maybe<string>> // emits label for tag

    configureStringTagField(): void {
      this.tagLabel$ = new Subject<Maybe<string>>()

      this.onTagClose$ = new Subject<MouseEvent>()

      this.onTagClose$.pipe(untilDestroyed(this)).subscribe((_) => {
        this.formControl.setValue(undefined)
        this.tagLabel$.next(undefined)
      })
    }
  }

  return StringTagFieldMixin
}
