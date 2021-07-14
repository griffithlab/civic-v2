import { Component, OnInit } from '@angular/core';
/**
 * Wraps a set of <cvc-[entity]-tag> elements to apply styles that ensure
 * internal margins between tag rows, and appropriate padding with its parent
 */
@Component({
  selector: 'cvc-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.less']
})
export class TagListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
