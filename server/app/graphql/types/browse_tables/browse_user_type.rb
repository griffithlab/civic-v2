module Types::BrowseTables
  class BrowseUserType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :email, String, null: true
    field :name, String, null: true
    field :url, String, null: true
    field :username, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: true
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: true
    field :orcid, String, null: true
    field :area_of_expertise, Int, null: true
    field :deleted, Boolean, null: true
    field :deleted_at, GraphQL::Types::ISO8601DateTime, null: true
    field :role, Int, null: true
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
  end
end