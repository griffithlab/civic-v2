import {
  ChangeDetectorRef,
  Injectable,
  QueryList,
  TemplateRef,
} from '@angular/core'
import { untilDestroyed } from '@ngneat/until-destroy'
import { FieldType } from '@ngx-formly/core'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import { BehaviorSubject, Observable, Subject, withLatestFrom } from 'rxjs'
import { MixinConstructor } from 'ts-mixin-extended'

export type GetSelectOptionsFn<E> = (
  optionEnums: E[],
  tplRefs: QueryList<TemplateRef<any>>
) => NzSelectOptionInterface[]

export interface CvcEnumSelectFieldOptions<E> {
  optionEnum$: BehaviorSubject<E[]>
  optionTemplate$?: Observable<TemplateRef<any>[]>
  changeDetectorRef: ChangeDetectorRef
}

export function EnumSelectField<V, E>() {
  return function EnumSelectFieldConstructor<
    TBase extends MixinConstructor<FieldType>,
  >(Base: TBase) {
    @Injectable()
    abstract class EnumSelectFieldMixin extends Base {
      // CHILD SOURCE STREAMS
      // config options passed from components that extend this mixin
      optionEnum$?: Subject<E[]>
      optionTemplate$?: Observable<TemplateRef<any>[]>

      // SOURCE STREAMS
      onTagClose$!: Subject<MouseEvent> // emits on entity tag closed btn click

      // CHILD PRESENTATION STREAMS
      // created by this mixin, subscribed in child components
      selectOption$!: BehaviorSubject<NzSelectOptionInterface[]>

      // OTHER CONFIG OPTIONS
      changeDetectorRef?: ChangeDetectorRef

      configureEnumSelectField(options: CvcEnumSelectFieldOptions<E>): void {
        // instantiate local observables
        this.selectOption$ = new BehaviorSubject<NzSelectOptionInterface[]>([])
        this.onTagClose$ = new Subject<MouseEvent>()

        // CONFIGURE MIXIN
        this.optionEnum$ = options.optionEnum$
        this.changeDetectorRef = options.changeDetectorRef

        // set up select options creation
        if (!options.optionTemplate$) {
          // if not provided, create empty array subject - select options will then use the enum value for
          // label
          this.optionTemplate$ = new BehaviorSubject<TemplateRef<any>[]>([])
        } else {
          this.optionTemplate$ = options.optionTemplate$
        }

        // emit new select options when option template list updated
        this.optionTemplate$
          .pipe(withLatestFrom(this.optionEnum$), untilDestroyed(this))
          .subscribe((templatesAndEnums: [TemplateRef<any>[], E[]]) => {
            this.emitSelectOptions(templatesAndEnums)
          })

        // handle tag close events
        this.onTagClose$.pipe(untilDestroyed(this)).subscribe((_) => {
          this.resetField()
        })
      }

      emitSelectOptions([optionTemplates, optionEnums]: [
        TemplateRef<any>[],
        E[],
      ]): void {
        this.selectOption$.next(
          // for each enum, return a NzSelectOption with a label that is either the enum's template
          // reference, or if not found, just the enum string
          optionEnums.map((optionEnum: E, index: number) => {
            return <NzSelectOptionInterface>{
              label: optionTemplates[index] || optionEnum,
              value: optionEnum,
            }
          })
        )
        if (!this.changeDetectorRef) {
          console.error(
            `${this.field.id}'s configureEnumTagField() requires valid ChangeDetectorRef option, none detected.`
          )
          return
        }
        this.changeDetectorRef.detectChanges()
      }

      resetField() {
        if (this.props.isMultiSelect) {
          this.formControl.setValue([])
        } else {
          this.formControl.setValue(undefined)
        }
      }
    }

    return EnumSelectFieldMixin
  }
}
