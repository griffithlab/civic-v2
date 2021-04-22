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
  currentSources!: DiffSource[];

  constructor() { }

  ngOnChanges(): void {
    if(this.revision) {
      const diff = this.revision.linkoutData.diffValue;
      this.removedSources = parseSources(diff.removedObjects, 'removed');
      this.addedSources = parseSources(diff.addedObjects, 'added');
      this.keptSources = parseSources(diff.keptObjects, 'kept');
      // collect all diffValue source object
      const all = diff.keptObjects.concat(diff.removedObjects, diff.addedObjects);
      // pluck & parse source objects with ids included in suggestedValue
      this.currentSources = parseSources(
        all.filter((s: any) => {
          return this.revision.currentValue.includes(s.id);
        }), 'current');
      this.suggestedSources = parseSources(
        all.filter((s: any) => {
          return this.revision.suggestedValue.includes(s.id);
        }), 'suggested');
    }
  }

}

export function parseSources(sources: any[], action: string): DiffSource[] {
  if(sources.length == 0) { return sources; }
  return sources.map((source) => {
    const citationRx = /^(.*) \((.*) ID: (.*)\)/;
    const rxExec = citationRx.exec(source.displayName);
    return {
      id: source.id,
      action: action,
      citation: rxExec![1],
      citationId: rxExec![3],
      publication: source.displayType
    } as DiffSource;
  });
}

export type DiffSource = {
  id: string
  action: string
  citation?: string
  citationId?: string
  publication?: string
}
