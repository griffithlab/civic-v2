module Types
  class SourceLinkType < Types::BaseObject
    implements Types::Interfaces::EventOriginObject

    field :id, Int, null: false
    field :reason, Types::SourceLinkReasonType, null: false
    field :note, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :link, String, null: false

    field :source, Types::Entities::SourceType, null: false
    field :linked_source, Types::Entities::SourceType, null: false

    def link
      "/sources/#{object.source_id}"
    end
  end
end
