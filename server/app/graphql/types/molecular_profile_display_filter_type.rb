module Types
  class MolecularProfileDisplayFilterType < Types::BaseEnum
    value 'WITH_ACCEPTED',
      description: 'Display only molecular profiles which have at least one accepted evidence item.'
    value 'WITH_ACCEPTED_OR_SUBMITTED',
      description: 'Display only molecular profiles which have evidence in either an accepted or submitted state.'
    value 'WITH_SUBMITTED',
      description: 'Display molecular profiles which have at least one submitted evidence item.'
    value 'ALL',
      description: 'Display all molecular profiles regardless of attached evidence status.'
  end
end
