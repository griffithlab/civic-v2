import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'cvc-source-add-page',
  templateUrl: './source-add.page.html',
  styleUrls: ['./source-add.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SourceAddPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
