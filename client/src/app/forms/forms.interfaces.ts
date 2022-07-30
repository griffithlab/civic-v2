import { EvidenceStatus, SourceSource } from "@app/generated/civic.apollo";

export interface FormSource {
  id?: number;
  sourceType?: SourceSource;
  citationId?: number;
  citation?: string;
}

export interface FormDisease {
  id?: number;
  doid?: number;
  displayName?: string;
}

export interface FormDrug {
  id: number;
  ncitId?: string;
  name?: string;
}

export interface FormPhenotype {
  id: number;
  hpoId?: string;
  name?: string;
}

export interface FormGene {
  id: number;
  name?: string;
}

export interface FormMolecularProfile {
  id: number;
  name?: string;
}

export interface FormVariant {
  id?: number;
  name: string;
  singleVariantMolecularProfile: FormMolecularProfile,
}

export interface FormEvidence {
  id: number,
  name: string,
  status: EvidenceStatus
}
