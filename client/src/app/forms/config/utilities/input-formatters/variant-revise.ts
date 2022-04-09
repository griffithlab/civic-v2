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
): ClinvarInput {
  let na, nf;
  if (ids && ids.includes('N/A')) {
    ids = undefined;
    nf = undefined;
    na = true;
  } else if (!ids) {
    ids = undefined;
    na = undefined;
    nf = true;
  } 

  return <ClinvarInput>{
    ids: ids ? ids.map(id => +id) : undefined,
    noneFound: nf,
    notApplicable: na
  };
}

export function toCoordinateInput(coord: Coordinate): CoordinateInput {
  return <CoordinateInput>{
    chromosome: undefinedIfEmpty(coord.chromosome),
    representativeTranscript: undefinedIfEmpty(coord.representativeTranscript),
    start: coord.start ? +coord.start: undefined,
    stop: coord.stop ? +coord.stop: undefined,
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

export function undefinedIfEmpty(inVal: Maybe<string>) : Maybe<string> {
  let outVal: Maybe<string>
  if(inVal && inVal.length > 0) {
    outVal = inVal
  } else {
    outVal = undefined
  }
  return outVal;
}

export const Chromosomes = [
  {value: undefined, label: ''},
  {value: '1',  label:  '1'},
  {value: '2',  label:  '2'},
  {value: '3',  label:  '3'},
  {value: '4',  label:  '4'},
  {value: '5',  label:  '5'},
  {value: '6',  label:  '6'},
  {value: '7',  label:  '7'},
  {value: '8',  label:  '8'},
  {value: '9',  label:  '9'},
  {value: '10',  label:  '10'},
  {value: '11',  label:  '11'},
  {value: '12',  label:  '12'},
  {value: '13',  label:  '13'},
  {value: '14',  label:  '14'},
  {value: '15',  label:  '15'},
  {value: '16',  label:  '16'},
  {value: '17',  label:  '17'},
  {value: '18',  label:  '18'},
  {value: '19',  label:  '19'},
  {value: '20',  label:  '20'},
  {value: '21',  label:  '21'},
  {value: '22',  label:  '22'},
  {value: 'X', label:  'X'},
  {value: 'Y',  label:  'Y'},
  {value: 'MT',  label:  'MT'}
];