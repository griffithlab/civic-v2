import {
  ChangeDetectorRef,
  Injectable,
  QueryList,
  TemplateRef,
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { Maybe } from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import { FieldType } from '@ngx-formly/core'
import { Query, QueryRef } from 'apollo-angular'
import { EmptyObject } from 'apollo-angular/types'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import {
  BehaviorSubject,
  defer,
  distinctUntilChanged,
  filter,
  from,
  iif,
  map,
  Observable,
  of,
  ReplaySubject,
  skip,
  Subject,
  switchMap,
  withLatestFrom,
} from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'
import { MixinConstructor } from 'ts-mixin-extended'

export type GetTypeaheadVarsFn<TAV extends EmptyObject, TAP> = (
  str: string,
  param?: TAP
) => TAV
export type GetTypeaheadResultsFn<TAQ, TAF> = (
  response: ApolloQueryResult<TAQ>
) => TAF[]
export type GetSelectedItemFn<TAF> = (item: TAF) => NzSelectOptionInterface
export type GetSelectOptionsFn<TAF> = (
  results: TAF[],
  tplRefs: QueryList<TemplateRef<any>>
) => NzSelectOptionInterface[]

export interface StringSelectFieldOptions<
  TAQ,
  TAV extends EmptyObject,
  TAP,
  TAF,
> {
  typeaheadQuery: Query<TAQ, TAV>
  typeaheadParam$?: Observable<any>
  typeaheadParamName$?: BehaviorSubject<Maybe<any>>
  getTypeaheadVarsFn: GetTypeaheadVarsFn<TAV, TAP>
  getTypeaheadResultsFn: GetTypeaheadResultsFn<TAQ, TAF>
  getSelectedItemOptionFn: GetSelectedItemFn<TAF>
  getSelectOptionsFn: GetSelectOptionsFn<TAF>
  changeDetectorRef: ChangeDetectorRef
  minSearchStrLength?: number
  selectOpen$?: ReplaySubject<Maybe<boolean>>
}

/*
 * TAQ = typeahead query
 * TAV = typeahead query variables
 * TAF = typeahead query optional parameters fragment
 * TAP = optional typeahead query parameters type
 * */

export function StringSelectField<
  // typeahead query data, vars, fragment
  TAQ extends EmptyObject,
  TAV extends EmptyObject,
  TAF extends EmptyObject,
  // optional additional typeahead query param
  TAP = void,
>() {
  return function StringSelectFieldConstructor<
    TBase extends MixinConstructor<FieldType>,
  >(Base: TBase) {
    @Injectable()
    abstract class StringSelectFieldMixin extends Base {
      // BASE FIELD TYPE SOURCE STREAMS
      // need to declare them to reference them here, then base-field creates these

      // LOCAL SOURCE STREAMS
      onSearch$!: Subject<Maybe<string>> // emits on typeahead keypress
      onTagClose$!: Subject<MouseEvent> // emits on entity tag closed btn click
      onCreate$!: Subject<TAF> // emits entity on create
      onOpenChange$!: Subject<boolean>
      selectOpen$!: ReplaySubject<Maybe<boolean>>

      // INTERMEDIATE STREAMS
      response$!: Observable<ApolloQueryResult<TAQ>> // gql query responses

      // PRESENTATION STREAMS
      result$!: BehaviorSubject<TAF[]> // typeahead query results
      isLoading$!: Observable<boolean> // typeahead query loading bool
      selectOption$!: BehaviorSubject<Maybe<NzSelectOptionInterface[]>>

      // CONFIG OPTIONS

      // config option queries
      private typeaheadQuery!: Query<TAQ, TAV>
      private typeaheadParam$?: Observable<any> // additional param for typeahead query
      typeaheadParamName$?: BehaviorSubject<Maybe<string>> // additional param for typeahead query

      // config options getter fns
      getTypeaheadVars!: GetTypeaheadVarsFn<TAV, TAP>
      getTypeahedResults!: GetTypeaheadResultsFn<TAQ, TAF>
      getSelectedItemOption!: GetSelectedItemFn<TAF>
      getSelectOptions!: GetSelectOptionsFn<TAF>
      minSearchStrLength!: number
      cdr!: ChangeDetectorRef // NOTE: would be great to remove this by eliminating subscriptions

      // LOCAL REFS
      queryRef?: QueryRef<TAQ, TAV>
      optionTemplates?: QueryList<TemplateRef<any>>

      configureStringSelectField(
        options: StringSelectFieldOptions<TAQ, TAV, TAP, TAF>
      ): void {
        // attach parent field's option fns to local fns
        this.typeaheadQuery = options.typeaheadQuery
        this.getTypeaheadVars = options.getTypeaheadVarsFn
        this.getTypeahedResults = options.getTypeaheadResultsFn
        this.getSelectedItemOption = options.getSelectedItemOptionFn
        this.getSelectOptions = options.getSelectOptionsFn
        this.typeaheadParam$ = options.typeaheadParam$
        this.typeaheadParamName$ = options.typeaheadParamName$
        this.selectOpen$ =
          options.selectOpen$ || new ReplaySubject<Maybe<boolean>>()
        this.minSearchStrLength = options.minSearchStrLength || 0
        this.cdr = options.changeDetectorRef

        // since mixins can't(?) have constructors, instantiate stuff here
        this.onSearch$ = new Subject<Maybe<string>>()
        this.isLoading$ = new Observable<boolean>()
        this.result$ = new BehaviorSubject<TAF[]>([])
        this.onTagClose$ = new Subject<MouseEvent>()
        this.onOpenChange$ = new Subject<boolean>()
        this.onCreate$ = new Subject<TAF>()
        this.selectOption$ = new BehaviorSubject<
          Maybe<NzSelectOptionInterface[]>
        >(undefined)

        // if (this.field.key === 'variantId')
        //   this.selectOption$
        //     .pipe(tag(`${this.field.key} entity-select-field selectOption$`))
        //     .subscribe()

        // set up typeahead watch & fetch calls
        this.response$ = this.onSearch$.pipe(
          skip(1), // skip initial empty string sent when nz-select first gets focus
          filter(isNonNulled),
          // filter search queries of insufficient length
          filter((str: string) => {
            if (this.minSearchStrLength === 0) {
              return true
            } else {
              return str.length >= this.minSearchStrLength ? true : false
            }
          }),
          // get typeahead param value, or undefined if it doesn't exist
          withLatestFrom(
            this.typeaheadParam$ !== undefined
              ? this.typeaheadParam$
              : of(undefined)
          ),
          switchMap(([str, param]: [string, Maybe<TAP>]) => {
            const query = this.getTypeaheadVars(str, param)

            // helper functions for iif operator:
            const watchQuery = (query: TAV) => {
              // calls watch() to create queryReft,
              // returns observable from initial watch() query
              this.queryRef = this.typeaheadQuery.watch(query)
              // emit loading events from isLoading$
              this.isLoading$ = this.queryRef.valueChanges.pipe(
                pluck('loading'),
                distinctUntilChanged()
              )

              return this.queryRef.valueChanges
            }
            const fetchQuery = (query: TAV) => {
              // returns observable from the queryRef created with
              // watchQuery(). Since refetch() returns a promise, we convert it
              // to an observable with the from() operator
              return from(this.queryRef!.refetch(query))
            }

            // This iif operator prevents double-calling the API:
            // If queryRef doesn't exist, create it with watchQuery observable.
            // If it does, refetch with fetchQuery observable.
            // Using defer() ensures functions are not called until
            // values are emitted - otherwise they'll be called on subscribe.
            return iif(
              () => this.queryRef === undefined, // predicate
              defer(() => watchQuery(query)), // true
              defer(() => fetchQuery(query)) // false
            )
          })
        ) // end this.response$

        this.onOpenChange$
          // .pipe(tag('entity-select-field onOpenChange$'), untilDestroyed(this))
          .subscribe((change: boolean) => {
            if (change) this.onSearch$.next('')
          })

        this.response$
          .pipe(
            filter((r) => r.data !== undefined),
            map((r) => this.getTypeahedResults(r)),
            untilDestroyed(this)
          )
          .subscribe((results: TAF[]) => {
            this.result$.next(results)
            // if no results, also emit empty array from selectOption$,
            // as a select field's optionTemplates won't update if this
            // is the first result, or if the previous result was empty as well
            if (results.length === 0) {
              this.selectOption$.next([])
            }
            this.cdr.detectChanges()
          })

        if (!this.optionTemplates) {
          console.warn(
            `${this.field.id} could not find reference to optionTemplates ViewChildren, options will only show entity name text.`
          )
          this.result$.pipe(untilDestroyed(this)).subscribe((r: TAF[]) => {
            this.selectOption$.next(
              r.map((entity) => {
                return {
                  label: entity.name,
                  value: entity.id,
                }
              })
            )
          })
        } else {
          // subscribe to optionTemplates ViewChildren changes,
          // which are re-rendered whenever result$ emits. For each
          // option template instance, getSelectOptions() generates a NzSelectOption that
          // attaches the pre-generated option template to a result value.
          this.optionTemplates.changes
            .pipe(withLatestFrom(this.result$), untilDestroyed(this))
            .subscribe(
              ([tplRefs, results]: [QueryList<TemplateRef<any>>, TAF[]]) => {
                const options = this.getSelectOptions(results, tplRefs)
                this.selectOption$.next(options)
                this.cdr.detectChanges()
              }
            )
        }

        this.onTagClose$.pipe(untilDestroyed(this)).subscribe((_) => {
          this.resetField()
        })

        // if a prepopulated form value exists,
        // use tagQuery to create select option(s) for it so that nz-select's tags render
        if (this.formControl.value) {
          const value = this.formControl.value
          if (Object.keys(value).length > 0 && value.constructor === Object) {
            console.error(
              `${this.field.id} prepopulated value must be a primitive or array of primitives, value is an object:`,
              value
            )
            return
          }
        }
      } // configureDisplayEntityTag()

      resetField() {
        this.formControl.setValue(undefined)
        // clear out results (which will trigger a re-render of optionTemplates)
        if (this.result$) this.result$.next([])
        // emit initial search so that options provided to user after clearing a tag
        // if (this.onSearch$) this.onSearch$.next('')
      }
    }

    return StringSelectFieldMixin
  }
}
