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
  tap,
  throttleTime,
} from 'rxjs'
import { tag } from 'rxjs-spy/operators'

export type CvcSelectEntityName = { singular: string; plural: string }

type NotFoundDisplay = {
  message: string
  searchStr: string
  showAddForm: boolean
  showSpinner: boolean
}

type CvcEntitySelectMessageFn = (
  entityName: string,
  searchStr: Maybe<string>,
  paramName?: string
) => string

export type CvcEntitySelectMessageOptions = {
  search: CvcEntitySelectMessageFn
  searchAll: CvcEntitySelectMessageFn
  searchParam: CvcEntitySelectMessageFn
  searchEnterQuery: CvcEntitySelectMessageFn
  searchParamAll: CvcEntitySelectMessageFn
  searchEnterQueryAll: CvcEntitySelectMessageFn
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
  searchEnterQuery: (entityName, query, paramName) =>
    `Enter a query to search ${paramName} ${entityName}`,
  searchParamAll: (entityName, _query, paramName) =>
    `Listing all ${paramName} ${entityName}...`,
  searchEnterQueryAll: (entityName, _query, _paramName) =>
    `Enter a query to search ${entityName}`,
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
  @Input() cvcMinSearchStrLength: number = 0
  @Output() cvcOnOpenChange = new EventEmitter<boolean>()

  // throttle search string output: wait 1/3sec after typing activity ends,
  // quash leading event, emit trailing event so we only get 1 search string
  @Output() cvcOnSearch = new EventEmitter<string>().pipe(
    throttleTime(300, asyncScheduler, { leading: false, trailing: true }),
    shareReplay(1)
  ) as EventEmitter<string>

  @Output() cvcOnModelChange = new EventEmitter<Maybe<number>>()

  // SOURCE STREAMS
  notFoundDisplay$!: Observable<NotFoundDisplay>
  onParamName$: Subject<Maybe<string>>
  onOption$: Subject<Maybe<NzSelectOptionInterface[]>>

  messageOptions: CvcEntitySelectMessageOptions = cvcDefaultSelectMessageOptions

  constructor(private cdr: ChangeDetectorRef) {
    this.onParamName$ = new Subject<Maybe<string>>()
    this.onOption$ = new Subject<Maybe<NzSelectOptionInterface[]>>()
    // this.onOption$.pipe(tag(`entity-select onOption$`)).subscribe()
    // this.cvcOnOpenChange.pipe(tag('entity-select cvcOnOpenChange')).subscribe()
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
    // emit a notFoundDisplay VM for displaying message, spinner, add form
    this.notFoundDisplay$ = combineLatest([
      this.cvcOnOpenChange.pipe(startWith(false)),
      this.cvcOnSearch.pipe(startWith(undefined)),
      this.onParamName$.pipe(startWith(undefined)),
      this.onOption$.pipe(startWith(undefined)),
    ]).pipe(
      tag(
        `${this.cvcEntityName.plural} entity-select notFoundDisplay$ combineLatest`
      ),
      map(
        ([isOpen, searchStr, paramName, options]: [
          Maybe<boolean>,
          Maybe<string>,
          Maybe<string>,
          Maybe<NzSelectOptionInterface[]>
        ]) => {
          const entityName = this.cvcEntityName.plural
          const minLength = this.cvcMinSearchStrLength
          let display = {
            showSpinner: false,
            showAddForm: false,
            searchStr: '',
            message: '',
          }

          // INITIALIZATION / RESET
          // Set the initial message opon select open, after closing
          if (!isOpen) {
            return this.getSelectInitDisplay(entityName, minLength, paramName)
          }

          // QUERY ENTERED, SEARCHING
          if (searchStr !== undefined && searchStr.length > 0) {
            return this.getSelectSearchingDisplay(
              entityName,
              minLength,
              paramName,
              options
            )
          }

          //
          // NOT FOUND
          //

          // this should not return
          return {
            ...display,
            showSpinner: false,
            showAddForm: false,
            message: 'UNHANDLED NOT FOUND DISPLAY CONDITION',
          }

          // if (
          //   isOpen &&
          //   searchStr !== undefined &&
          //   searchStr.length > 0 &&
          //   options !== undefined &&
          //   options.length > 0
          // ) {
          //   // QUERY STR RESULTS - user has entered at least one character, and its query results
          //   // have returned. this msg is also not displayed, replaced by select options
          //   return 'QUERY STR RESULTS RETURNED'
          // }
          // if (
          //   isOpen &&
          //   searchStr !== undefined &&
          //   searchStr.length > 0 &&
          //   options !== undefined &&
          //   options.length == 0 &&
          //   this.cvcAddEntity !== undefined
          // ) {
          //   // User has searched but no results returned
          //   return 'SHOW ADD FORM'
          // }
          // if (
          //   isOpen &&
          //   searchStr !== undefined &&
          //   searchStr.length === 0 &&
          //   options !== undefined &&
          //   options.length === 0
          // ) {
          //   // INITIAL QUERY, NO RESULTS - empty string query has returned with no results
          //   if (paramName === undefined) {
          //     return this.messageOptions.emptyAll(entityName, searchStr, paramName)
          //   } else {
          //     return this.messageOptions.emptyParamAll(
          //       entityName,
          //       searchStr,
          //       paramName
          //     )
          //   }
          // }
          // if (
          //   isOpen &&
          //   searchStr !== undefined &&
          //   searchStr.length > 0 &&
          //   options !== undefined &&
          //   options.length === 0
          // ) {
          //   // STR QUERY, NO RESULTS - string query has returned with no results
          //   if (paramName === undefined) {
          //     return this.messageOptions.empty(entityName, searchStr, paramName)
          //   } else {
          //     return this.messageOptions.emptyParam(
          //       entityName,
          //       searchStr,
          //       paramName
          //     )
          //   }
          // }
          // if (
          //   !isOpen &&
          //   searchStr !== undefined &&
          //   searchStr.length === 0 &&
          //   options !== undefined
          // ) {
          //   // SELECT CLOSED - msg not displayed, returning default msg
          //   if (paramName === undefined) {
          //     return this.messageOptions.searchAll(entityName, searchStr, paramName)
          //   } else {
          //     return this.messageOptions.searchParamAll(
          //       entityName,
          //       searchStr,
          //       paramName
          //     )
          //   }
          // }
          // return 'UNHANDLED SELECT MSG CONDITION!'
        }
      ),
      tag(`${this.cvcEntityName.plural} entity-select notFoundDisplay$ emit`)
    )

    // // NOTE: would be ideal if select msgs could be set w/o this subscribe, however I could
    // // not get it working with nz-select's nzNotFound templateRef Input. Might be able to do
    // // it using @ViewChild, as with the select option templates.

    // if (this.cvcEntityName.singular === 'Source') {
    //   this.onNotFoundMessageVM$
    //     .pipe(tag('entity-select onNotFoundMessageVM$'), untilDestroyed(this))
    //     .subscribe((message) => {})
    // }
  } // ngAfterViewInit()

  getSelectInitDisplay(
    entityName: string,
    minLength: number,
    paramName: Maybe<string>
  ): NotFoundDisplay {
    let msgFn: CvcEntitySelectMessageFn = this.messageOptions.searchAll
    let showSpinner = false
    // if no min query length set, queue 'Loading...' msg
    if (minLength == 0) {
      showSpinner = true
      if (paramName === undefined) {
        msgFn = this.messageOptions.searchAll
      } else {
        msgFn = this.messageOptions.searchParamAll
      }
    } else if (minLength > 0) {
      // else queue 'Enter search str...' msg
      showSpinner = false
      if (paramName === undefined) {
        msgFn = this.messageOptions.searchEnterQueryAll
      } else {
        msgFn = this.messageOptions.searchEnterQuery
      }
    }
    return {
      message: msgFn(entityName, '', paramName),
      showSpinner: showSpinner,
      showAddForm: false,
      searchStr: '',
    }
  }

  getSelectSearchingDisplay(
    entityName: string,
    minLength: number,
    paramName: Maybe<string>,
    options: Maybe<NzSelectOptionInterface[]>
  ): NotFoundDisplay {
    return {
      message: 'SEARCHING',
      showSpinner: true,
      showAddForm: false,
      searchStr: '',
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
