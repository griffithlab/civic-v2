import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyGeneInfoService {

  constructor() { }

  parse(geneInfo: any): any {
    if(geneInfo.interpro) {
      geneInfo.interproList = geneInfo.interpro.map((p: any) => p.desc);
    }
    // if(geneInfo.pathway) {
    //   geneInfo.pathwayList = geneInfo.pathway.map((p: any) => p.name);
    // }
    return geneInfo;
  }
}
