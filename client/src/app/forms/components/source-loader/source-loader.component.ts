import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cvc-source-loader',
  templateUrl: './source-loader.component.html',
  styleUrls: ['./source-loader.component.less']
})
export class SourceLoaderComponent implements AfterContentInit {
  @Input() model!: any;
  @Output() modelChange = new EventEmitter<any>();
  constructor() { }

  ngAfterContentInit(): void {
    console.log('model');
  }
}
