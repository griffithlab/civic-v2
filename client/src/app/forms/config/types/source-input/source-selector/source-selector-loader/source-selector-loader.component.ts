import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FetchResult } from '@apollo/client/core';
import { ApolloError } from '@apollo/client/errors';
import {
  AddRemoteCitationInput,
  CitationExistenceCheckGQL,
  CreateSourceStubGQL,
  CreateSourceStubMutation,
  CreateSourceStubMutationVariables,
  Maybe,
  SourceSource,
  SourceStub,
} from '@app/generated/civic.apollo';
import { finalize } from 'rxjs/operators';
import { $enum } from 'ts-enum-util';

@Component({
  selector: 'cvc-source-loader',
  templateUrl: './source-selector-loader.component.html',
  styleUrls: ['./source-selector-loader.component.less'],
})
export class SourceSelectorLoaderComponent implements AfterContentInit {
  @Input() model!: any;
  @Output() modelUpdate = new EventEmitter<any>();

  @Input() citationId!: string;
  @Output() citationIdChange = new EventEmitter<string>();

  @Input()
  set sourceType(type: SourceSource) {
    this._sourceType = type;
    this.sourceTypeKey = $enum(SourceSource).getKeyOrThrow(type);
  }
  get sourceType(): SourceSource {
    return this._sourceType;
  }
  @Output() sourceTypeChange = new EventEmitter<any>();

  _sourceType!: SourceSource;
  sourceTypeKey!: string;

  showPrompt: boolean = true;

  isChecking: boolean = false;
  existenceFail: boolean = false;
  existenceError: string[] = [];
  foundCitation: Maybe<string> = undefined;

  isCreating: boolean = false;
  createSuccess: boolean = false;
  createErrors: string[] = [];
  sourceStub: Maybe<SourceStub>;

  constructor(
    private existenceCheckQuery: CitationExistenceCheckGQL,
    private createSourceStubQuery: CreateSourceStubGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  onExistenceQuery(e: any): void {
    if (e) {
      e.preventDefault();
    } // prevent form submit
    this.isChecking = true;
    this.foundCitation = undefined;
    this.existenceCheckQuery
      .fetch({
        sourceType: this.sourceType,
        citationId: this.citationId,
      })
      .pipe(
        finalize(() => {
          this.isChecking = false;
          // TODO figure out why this detectChanges call is necessary
          this.changeDetectorRef.detectChanges();
        })
      )
      .subscribe({
        next: ({ data: { remoteCitation } }) => {
          if (remoteCitation !== null) {
            this.foundCitation = remoteCitation;
          } else {
            this.showPrompt = false;
            this.existenceFail = true;
          }
        },
        error: (error: ApolloError): void => {
          this.showPrompt = false;
          this.existenceError = error.graphQLErrors.map((e) => e.message);
        },
        complete: (): void => {
          this.existenceError = [];
        },
      });
  }

  onCreateSourceStub(e: any) {
    // TODO determine if this preventDefault is actuall required
    if (e) {
      e.preventDefault();
    } // prevent form submit
    this.isCreating = true;
    this.createSuccess = false;

    this.createSourceStubQuery
      .mutate({
        input: {
          citationId: this.citationId,
          sourceType: this.sourceType,
        },
      })
      .pipe(
        finalize(() => {
          this.isCreating = false;
          // TODO figure out why this detectChanges call is necessary
          this.changeDetectorRef.detectChanges();
        })
      )
      .subscribe({
        next: ({ data }): void => {
          console.log(data);
          const source = data?.addRemoteCitation?.newSource as SourceStub;
          this.sourceStub = source;
          this.createSuccess = true;
        },
        error: (error: ApolloError): void => {
          this.showPrompt = false;
          this.createSuccess = false;
          this.createErrors = error.graphQLErrors.map((e) => e.message);
        },
        complete: (): void => {
          this.createErrors = [];
        },
      });
  }

  onAcceptSource(e: any): void {
    if (e) {
      e.preventDefault();
    } // prevent form submit
    console.log('source accepted');
    const model = {
      ...this.model,
      id: this.sourceStub!.id,
      citation: this.foundCitation,
      citationId: this.citationId,
    };
    this.modelUpdate.emit(model);
  }

  ngAfterContentInit(): void {
    console.log('model');
  }
}
