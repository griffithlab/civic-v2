import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.less']
})
export class CommentListComponent implements OnInit {
  @Input() comments!: Comment[];

  constructor() { }

  ngOnInit(): void {
  }

}
