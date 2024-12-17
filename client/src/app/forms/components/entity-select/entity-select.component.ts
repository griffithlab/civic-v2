import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core'
import { UntypedFormControl } from '@angular/forms'
import { Maybe } from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import {
  NzSelectComponent,
  NzSelectOptionInterface,
} from 'ng-zorro-antd/select'
import {
  asyncScheduler,
  BehaviorSubject,
  combineLatest,
  distinctUntilChanged,
  map,
  shareReplay,
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
  paramName?: string,
  minSearchStrLength?: number
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

export type CvcAddEntityBehaviorFn = (searchStr: string, res: any[]) => boolean

export const cvcDefaultSelectMessageOptions: CvcEntitySelectMessageOptions = {
  search: (entityName, query, _paramName) =>
    `Searching ${entityName} matching "${query}"...`,
  searchAll: (entityName, _query, _paramName) => `Listing all ${entityName}...`,
  searchParam: (entityName, query, paramName) =>
    `Searching ${paramName} ${entityName} matching "${query}"...`,
  searchParamAll: (entityName, _query, paramName) =>
    `Listing all ${paramName} ${entityName}...`,
  searchEnterQuery: (entityName, _query, paramName, minLength) =>
    `Enter at least ${minLength} characters to search ${paramName} ${entityName}`,
  searchEnterQueryAll: (entityName, _query, _paramName, minLength) =>
    `Enter at least least ${minLength} characters to search ${entityName}`,
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
  standalone: false,
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
  @Input() cvcBorderless: boolean = false
  @Input() cvcShowArrow: boolean = false
  @Input() cvcAutoClearSearchValue: boolean = true
  @Input() cvcSuffixIcon: string | null = 'search'

  // custom template for field value render
  @Input() cvcCustomTemplate?: TemplateRef<any> | null = null

  // additional content displayed at bottom of options dropdown
  //@Input() cvcDropdownExtra?: TemplateRef<any> | null = null

  // name of entity specified by optional param value, for constructing messages
  @Input() cvcParamName?: string | undefined

  // templateref w/ entity's quick-add form component
  @Input() cvcAddEntity: TemplateRef<any> | null = null

  // add entity model will be passed to the add entity form template outlet context
  @Input() cvcAddEntityModel: any

  // select will prompt user to enter a search string if < min search length
  @Input() cvcMinSearchStrLength: number = 0

  // provide logic for displaying add form if it is more complex than
  // displaying when no results returned.
  @Input() cvcAddEntityBehavior: CvcAddEntityBehaviorFn = (s, res) =>
    s.length > this.cvcMinSearchStrLength && res.length === 0

  // pass-through to nz-select's nzOpen, passed from parent type's entity-select.mixin
  @Input() cvcSelectOpen: Maybe<boolean>
  @Output() cvcOnOpenChange = new EventEmitter<boolean>()

  // throttle search string output: wait 1/3sec after typing activity ends,
  // quash leading event, emit trailing event so we only get 1 search string
  @Output() cvcOnSearch = new EventEmitter<string>().pipe(
    throttleTime(300, asyncScheduler, { leading: false, trailing: true }),
    shareReplay(1)
  ) as EventEmitter<string>

  @Output() cvcOnModelChange = new EventEmitter<Maybe<number>>()
  @Output() cvcSelectComponent = new EventEmitter<NzSelectComponent>()

  @ViewChild(NzSelectComponent) nzSelectComponent?: NzSelectComponent

  // INPUT STREAMS
  onParamName$: BehaviorSubject<Maybe<string>>
  onLoading$: BehaviorSubject<boolean>
  onOption$: BehaviorSubject<NzSelectOptionInterface[]>

  // SOURCE STREAMS
  onOpenChange$: BehaviorSubject<boolean>

  // Presentation Streams
  notFoundDisplay$: BehaviorSubject<NotFoundDisplay>

  messageOptions: CvcEntitySelectMessageOptions = cvcDefaultSelectMessageOptions
  previousIsOpen: boolean

  constructor() {
    this.onParamName$ = new BehaviorSubject<Maybe<string>>(undefined)
    this.onOption$ = new BehaviorSubject<NzSelectOptionInterface[]>([])
    this.onOpenChange$ = new BehaviorSubject<boolean>(false)
    this.onLoading$ = new BehaviorSubject<boolean>(false)
    this.notFoundDisplay$ = new BehaviorSubject<NotFoundDisplay>({
      searchStr: '',
      showSpinner: true,
      showAddForm: false,
      message: `Searching ${this.cvcEntityName.plural}...`,
    })
    this.previousIsOpen = false
  }

  ngAfterViewInit(): void {
    // merge any custom message options from cvcSelectMessages
    if (this.cvcSelectMessages) {
      this.messageOptions = {
        ...this.messageOptions,
        ...this.cvcSelectMessages,
      }
    }

    // emit reference to nzSelect, required by entity-select.mixin
    if (!this.nzSelectComponent) {
      console.error(
        `${this.cvcEntityName.singular} entity-select could not gain reference to its nzSelectComponent, aborting AfterViewInit()`
      )
      return
    }
    this.cvcSelectComponent.next(this.nzSelectComponent)

    this.onOpenChange$
      .pipe(untilDestroyed(this))
      .subscribe((change: boolean) => {
        this.cvcOnOpenChange.next(change)
      })

    // emit a notFoundDisplay VM for displaying message, spinner, add form.
    // non Behavior/Replay subjects do not need a startWith here
    combineLatest([
      this.onOpenChange$,
      this.cvcOnSearch,
      this.onParamName$,
      this.onOption$,
      this.onLoading$.pipe(distinctUntilChanged()),
    ])
      .pipe(
        // tag(
        //   `${this.cvcEntityName.plural} entity-select notFoundDisplay$ combineLatest`
        // ),
        map(
          ([isOpen, searchStr, paramName, options, isLoading]: [
            boolean,
            string,
            Maybe<string>,
            NzSelectOptionInterface[],
            boolean,
          ]) => {
            const entityName = this.cvcEntityName.plural
            const minLength = this.cvcMinSearchStrLength
            const hasAddForm = this.cvcAddEntity !== null ? true : false
            const initialOpen = this.previousIsOpen === false && isOpen === true

            this.previousIsOpen = isOpen

            // INITIAL LOADING / ENTER QUERY PROMPT
            if (initialOpen) {
              return this.getSelectInitDisplay(entityName, minLength, paramName)
            }

            // QUERY ENTERED, SEARCHING MESSAGE
            if (isLoading && searchStr.length >= minLength) {
              // need to do form display logic here, otherwise add form will
              // disappear and reappear in a distracting manner when entering search str
              const showAddFormWhenSearching = this.cvcAddEntityBehavior(
                searchStr,
                this.cvcResults || []
              )

              return this.getSelectSearchingDisplay(
                searchStr,
                entityName,
                minLength,
                paramName,
                hasAddForm,
                showAddFormWhenSearching
              )
            }

            // NOT FOUND MESSAGE / ADD ENTITY FORM
            if (
              isOpen &&
              !isLoading &&
              searchStr.length >= minLength &&
              options.length === 0
            ) {
              return this.getSelectEmptyDisplay(
                searchStr,
                entityName,
                paramName,
                hasAddForm
              )
            }

            // IDLE, DISPLAYING OPTIONS
            return {
              searchStr: '',
              showSpinner: false,
              showAddForm:
                hasAddForm &&
                this.cvcAddEntityBehavior(searchStr, this.cvcResults || []),
              message: '', // should never be displayed, since select will show options
            }
          }
        ),
        tap((display: NotFoundDisplay) => {
          this.notFoundDisplay$.next(display)
        }),
        untilDestroyed(this)
      )
      .subscribe()
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
      message: msgFn(entityName, '', paramName, minLength),
      showSpinner: showSpinner,
      showAddForm: false,
      searchStr: '',
    }
  }

  getSelectSearchingDisplay(
    searchStr: string,
    entityName: string,
    _minLength: number,
    paramName: Maybe<string>,
    hasAddForm: boolean,
    showAddForm: boolean = false
  ): NotFoundDisplay {
    let msgFn: CvcEntitySelectMessageFn = this.messageOptions.searchAll
    let showSpinner = true
    if (paramName === undefined) {
      msgFn =
        searchStr.length > 0
          ? this.messageOptions.search
          : this.messageOptions.searchAll
    } else {
      msgFn =
        searchStr.length > 0
          ? this.messageOptions.searchParam
          : this.messageOptions.searchParamAll
    }
    return {
      message: msgFn(entityName, searchStr, paramName),
      showSpinner: showSpinner,
      showAddForm: hasAddForm && showAddForm,
      searchStr: searchStr,
    }
  }

  getSelectEmptyDisplay(
    searchStr: string,
    entityName: string,
    paramName: Maybe<string>,
    hasAddForm: boolean
  ): NotFoundDisplay {
    let msgFn: CvcEntitySelectMessageFn = this.messageOptions.empty
    if (paramName === undefined) {
      msgFn =
        searchStr.length > 0
          ? this.messageOptions.empty
          : this.messageOptions.emptyAll
    } else {
      msgFn =
        searchStr.length > 0
          ? this.messageOptions.emptyParam
          : this.messageOptions.emptyParamAll
    }
    return {
      message: msgFn(entityName, searchStr, paramName),
      showSpinner: false,
      showAddForm: hasAddForm,
      searchStr: searchStr,
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cvcParamName) {
      this.onParamName$.next(changes.cvcParamName.currentValue)
    }
    if (changes.cvcOptions) {
      const options = changes.cvcOptions.currentValue
      if (options !== undefined) this.onOption$.next(options)
    }
    if (changes.cvcLoading) {
      const loading = changes.cvcLoading.currentValue
      if (loading !== undefined) this.onLoading$.next(loading)
    }
  }
}
