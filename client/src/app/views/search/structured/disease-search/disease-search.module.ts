import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DiseaseSearchPage } from './disease-search.page'
import { CvcDiseaseSearchFormModule } from '@app/forms/config/disease-search/disease-search.form.module'

@NgModule({
  declarations: [DiseaseSearchPage],
  imports: [CommonModule, CvcDiseaseSearchFormModule],
  exports: [DiseaseSearchPage],
})
export class DiseaseSearchModule {}
