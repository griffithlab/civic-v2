import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(private title: Title, private meta: Meta) {}

  updateTitle(title: string): void {
    this.title.setTitle((title += ' | CIViC'));
  }

  updateMetaTags(metaTags: MetaDefinition[]): void {
    metaTags.forEach((m) => this.meta.updateTag(m));
  }
}
