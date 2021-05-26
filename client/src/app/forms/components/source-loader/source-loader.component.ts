import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CitationExistenceCheckGQL, SourceSource } from '@app/generated/civic.apollo';
import { $enum } from 'ts-enum-util';

@Component({
  selector: 'cvc-source-loader',
  templateUrl: './source-loader.component.html',
  styleUrls: ['./source-loader.component.less']
})
export class SourceLoaderComponent implements AfterContentInit {
  @Input() model!: any;
  @Output() modelChange = new EventEmitter<any>();

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

  constructor(private existenceCheckQuery: CitationExistenceCheckGQL) {}

  onExistenceQuery(id: string): void {
    this.existenceCheckQuery
      .fetch({
        sourceType: this.sourceType,
        citationId: +this.citationId
      })
  }

  ngAfterContentInit(): void {
    console.log('model');
  }
}
