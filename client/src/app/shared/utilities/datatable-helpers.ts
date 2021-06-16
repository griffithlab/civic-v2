import { Maybe, SortDirection } from '@app/generated/civic.apollo';

export interface SortDirectionEvent {
  key: any;
  value: null | string;
}

export interface WithName {
  name: string;
}

//using `any` here because the zorro table erases the type you pass into it
export interface SortParams {
  column: any;
  direction: SortDirection;
}

export function buildSortParams(e: SortDirectionEvent): Maybe<SortParams> {
  var direction: SortDirection;

  switch (e.value) {
    case 'ascend': {
      direction = SortDirection.Asc;
      break;
    }
    case 'descend': {
      direction = SortDirection.Desc;
      break;
    }
    default: {
      return undefined;
    }
  }

  return {
    column: e.key,
    direction: direction,
  };
}
