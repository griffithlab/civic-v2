import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core'
import { UntypedFormControl } from '@angular/forms'
import { Maybe } from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyAttributeEvent } from '@ngx-formly/core/lib/models'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import {
  asyncScheduler,
  combineLatest,
  map,
  Observable,
  shareReplay,
  startWith,
  Subject,
  throttleTime,
} from 'rxjs'
import { tag } from 'rxjs-spy/operators'

export type CvcSelectEntityName = { singular: string; plural: string }

type CvcEntitySelectMessageFn = (
  entityName: string,
  searchStr: Maybe<string>,
  paramName?: string
) => string

export type CvcEntitySelectMessageOptions = {
  search: CvcEntitySelectMessageFn
  searchAll: CvcEntitySelectMessageFn
  searchParam: CvcEntitySelectMessageFn
  searchParamAll: CvcEntitySelectMessageFn
  empty: CvcEntitySelectMessageFn
  emptyAll: CvcEntitySelectMessageFn
  emptyParam: CvcEntitySelectMessageFn
  emptyParamAll: CvcEntitySelectMessageFn
}

export const cvcDefaultSelectMessageOptions: CvcEntitySelectMessageOptions = {
  search: (entityName, query, _paramName) =>
    `Searching ${entityName} matching "${query}""...`,
  searchAll: (entityName, _query, _paramName) => `Listing all ${entityName}...`,
  searchParam: (entityName, query, paramName) =>
    `Searching ${paramName} ${entityName} matching "${query}""...`,
  searchParamAll: (entityName, _query, paramName) =>
    `Listing all ${paramName} ${entityName}...`,
  empty: (entityName, query, _paramName) =>
    `No ${entityName} found matching "${query}"`,
  emptyAll: (entityName, _query, _paramName) => `No ${entityName} found.`,
  emptyParam: (entityName, query, paramName) =>
    `No ${paramName} ${entityName} found matching "${query}"`,
  emptyParamAll: (entityName, _query, paramName) =>
    `No ${paramName} ${entityName} found`,
}

@UntilDestroy({ arrayName: 'stateSubscriptions' })
@Component({
  selector: 'cvc-entity-select',
  templateUrl: './entity-select.component.html',
  styleUrls: ['./entity-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEntitySelectComponent implements OnChanges, AfterViewInit {
  @Input() cvcFormControl!: UntypedFormControl
  @Input() cvcFormlyAttributes!: FormlyFieldConfig
  @Input() cvcEntityName: CvcSelectEntityName = {
    singular: 'Entity',
    plural: 'Entities',
  }
  @Input() cvcSelectMessages?: CvcEntitySelectMessageOptions
  @Input() cvcSelectMode: 'multiple' | 'tags' | 'default' = 'default'
  @Input() cvcPlaceholder?: string
  @Input() cvcLoading?: boolean = false
  @Input() cvcOptions: NzSelectOptionInterface[] | undefined = undefined
  @Input() cvcResults?: any[]
  @Input() cvcShowError: boolean = false
  @Input() cvcDisabled?: boolean = false
  @Input() cvcAllowClear: boolean = true
  @Input() cvcBorderless?: boolean = false
  @Input() cvcShowArrow?: boolean
  @Input() cvcAutoClearSearchValue: boolean = true

  // custom template for field value render
  @Input() cvcCustomTemplate?: TemplateRef<any> | null = null

  // additional content displayed at bottom of options dropdown
  @Input() cvcDropdownExtra?: TemplateRef<any> | null = null

  // name of entity specified by optional param value, for constructing messages
  @Input() cvcParamName?: string | undefined

  // templateref w/ entity's quick-add form component
  @Input() cvcAddEntity: TemplateRef<any> | null = null
  @Input() cvcAddEntityModel: any

  @Input() cvcSelectOpen: Maybe<boolean>
  @Output() cvcOnOpenChange = new EventEmitter<boolean>()

  // throttle search string output: wait 1/3sec after typing activity ends,
  // quash leading event, emit trailing event so we only get 1 search string
  @Output() cvcOnSearch = new EventEmitter<string>().pipe(
    throttleTime(300, asyncScheduler, { leading: false, trailing: true }),
    shareReplay(1)
  ) as EventEmitter<string>

  @Output() cvcOnModelChange = new EventEmitter<Maybe<number>>()

  // SOURCE STREAMS
  onSearchMessage$!: Observable<Maybe<string>>
  onParamName$: Subject<Maybe<string>>
  onOption$: Subject<Maybe<NzSelectOptionInterface[]>>

  messageOptions: CvcEntitySelectMessageOptions = {
    search: (entityName, query, _paramName) =>
      `Searching ${entityName} matching "${query}""...`,
    searchAll: (entityName, _query, _paramName) =>
      `Listing all ${entityName}...`,
    searchParam: (entityName, query, paramName) =>
      `Searching ${paramName} ${entityName} matching "${query}""...`,
    searchParamAll: (entityName, _query, paramName) =>
      `Listing all ${paramName} ${entityName}...`,
    empty: (entityName, query) => `No ${entityName} found matching "${query}"`,
    emptyAll: (entityName, query) => `No ${entityName} found.`,
    emptyParam: (entityName, query, paramName) =>
      `No ${paramName} ${entityName} found matching "${query}"`,
    emptyParamAll: (entityName, _query, paramName) =>
      `No ${paramName} ${entityName} found`,
  }

  constructor(private cdr: ChangeDetectorRef) {
    this.onParamName$ = new Subject<Maybe<string>>()
    this.onOption$ = new Subject<Maybe<NzSelectOptionInterface[]>>()
    // this.onOption$.pipe(tag(`entity-select onOption$`)).subscribe()
    this.cvcOnOpenChange.pipe(tag('entity-select cvcOnOpenChange')).subscribe()
    // this.cvcOnSearch.pipe(tag('entity-select cvcOnSearch$')).subscribe()
    // this.onParamName$.pipe(tag('entity-select onParamName$')).subscribe()
    // this.onOption$.pipe(tag('entity-select onOption$')).subscribe()
  }

  ngAfterViewInit(): void {
    // merge any custom message options from cvcSelectMessages
    if (this.cvcSelectMessages) {
      this.messageOptions = {
        ...this.messageOptions,
        ...this.cvcSelectMessages,
      }
    }
    // produce appropriate dropdown messages by combining relevant observables.
    // prime combineLatest with startWith values
    this.onSearchMessage$ = combineLatest([
      this.cvcOnOpenChange.pipe(startWith(undefined)),
      this.cvcOnSearch.pipe(startWith(undefined)),
      this.onParamName$.pipe(startWith(undefined)),
      this.onOption$.pipe(startWith(undefined)),
    ]).pipe(
      map(
        ([isOpen, searchStr, paramName, options]: [
          Maybe<boolean>,
          Maybe<string>,
          Maybe<string>,
          Maybe<NzSelectOptionInterface[]>
        ]) => {
          const plName = this.cvcEntityName.plural
          if (!isOpen && searchStr === undefined && options === undefined) {
            // INIT - this msg won't be displayed, but its presence
            // sometimes prevents an empty dropdown from displaying briefly
            if (paramName === undefined) {
              return this.messageOptions.searchAll(plName, searchStr, paramName)
            } else {
              return this.messageOptions.searchParamAll(
                plName,
                searchStr,
                paramName
              )
            }
          }
          if (isOpen && searchStr === undefined && options === undefined) {
            // INITIAL CLICK - triggered by onCloseChange event. query hasn't been sent
            // but to prevent an empty dropbox, the default searchAll msg is displayed
            if (paramName === undefined) {
              return this.messageOptions.searchAll(plName, searchStr, paramName)
            } else {
              return this.messageOptions.searchParamAll(
                plName,
                searchStr,
                paramName
              )
            }
          }
          if (
            isOpen &&
            searchStr !== undefined &&
            searchStr.length === 0 &&
            options === undefined
          ) {
            // INITIAL '' QUERY - nz-select emits an empty string after select opens.
            // as with the previous condition, no query has been sent but a
            // blank dropdown doesn't look good so we show the default searchAll msg
            if (paramName === undefined) {
              return this.messageOptions.searchAll(plName, searchStr, paramName)
            } else {
              return this.messageOptions.searchParamAll(
                plName,
                searchStr,
                paramName
              )
            }
          }
          if (
            isOpen &&
            searchStr !== undefined &&
            searchStr.length === 0 &&
            options !== undefined &&
            options.length > 0
          ) {
            // INITIAL '' QUERY RESULTS - initial empty string query results have returned. this
            // msg will not be displayed, since the select options replace it
            return 'INITIAL QUERY RESULTS'
          }
          if (
            isOpen &&
            searchStr !== undefined &&
            searchStr.length > 0 &&
            options !== undefined &&
            options.length > 0
          ) {
            // QUERY STR RESULTS - user has entered at least one character, and its query results
            // have returned. this msg is also not displayed, replaced by select options
            return 'QUERY STR RESULTS RETURNED'
          }
          if (
            isOpen &&
            searchStr !== undefined &&
            searchStr.length > 0 &&
            options !== undefined &&
            options.length == 0 &&
            this.cvcAddEntity !== undefined
          ) {
            // User has searched but no results returned
            return 'SHOW ADD FORM'
          }
          if (
            isOpen &&
            searchStr !== undefined &&
            searchStr.length === 0 &&
            options !== undefined &&
            options.length === 0
          ) {
            // INITIAL QUERY, NO RESULTS - empty string query has returned with no results
            if (paramName === undefined) {
              return this.messageOptions.emptyAll(plName, searchStr, paramName)
            } else {
              return this.messageOptions.emptyParamAll(
                plName,
                searchStr,
                paramName
              )
            }
          }
          if (
            isOpen &&
            searchStr !== undefined &&
            searchStr.length > 0 &&
            options !== undefined &&
            options.length === 0
          ) {
            // STR QUERY, NO RESULTS - string query has returned with no results
            if (paramName === undefined) {
              return this.messageOptions.empty(plName, searchStr, paramName)
            } else {
              return this.messageOptions.emptyParam(
                plName,
                searchStr,
                paramName
              )
            }
          }
          if (
            !isOpen &&
            searchStr !== undefined &&
            searchStr.length === 0 &&
            options !== undefined
          ) {
            // SELECT CLOSED - msg not displayed, returning default msg
            if (paramName === undefined) {
              return this.messageOptions.searchAll(plName, searchStr, paramName)
            } else {
              return this.messageOptions.searchParamAll(
                plName,
                searchStr,
                paramName
              )
            }
          }
          return 'UNHANDLED SELECT MSG CONDITION!'
        }
      )
    )

    // // NOTE: would be ideal if select msgs could be set w/o this subscribe, however I could
    // // not get it working with nz-select's nzNotFound templateRef Input. Might be able to do
    // // it using @ViewChild, as with the select option templates.

    if (this.cvcEntityName.singular === 'Source') {
      this.onSearchMessage$
        .pipe(tag('entity-select onSearchMessage$'), untilDestroyed(this))
        .subscribe((message) => {})
    }
  } // ngAfterViewInit()

  getSearchMessage(searchStr: string, paramName?: string): string {
    const plName = this.cvcEntityName.plural
    if (paramName && searchStr.length > 0) {
      return this.messageOptions.searchParam(plName, searchStr, paramName)
    } else if (!paramName && searchStr.length > 0) {
      return this.messageOptions.search(plName, searchStr, paramName)
    } else if (paramName && searchStr.length === 0) {
      return this.messageOptions.searchParamAll(plName, searchStr, paramName)
    } else {
      return `Searching ${plName}...`
    }
  }

  getEmptyMessage(searchStr: string, paramName?: string): string {
    const plName = this.cvcEntityName.plural
    if (paramName && searchStr.length > 0) {
      return this.messageOptions.emptyParam(plName, searchStr, paramName)
    } else if (paramName && searchStr.length === 0) {
      return this.messageOptions.emptyParamAll(plName, searchStr, paramName)
    } else {
      return this.messageOptions.empty(plName, searchStr)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cvcParamName) {
      this.onParamName$.next(changes.cvcParamName.currentValue)
    }
    if (changes.cvcOptions) {
      const options = changes.cvcOptions.currentValue
      this.onOption$.next(options)
    }
  }
}
