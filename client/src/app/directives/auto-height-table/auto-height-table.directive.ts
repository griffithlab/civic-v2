import {
  Directive,
  ElementRef,
  Input,
  SimpleChange,
  HostListener,
  ChangeDetectorRef,
  OnInit,
  AfterViewInit,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import { NzTableComponent } from 'ng-zorro-antd/table'

//
// From zorro-sharper: https://github.com/1-2-3/zorro-sharper/blob/master/README-en_US.md
//
@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[cvcAutoHeightTable]',
    standalone: false
})
export class CvcAutoHeightTableDirective implements OnInit, AfterViewInit {
  @Input('cvcAutoHeightTable')
  offset: Maybe<number>

  constructor(
    private element: ElementRef,
    private table: NzTableComponent<any>,
    private cd: ChangeDetectorRef
  ) {
    // 当前页码改变时自动回到顶部
    if (this.table && this.table.nzPageIndexChange) {
      this.table.nzPageIndexChange.subscribe((index) => {
        const tableBody =
          this.element.nativeElement.querySelector('.ant-table-body')
        if (tableBody && tableBody.scrollTop) {
          tableBody.scrollTop = 0
        }
      })
    }
  }

  /**
   * 响应浏览器窗体大小变化
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.doAutoSize()
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.doAutoSize()
  }

  private doAutoSize() {
    setTimeout(() => {
      const offset = this.offset === undefined ? 70 : this.offset
      if (
        this.element &&
        this.element.nativeElement &&
        this.element.nativeElement.parentElement &&
        this.element.nativeElement.parentElement.offsetHeight
      ) {
        if (this.table && this.table.nzScroll && this.table.nzScroll.x) {
          const originNzScroll = this.table.nzScroll
            ? { ...this.table.nzScroll }
            : null
          this.table.nzScroll = {
            y:
              (
                this.element.nativeElement.parentElement.offsetHeight -
                this.element.nativeElement.offsetTop -
                offset
              ).toString() + 'px',
            x: this.table.nzScroll.x,
          }
          this.table.ngOnChanges({
            nzScroll: new SimpleChange(
              { originNzScroll },
              this.table.nzScroll,
              false
            ),
          })
          this.cd.detectChanges()
        } else {
          const originNzScroll = this.table.nzScroll
            ? { ...this.table.nzScroll }
            : null
          this.table.nzScroll = {
            ...{
              y:
                (
                  this.element.nativeElement.parentElement.offsetHeight -
                  this.element.nativeElement.offsetTop -
                  offset
                ).toString() + 'px',
            },
          }

          this.table.ngOnChanges({
            nzScroll: new SimpleChange(
              { originNzScroll },
              this.table.nzScroll,
              false
            ),
          })
          this.cd.detectChanges()
        }
      }
    }, 10)
  }
}
