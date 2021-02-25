module Types::Entities
  class UserType < Types::BaseObject
    field :id, Int, null: false
    field :email, String, null: true
    field :name, String, null: false
    field :url, String, null: true
    field :username, String, null: false
    field :role, String, null: false #this needs to be an enum
    field :bio, String, null: true
    field :country, String, null: true #this needs to be an enum
    field :organizations, [Types::Entities::OrganizationType], null: true

    def organizations
      Loaders::RecordLoader.for(Organization).load_many(object.organization_ids)
    end
  end
end
