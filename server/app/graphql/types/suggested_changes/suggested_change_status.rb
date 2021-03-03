module Types::SuggestedChanges
  class SuggestedChangeStatus < Types::BaseEnum
    value "new"
    value "rejected"
    #TODO make this "accepted" in the model validation, action, and here
    value "applied"
    value "superseded"
  end
end
