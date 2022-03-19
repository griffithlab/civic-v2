import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EvidenceItem, EvidenceTransferSearchGQL, EvidenceTransferSearchQuery, EvidenceTransferSearchQueryVariables } from '@app/generated/civic.apollo';
import { FieldType } from '@ngx-formly/core';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

type FormOption = {
  label: string,
  value: number
}

@Component({
  selector: 'cvc-evidence-transfer-tmp',
  templateUrl: './evidence-transfer-tmp.type.html',
  styleUrls: ['./evidence-transfer-tmp.type.less']
})
export class EvidenceTransferTmpType extends FieldType implements OnInit, AfterViewInit {
  formControl!: FormControl;
  testOptions: FormOption[];

  private queryRef!: QueryRef<EvidenceTransferSearchQuery, EvidenceTransferSearchQueryVariables>;
  evidence$?: Observable<FormOption[]>

  constructor(private queryGQL: EvidenceTransferSearchGQL) {
    super();
    this.testOptions = [
      { label: 'EID525', value: 525 },
      { label: 'EID5', value: 5 },
      { label: 'EID870', value: 870 },
      { label: 'EID24', value: 24 },
    ],
      this.defaultOptions = {
        templateOptions: {
          placeholder: 'Manage evidence items',
          options: this.testOptions
          // options: ['EID25', 'EID156', 'EID625'],
        }
      }
  }

  ngOnInit(): void {
    this.queryRef = this.queryGQL.watch({ id: 99999, first: 10 })

    this.evidence$ = this.queryRef
      .valueChanges
      .pipe(
        pluck('data', 'evidenceItems', 'edges'),
        map((evidence) => {
          console.log(evidence);
          return evidence.map(({ node }) => {
            console.log(node);
            return { value: node!.id, label: node!.name }
            // return { value: e.id, label: e.name };
            // let aliases = g.geneAliases.length > 0 ? `Aliases: ${g.geneAliases.join(', ')}` : ""
            // return {
            //   value: g.id,
            //   tooltip: `${g.name} (${g.entrezId}) ${aliases}`,
            //   label: `${g.name} (${g.entrezId})`,
            //   gene: g,
            // }
          })
        })
      )

  }

  ngAfterViewInit(): void {
    this.to.onSearch = (value: number): void => {
      if (value) {
        this.queryRef.refetch({ id: +value })
      }
    }
  }

}
