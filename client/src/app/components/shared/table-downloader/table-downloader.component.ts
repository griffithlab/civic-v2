import { Component, Output, EventEmitter, OnDestroy, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Query } from "apollo-angular";
import { EmptyObject } from "apollo-angular/types";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'cvc-table-downloader',
  templateUrl: './table-downloader.component.html',
  styleUrls: ['./table-downloader.component.less'],
})
export class CvcTableDownloaderComponent<GQL extends  Query<Q,V>, Q extends {}, V extends EmptyObject> {

  @Input() tableName?: string
  @Input() gql?: GQL
  @Input() vars?: V

  downloading = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) {}

  downloadTable() {
    if(this.gql && this.vars) {
      let payload = {
        query: this.gql.document.loc?.source.body,
        variables: this.vars
      }
      this.downloading.next(true);
      this.http.post(`/api/download_table/${this.tableName}`, payload, {responseType: 'blob', observe: 'response'}).subscribe((resp: any) => {
        const a = document.createElement("a");
        document.body.append(a);
        a.style.display = 'none';
        const blob = new Blob([resp.body], {type: 'text/csv'});
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = `${this.tableName}-${new Date().toLocaleString().split(',')[0]}.tsv`
        a.click();
        this.downloading.next(false);
        setTimeout(() => { window.URL.revokeObjectURL(url); }, 400)
      })
    }

  }
}
