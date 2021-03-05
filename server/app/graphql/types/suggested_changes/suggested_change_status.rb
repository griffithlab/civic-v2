module Types::SuggestedChanges
  class SuggestedChangeStatus < Types::BaseEnum
    value "new"
    value "rejected"
    value "accepted"
    value "superseded"
  end
end
