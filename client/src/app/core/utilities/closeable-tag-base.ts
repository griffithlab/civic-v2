import { Component, Input, OnInit } from "@angular/core";

@Component({ template: '', })
export abstract class BaseCloseableTag implements OnInit {
    @Input() onCloseClicked?: (id: number) => void
    @Input() linked?: boolean = true

    popoverVisible = false
    abstract idFunction(): number

    ngOnInit(): void {
      if(this.onCloseClicked) {
        // If you want the tag to be clickable to close, it cannot also be linkable
        this.linked = false
      }
    }

    itemClosed(_: MouseEvent): void {
      this.popoverVisible = false
      if(this.onCloseClicked) {
        this.onCloseClicked(this.idFunction());
      }
    }
  }