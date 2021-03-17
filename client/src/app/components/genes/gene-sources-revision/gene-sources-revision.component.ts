import {
  Component,
  Input,
  OnInit,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'cvc-gene-sources-revision',
  templateUrl: './gene-sources-revision.component.html',
  styleUrls: ['./gene-sources-revision.component.less']
})
export class GeneSourcesRevisionComponent implements OnChanges {
  @Input() revision!: any;
  removedSources!: DiffSource[];
  addedSources!: DiffSource[];
  keptSources!: DiffSource[];
  suggestedSources!: DiffSource[];

  constructor() { }

  ngOnChanges(): void {
    if(this.revision) {
      const diff = this.revision.linkoutData.diffValue;
      this.removedSources = parseSources(diff.removedObjects);
      this.addedSources = parseSources(diff.addedObjects);
      this.keptSources = parseSources(diff.keptObjects);
      // collect all diffValue source object
      const all = diff.keptObjects.concat(diff.removedObjects, diff.addedObjects);
      // pluck & parse source objects with ids included in suggestedValue
      this.suggestedSources = parseSources(
        all.filter((s: any) => {
          return this.revision.suggestedValue.includes(s.id);
        }));
    }
  }

}

export function parseSources(sources: any[]): any {
  if(sources.length == 0) { return sources; }
  return sources.map((source) => {
    const citationRx = /^(.*) \(ID: (.*)\)/;
    const rxexec = citationRx.exec(source.displayName);
    return {
      id: source.id,
      citation: rxexec![1],
      citationId: rxexec![2],
      publication: source.displayType
    } as DiffSource;
  });
}

export type DiffSource = {
  id: string
  citation?: string | null
  citationId?: string | null
  publication?: string | null
}
