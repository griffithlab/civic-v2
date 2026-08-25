import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Component, Input } from '@angular/core'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { BehaviorSubject, finalize } from 'rxjs'

@Component({
  selector: 'cvc-table-downloader',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzIconModule],
  templateUrl: './table-downloader.component.html',
  styleUrls: ['./table-downloader.component.less'],
})
export class CvcTableDownloaderComponent {
  @Input() tableName!: string
  @Input() vars?: object | null

  downloading = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) {}

  downloadTable(): void {
    if (!this.tableName) {
      return
    }

    this.downloading.next(true)
    this.http
      .post(
        `/api/download_table/${this.tableName}`,
        { variables: this.vars ?? {} },
        { responseType: 'blob' }
      )
      .pipe(finalize(() => this.downloading.next(false)))
      .subscribe((blob) => this.saveBlob(blob))
  }

  private saveBlob(blob: Blob): void {
    const anchor = document.createElement('a')
    const url = window.URL.createObjectURL(
      new Blob([blob], { type: 'text/tab-separated-values' })
    )
    anchor.href = url
    anchor.download = `${this.tableName}-${new Date().toISOString().slice(0, 10)}.tsv`
    anchor.click()
    window.setTimeout(() => window.URL.revokeObjectURL(url), 400)
  }
}
