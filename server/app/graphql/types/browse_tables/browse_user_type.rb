module Types::BrowseTables
  class BrowseUserType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    @@role_mapping = User.roles.invert
    @@area_mapping = User.area_of_expertises.invert

    field :id, Int, null: false
    field :email, String, null: true
    field :name, String, null: true
    field :url, String, null: true
    field :username, String, null: true
    field :display_name, String, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: true
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: true
    field :orcid, String, null: true
    field :area_of_expertise, String, null: true
    field :deleted, Boolean, null: true
    field :deleted_at, GraphQL::Types::ISO8601DateTime, null: true
    field :role, String, null: false
    field :last_seen_at, GraphQL::Types::ISO8601DateTime, null: true
    field :twitter_handle, String, null: true
    field :facebook_profile, String, null: true
    field :linkedin_profile, String, null: true
    field :accepted_license, Boolean, null: true
    field :bio, String, null: true
    field :signup_complete, Boolean, null: true
    field :country_id, Int, null: true
    field :most_recent_organization_id, Int, null: true
    field :most_recent_activity_timestamp, GraphQL::Types::ISO8601DateTime, null: true
    field :revision_count, Int, null: false
    field :evidence_count, Int, null: false
    field :organizations, [Types::Entities::OrganizationType], null: false

    def area_of_expertise
      @@area_mapping[object.area_of_expertise]
    end

    def role
      @@role_mapping[object.role]
    end

    def organizations
      Loaders::AssociationLoader.for(User, :organizations).load(object)
    end

    profile_image_sizes = [256, 128, 64, 32, 18, 12]
    field :profile_image_path, String, null: true do
      argument :size, Int, required: false, default_value: 56,
        validates: {
          inclusion: {
            in: profile_image_sizes,
            message: "Size must be one of [#{profile_image_sizes.join(',')}]"
          }
        }
    end
  end
end