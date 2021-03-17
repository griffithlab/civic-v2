module Types::Entities
  class OrganizationType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :url, String, null: false
    field :description, String, null: false
    field :events, Types::Entities::EventType.connection_type, null: false

    def events
      Loaders::AssociationLoader.for(Organization, :events).load(object)
    end
  end
end
