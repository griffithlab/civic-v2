module Types::Entities
  class EventType < Types::BaseObject
    field :id, Int, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :originating_user, Types::Entities::UserType, null: false
    field :organization, Types::Entities::OrganizationType, null: false
  end
end
