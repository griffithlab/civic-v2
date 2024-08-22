require_relative '../linkable_tag.rb'

module Types::BrowseTables

  class BrowseDiseaseType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :display_name, String, null: false
    field :name, String, null: false
    field :doid, String, null: true
    field :disease_url, String, null: true
    field :features, [Types::LinkableFeature], null: false
    field :variant_count, Int, null: false
    field :evidence_item_count, Int, null: false
    field :assertion_count, Int, null: false
    field :feature_count, Int, null: false
    field :link, String, null: false
    field :deprecated, Boolean, null: false
    field :disease_aliases, [String], null: true

    def features
      Array(object.features)
        .sort_by { |f| f['name'] }
        .map { |f| { name: f['name'], id: f['id'], link: "/features/#{f['id']}" } }
    end

    def disease_aliases
      object.alias_names.compact
    end

    def link
      Rails.application.routes.url_helpers.url_for("/diseases/#{object.id}")
    end
  end
end

