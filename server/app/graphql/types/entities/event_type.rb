module Types::Entities
  class EventType < Types::BaseObject
    field :id, Int, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :originating_user, Types::Entities::UserType, null: false
    field :organization, Types::Entities::OrganizationType, null: false

    def originating_user
      Loaders::RecordLoader.for(User).load(object.originating_user_id)
    end

    def organization
      Loaders::RecordLoader.for(Organization).load(object.organization_id)
    end
  end
end
