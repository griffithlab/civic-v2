module Types::Entities
  class UserType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :url, String, null: true
    field :username, String, null: false
    field :role, String, null: false #TODO this needs to be an enum
    field :bio, String, null: true
    field :country, String, null: true #this needs to be an enum
    field :organizations, [Types::Entities::OrganizationType], null: true

    field :email, String, null: true do
      def authorized?(object, args, context)
        object.id == context[:current_user]&.id
      end
    end

    def organizations
      Loaders::AssociationLoader.for(User, :organizations).load(object)
    end
  end
end
