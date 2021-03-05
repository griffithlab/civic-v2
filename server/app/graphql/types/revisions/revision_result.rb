module Types::Revisions
  class RevisionResult < Types::BaseObject
    field :id, Int, null: false
    field :newly_created, Boolean, null: false
    field :field_name, String, null: false
    field :revisionset_id, String, null: false
  end
end