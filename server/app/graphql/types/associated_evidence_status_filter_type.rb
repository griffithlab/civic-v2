module Types
  class AssociatedEvidenceStatusFilterType < Types::BaseEnum
    value 'WITH_ACCEPTED',
      description: 'Apply filter to an entity to display only those which have at least one accepted associated evidence item.'
    value 'WITH_ACCEPTED_OR_SUBMITTED',
      description: 'Apply filter to an entity to display only those which have at least one accepted or submitted associated evidence item.'
    value 'WITH_SUBMITTED',
      description: 'Apply filter to an entity to display only those which have at least one submitted associated evidence item.'
    value 'ALL',
      description: 'Apply no status filter to an entity in order to display all entities regardless of attached evidence status.'
  end
end
