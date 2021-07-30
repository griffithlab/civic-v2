import { Component, Input, OnInit } from '@angular/core';

export interface LinkableComment {
  id: number,
  name: string
}

@Component({
  selector: 'cvc-comment-tag',
  templateUrl: './comment-tag.component.html',
  styleUrls: ['./comment-tag.component.less']
})
export class CommentTagComponent implements OnInit {
  @Input() comment!: LinkableComment;
  @Input() enablePopover: Boolean = true
  
  constructor() { }

  ngOnInit(): void {
    if (this.comment === undefined) {
      throw new Error('cvc-comment-tag requires LinkableComment input, none supplied.')
    }
  }

}
