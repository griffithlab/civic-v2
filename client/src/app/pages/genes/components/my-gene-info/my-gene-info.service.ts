import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class MyGeneInfoService {

  constructor(private logger: NGXLogger) {
  }

  parse(geneInfo: any): any {
    const srcMap: { [key: string]: string | null; } = {
      kegg: 'http://www.genome.jp/kegg-bin/show_pathway?',
      reactome: 'http://www.reactome.org/cgi-bin/control_panel_st_id?ST_ID=',
      pharmgkb: 'https://www.pharmgkb.org/pathway/',
      humancyc: 'http://humancyc.org/HUMAN/NEW-IMAGE?type=PATHWAY&object=',
      smpdb: 'http://www.smpdb.ca/view/',
      pid: 'http://pid.nci.nih.gov/search/pathway_landing.shtml?what=graphic&jpg=on&pathway_id=',
      wikipathways: 'http://wikipathways.org/index.php/Pathway:',
      netpath: null,
      biocarta: null,
      inoh: null,
      signalink: null,
      ehmn: null
    };
    const pathways = geneInfo.pathway || [];
    const pathwaysFinal: PathwayRow[] = [];
    let link;
    Object.keys(pathways).forEach(function(src) {
      if (!Array.isArray(pathways[src])) {
        pathways[src] = [pathways[src]];
      }
      pathways[src].forEach(function(p: Pathway, i: number) {
        link = srcMap[src] + pathways[src][i].id;
        if (srcMap[src] === null) {
          link = null;
        }
        pathwaysFinal.push({
          name: pathways[src][i].name,
          link: link,
          src: src
        });
      });
    });
    geneInfo.pathway = pathwaysFinal;
    geneInfo.pathwayList = pathwaysFinal.map(p => p.name);
    geneInfo.interproList = geneInfo.interpro.map((pd: ProteinDomain) => { return pd.desc; })
    // geneInfo.interproList = geneInfo.interpro.map((i: ProteinDomain) => { i.desc });
    if (!Array.isArray(geneInfo.alias) && geneInfo.alias) {
      geneInfo.alias = [geneInfo.alias];
    }
    if (!Array.isArray(geneInfo.interpro) && geneInfo.interpro) {
      geneInfo.interpro = [geneInfo.interpro];
    }
    return geneInfo;
  }
}

export interface ProteinDomain {
  desc: string,
  id: string,
  short_desc: string
}

export interface PathwayRow {
  name: string
  link: string | null
  src: string | null
}

export interface Pathway {
  name: string
  id: string
}
