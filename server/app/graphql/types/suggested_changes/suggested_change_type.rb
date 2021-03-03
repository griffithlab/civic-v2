module Types::SuggestedChanges
  class SuggestedChangeType < Types::BaseObject
    field :id, Int, null: false
    field :status, Types::SuggestedChanges::SuggestedChangeStatus, null: false
    field :current_value, GraphQL::Types::JSON, null: false
    field :suggested_value, GraphQL::Types::JSON, null: false
    field :field_name, String, null: false
    field :comments, [Types::Entities::CommentType], null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def comments
      Loaders::AssociationLoader.for(V2SuggestedChange, :comments).load(object)
    end
  end
end
