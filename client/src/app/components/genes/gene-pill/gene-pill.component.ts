import { Component, Input, OnInit } from "@angular/core";

export interface LinkableGene {
    id: number,
    name: string,
}

@Component({
    selector: 'cvc-gene-pill',
    templateUrl: './gene-pill.component.html',
    styleUrls: ['./gene-pill.component.less']
})
export class GenePillComponent implements OnInit {
    @Input() gene!: LinkableGene

    ngOnInit() {
        if(this.gene === undefined) {
            throw new Error('Must pass a gene into gene pill.')
        }
    }
}