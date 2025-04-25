module Types
  class SourceLinkType < Types::BaseObject
    field :id, Int, null: false
    field :reason, Types::SourceLinkReasonType, null: false
    field :note, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :source, Types::Entities::SourceType, null: false
    field :linked_source, Types::Entities::SourceType, null: false
  end
end
