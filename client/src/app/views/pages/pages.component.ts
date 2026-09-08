import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'cvc-pages',
  templateUrl: './pages.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
