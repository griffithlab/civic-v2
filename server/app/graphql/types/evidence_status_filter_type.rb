module Types
  class EvidenceStatusFilterType < Types::BaseEnum
    value 'ACCEPTED', value: 'accepted'
    value 'SUBMITTED', value: 'submitted'
    value 'REJECTED', value: 'rejected'
    value 'ALL'
  end
end
