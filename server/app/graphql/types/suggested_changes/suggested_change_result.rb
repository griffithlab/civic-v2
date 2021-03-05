module Types::SuggestedChanges
  class SuggestedChangeResult < Types::BaseObject
    field :id, Int, null: false
    field :newly_created, Boolean, null: false
    field :field_name, String, null: false
    field :changeset_id, String, null: false
  end
end