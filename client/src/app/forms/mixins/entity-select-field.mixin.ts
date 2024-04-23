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
import {
  NzSelectComponent,
  NzSelectOptionInterface,
} from 'ng-zorro-antd/select'
import {
  BehaviorSubject,
  combineLatest,
  defer,
  distinctUntilChanged,
  filter,
  finalize,
  from,
  iif,
  map,
  Observable,
  of,
  ReplaySubject,
  skip,
  startWith,
  Subject,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs'
import { combineLatestArray, isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'
import { tag } from 'rxjs-spy/operators'
import { MixinConstructor } from 'ts-mixin-extended'

export type GetTypeaheadVarsFn<TAV extends EmptyObject, TAP> = (
  str: string,
  param?: TAP
) => TAV
export type GetTypeaheadResultsFn<TAQ, TAF> = (
  response: ApolloQueryResult<TAQ>
) => TAF[]
export type GetTagQueryVarsFn<TV extends EmptyObject> = (id: number) => TV
export type GetTagQueryResultsFn<TQ, TAF> = (
  response: ApolloQueryResult<TQ>
) => Maybe<TAF>
export type GetSelectedItemFn<TAF> = (item: TAF) => NzSelectOptionInterface
export type GetSelectOptionsFn<TAF> = (
  results: TAF[],
  tplRefs: QueryList<TemplateRef<any>>
) => NzSelectOptionInterface[]

export type CvcEntitySelectFieldModel = Maybe<number | number[]>

export interface EntitySelectFieldOptions<
  TAQ,
  TAV extends EmptyObject,
  TAP,
  TAF,
  TQ,
  TV extends EmptyObject
> {
  typeaheadQuery: Query<TAQ, TAV>
  typeaheadParam$?: Observable<any>
  typeaheadParamName$?: BehaviorSubject<Maybe<any>>
  tagQuery: Query<TQ, TV>
  getTypeaheadVarsFn: GetTypeaheadVarsFn<TAV, TAP>
  getTypeaheadResultsFn: GetTypeaheadResultsFn<TAQ, TAF>
  getTagQueryVarsFn: GetTagQueryVarsFn<TV>
  getTagQueryResultsFn: GetTagQueryResultsFn<TQ, TAF>
  getSelectedItemOptionFn: GetSelectedItemFn<TAF>
  getSelectOptionsFn: GetSelectOptionsFn<TAF>
  changeDetectorRef: ChangeDetectorRef
  minSearchStrLength?: number
  selectOpen$?: ReplaySubject<Maybe<boolean>>
  selectComponent: NzSelectComponent
}

/*
 * TAQ = typeahead query
 * TAV = typeahead query variables
 * TAF = typeahead query optional parameters fragment
 * TQ  = tag query
 * TV  = tag query variables
 * TAP = optional typeahead query parameters type
 * */

export function EntitySelectField<
  // typeahead query data, vars, fragment
  TAQ extends EmptyObject,
  TAV extends EmptyObject,
  TAF extends EmptyObject,
  // tag response data, vars, fragment (entity)
  TQ extends EmptyObject,
  TV extends EmptyObject,
  // optional additional typeahead query param
  TAP = void
>() {
  return function EntitySelectFieldConstructor<
    TBase extends MixinConstructor<FieldType>
  >(Base: TBase) {
    @Injectable()
    abstract class EntitySelectFieldMixin extends Base {
      // BASE FIELD TYPE SOURCE STREAMS
      // need to declare them to reference them here, then base-field creates these

      // LOCAL SOURCE STREAMS
      onSearch$!: Subject<Maybe<string>> // emits on typeahead keypress
      onTagClose$!: Subject<MouseEvent> // emits on entity tag closed btn click
      // DEPRECATED: onPopulate$ should replace onCreate
      onCreate$!: Subject<TAF> // emits entity on create
      onPopulate$!: Subject<CvcEntitySelectFieldModel> // fetches tag record & populates options for ids
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
      private tagQuery!: Query<TQ, TV>
      private typeaheadParam$?: Observable<any> // additional param for typeahead query
      typeaheadParamName$?: BehaviorSubject<Maybe<string>> // additional param for typeahead query

      // config options getter fns
      getTypeaheadVars!: GetTypeaheadVarsFn<TAV, TAP>
      getTypeahedResults!: GetTypeaheadResultsFn<TAQ, TAF>
      getTagQueryVars!: GetTagQueryVarsFn<TV>
      getTagQueryResults!: GetTagQueryResultsFn<TQ, TAF>
      getSelectedItemOption!: GetSelectedItemFn<TAF>
      getSelectOptions!: GetSelectOptionsFn<TAF>
      minSearchStrLength!: number
      cdr!: ChangeDetectorRef // NOTE: would be great to remove this

      // LOCAL REFS
      queryRef?: QueryRef<TAQ, TAV>
      tagQueryRef?: QueryRef<TQ, TV>
      optionTemplates?: QueryList<TemplateRef<any>>
      selectComponent!: NzSelectComponent

      configureEntitySelectField(
        options: EntitySelectFieldOptions<TAQ, TAV, TAP, TAF, TQ, TV>
      ): void {
        // attach parent field's option fns to local fns
        this.typeaheadQuery = options.typeaheadQuery
        this.tagQuery = options.tagQuery
        this.getTypeaheadVars = options.getTypeaheadVarsFn
        this.getTypeahedResults = options.getTypeaheadResultsFn
        this.getTagQueryVars = options.getTagQueryVarsFn
        this.getTagQueryResults = options.getTagQueryResultsFn
        this.getSelectedItemOption = options.getSelectedItemOptionFn
        this.getSelectOptions = options.getSelectOptionsFn
        this.typeaheadParam$ = options.typeaheadParam$
        this.typeaheadParamName$ = options.typeaheadParamName$
        this.selectOpen$ =
          options.selectOpen$ || new ReplaySubject<Maybe<boolean>>()
        this.selectComponent = options.selectComponent
        this.minSearchStrLength = options.minSearchStrLength || 0
        this.cdr = options.changeDetectorRef

        // since mixins can't(?) have constructors, instantiate stuff here
        this.onSearch$ = new BehaviorSubject<Maybe<string>>(undefined)
        this.isLoading$ = new Observable<boolean>()
        this.result$ = new BehaviorSubject<TAF[]>([])
        this.onPopulate$ = new Subject<CvcEntitySelectFieldModel>()
        this.onTagClose$ = new Subject<MouseEvent>()
        this.onOpenChange$ = new Subject<boolean>()
        this.onCreate$ = new Subject<TAF>()
        this.selectOption$ = new BehaviorSubject<
          Maybe<NzSelectOptionInterface[]>
        >(undefined)

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
              // calls watch() to create queryRef,
              // returns observable from initial watch() query
              this.queryRef = this.typeaheadQuery.watch(query)
              // emit loading events from isLoading$
              this.isLoading$ = this.queryRef.valueChanges.pipe(
                pluck('loading'),
                distinctUntilChanged()
              )

              return this.queryRef.valueChanges
            }
            const refetchQuery = (query: TAV) => {
              // returns observable from the queryRef created with
              // watchQuery(). Since refetch() returns a promise, we convert it
              // to an observable with the from() operator
              return from(this.queryRef!.refetch(query))
            }

            // This iif operator prevents double-calling the API:
            // If queryRef doesn't exist, create it with watchQuery observable.
            // If it does, refetch with refetchQuery observable.
            // Using defer() ensures functions are not called until
            // values are emitted - otherwise they'll be called on subscribe.
            return iif(
              () => this.queryRef === undefined, // predicate
              defer(() => watchQuery(query)), // true
              defer(() => refetchQuery(query)) // false
            )
          })
        ) // end this.response$

        this.onOpenChange$.subscribe((change: boolean) => {
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
            .pipe(
              withLatestFrom(this.result$),
              // tag('entity-select mixin optionTemplates'),
              untilDestroyed(this)
            )
            .subscribe(
              ([tplRefs, results]: [QueryList<TemplateRef<any>>, TAF[]]) => {
                const options = this.getSelectOptions(results, tplRefs)
                this.selectOption$.next(options)
                this.cdr.detectChanges()
              }
            )
        }

        this.onPopulate$
          .pipe(
            filter(isNonNulled),
            switchMap((value: CvcEntitySelectFieldModel) => {
              return combineLatestArray(this.getTagQueries(value))
            }),
            map((queries) =>
              queries.map((query) => this.getTagQueryResults(query))
            ),
            tap((results: Maybe<TAF>[]) => {
              // send tag query results to result$, this will cause
              // parent select fields to generate selectOptions for them
              this.result$.next(results as TAF[])
            }),
            untilDestroyed(this)
          )
          .subscribe((options) => {
            let newValue: CvcEntitySelectFieldModel
            if (this.field.props && this.field.props.isMultiSelect) {
              const arrValue: number[] = []
              options.forEach((opt) => arrValue.push(opt?.id || undefined))
              newValue = arrValue
            } else {
              newValue = options[0]!.id
            }
            this.formControl.setValue(newValue)
            // if onPopulate$ is called from a quick-add form in the select dropdown,
            // this will close it and cause nz-select to display the new tag
            this.selectOpen$.next(false)
          })

        // if a model value exists on init, prepopulate tags
        if (this.formControl.value) {
          const value = this.formControl.value
          if (Object.keys(value).length > 0 && value.constructor === Object) {
            console.error(
              `${this.field.id} prepopulated value must be a primitive or array of primitives, value is an object:`,
              value
            )
            return
          }
          this.onPopulate$.next(value)
        }

        this.onTagClose$.pipe(untilDestroyed(this)).subscribe((_) => {
          this.resetField()
        })
      } // configureDisplayEntityTag()

      getTagQueries(
        ids: CvcEntitySelectFieldModel
      ): Observable<ApolloQueryResult<TQ>>[] {
        if (typeof ids === 'number') ids = [ids]
        const queries = ids!.map((id) =>
          this.tagQuery
            .fetch(this.getTagQueryVars(id), { fetchPolicy: 'cache-first' })
            .pipe(filter((r) => !!r.data))
        )
        return queries
      }

      resetField() {
        this.formControl.setValue(undefined)
        // clear out results (which will trigger a re-render of optionTemplates)
        if (this.result$) this.result$.next([])
        // emit initial search so that options provided to user after clearing a tag
        // if (this.onSearch$) this.onSearch$.next('')
      }
    }

    return EntitySelectFieldMixin
  }
}
