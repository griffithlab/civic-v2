module Types
  class VariantDisplayFilterType < Types::BaseEnum
    value 'WITH_ACCEPTED',
      description: 'Display only variants which have at least one accepted evidence item.'
    value 'WITH_ACCEPTED_OR_SUBMITTED',
      description: 'Display only variants which have evidence in either an accepted or submitted state.'
    value 'WITH_SUBMITTED',
      description: 'Display variants which have at least one submited evidence item.'
    value 'ALL',
      description: 'Display all variants regardless of attached evience.'
  end
end
