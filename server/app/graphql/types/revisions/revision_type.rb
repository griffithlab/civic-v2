module Types::Revisions
  class RevisionType < Types::BaseObject
    field :id, Int, null: false
    field :status, Types::Revisions::RevisionStatus, null: false
    field :current_value, GraphQL::Types::JSON, null: false
    field :suggested_value, GraphQL::Types::JSON, null: false
    field :field_name, String, null: false
    field :comments, [Types::Entities::CommentType], null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :revisionset_id, String, null: false
    field :linkout_data, Types::Revisions::LinkoutData, null: false

    def comments
      Loaders::AssociationLoader.for(Revision, :comments).load(object)
    end

    def linkout_data
      Types::Revisions::LinkoutData.from_revision(object)
    end
  end
end
