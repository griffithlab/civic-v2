import { Component, Input, OnInit } from "@angular/core";
import { Comment } from "@app/generated/civic.apollo";

@Component({
    selector: 'cvc-comment-display',
    templateUrl: './comment-display.component.html',
    styleUrls: ['./comment-display.component.less']
})
export class CommentDisplayComponent implements OnInit {
    @Input() comment!: Comment

    ngOnInit() {
        if(this.comment === undefined) {
            throw new Error('Must pass a comment into comment display component.')
        }
    }
}