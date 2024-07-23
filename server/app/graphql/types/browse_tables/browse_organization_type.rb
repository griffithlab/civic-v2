module Types::BrowseTables
  class BrowseOrganizationType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :name, String, null: false
    field :url, String, null: false
    field :description, String, null: false
    field :parent_id, Int, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: true
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: true
    field :most_recent_activity_timestamp, GraphQL::Types::ISO8601DateTime, null: true
    field :activity_count, Int, null: false
    field :member_count, Int, null: false
    field :child_organizations, [Types::Entities::OrganizationType], null: false

    def child_organizations
      Array(object.child_organizations)
        .sort_by { |f| f['child_name'] }
        .map { |f| { id: f['child_id'], name: f['child_name']} }
    end
  end
end