import { Component, Input, OnInit } from "@angular/core";
import { HovercardGeneFragment, GeneHoverCardGQL, Maybe } from "@app/generated/civic.apollo";
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
    selector: 'cvc-gene-hovercard',
    templateUrl: './gene-hovercard.component.html',
    styleUrls: ['./gene-hovercard.component.less']
})
export class GeneHovercardComponent implements OnInit {
    @Input() geneId!: number;

    gene$?: Observable<Maybe<HovercardGeneFragment>>

    constructor(private gql: GeneHoverCardGQL) { }

    ngOnInit(){
        if(this.geneId == undefined) {
            throw new Error("Must pass an id into gene hovercard");
        }
        this.gene$ = this.gql.watch({geneId: this.geneId})
            .valueChanges
            .pipe(map(({data}) => data.gene))
    }
}