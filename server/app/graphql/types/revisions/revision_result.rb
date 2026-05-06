module Types::Revisions
  class RevisionResult < Types::BaseObject
    field :id, Int, null: false,
      description: "ID of the Revision."
    field :newly_created, Boolean, null: false,
      description: "Was this Revision newly created as a result of this request?"
    field :field_name, String, null: false,
      description: "Name of the field on the moderated entity that the Revision pertains to."
    field :revision_set_id, Int, null: false,
      description: "An identifier that can be used to group Revisions proposed at the same time."
  end
end
