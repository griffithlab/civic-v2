import { Component, Input, OnInit } from "@angular/core";
import { CommentBodySegment } from "@app/generated/civic.apollo";

@Component({
    selector: 'cvc-comment-body',
    templateUrl: './comment-body.component.html',
    styleUrls: ['./comment-body.component.less']
})
export class CvcCommentBodyComponent implements OnInit {
    @Input() commentBodySegments!: CommentBodySegment[]

    ngOnInit() {
        if(this.commentBodySegments === undefined) {
            throw new Error('Must pass a list of comment body segments into comment body component.')
        }
    }
}
