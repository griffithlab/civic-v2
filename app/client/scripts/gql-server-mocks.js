import casual from 'casual';
import RandExp from 'randexp';
import {MockList} from 'graphql-tools';
import {startCase} from 'lodash';


export default {
  Int: () => casual.integer(0),

  Gene: () => ({
    id: casual.integer(1,2000),
    type: "GENE",
    name: "GENE NAME"
  }),
};
