module Types::Events
  class EventActionType < Types::BaseEnum
    value 'COMMENTED', value: 'commented'
    value 'REVISION_SUGGESTED', value: 'revision suggested'
    value 'REVISION_REJECTED', value: 'revision rejected'
    value 'REVISION_ACCEPTED', value: 'revision accepted'
    value 'REVISION_SUPERSEDED', value: 'revision superseded'
    value 'SUBMITTED', value: 'submitted'
    value 'ACCEPTED', value: 'accepted'
    value 'REJECTED', value: 'rejected'
    value 'PUBLICATION_SUGGESTED', value: 'publication suggested'
    value 'FLAG_RESOLVED', value: 'flag resolved'
    value 'FLAGGED', value: 'flagged'
    value 'ASSERTION_SUBMITTED', value: 'assertion submitted'
    value 'ASSERTION_ACCEPTED', value: 'assertion accepted'
    value 'ASSERTION_REJECTED', value: 'assertion rejected'
    value 'REVERTED', value: 'reverted'
  end
end

