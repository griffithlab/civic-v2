import {
  ClinvarInput,
  Coordinate,
  CoordinateInput,
  Maybe,
  NullableReferenceBuildTypeInput,
  ReferenceBuild,
} from '@app/generated/civic.apollo';

export function toClinvarInput(
  ids?: string[],
  noneFound?: boolean,
  notApplicable?: boolean
): ClinvarInput {
  return <ClinvarInput>{
    ids: ids,
    noneFound: noneFound,
    notApplicable: notApplicable,
  };
}

export function toCoordinateInput(coord: Coordinate): CoordinateInput {
  return <CoordinateInput>{
    chromosome: coord.chromosome,
    representativeTranscript: coord.representativeTranscript,
    start: coord.start,
    stop: coord.stop,
  };
}

export function toNullableReferenceBuildInput(
  build: Maybe<ReferenceBuild>
): NullableReferenceBuildTypeInput {
  let nRefBuild: NullableReferenceBuildTypeInput = { value: undefined, unset: undefined};
  if(build) { nRefBuild.value = build }
  else { nRefBuild.unset = true }
  return nRefBuild;
}
