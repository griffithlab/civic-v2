module Types::BrowseTables
  class BrowseFeatureType < Types::BaseObject
    implements Types::Interfaces::Flaggable
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :name, String, null: false
    field :link, String, null: false
    field :description, String, null: false
    field :feature_aliases, [String], null: true
    field :diseases, [Types::Entities::DiseaseType], null: true
    field :therapies, [Types::Entities::TherapyType], null: true
    field :variant_count, Int, null: false
    field :evidence_item_count, Int, null: false
    field :assertion_count, Int, null: false
    field :molecular_profile_count, Int, null: false
    field :feature_instance_type, Types::FeatureInstanceTypes, null: false
    field :feature_instance_id, Int, null: false

    def link
      Rails.application.routes.url_helpers.url_for("/features/#{object.id}")
    end

    def feature_aliases
      object.alias_names.compact
    end

    def diseases
      Array(object.diseases)
        .sort_by { |d| -d['total'] }
        .map { |d| { name: d['name'], id: d['id'], link: "/diseases/#{d['id']}", deprecated: d['deprecated'] } }
    end

    def therapies
      Array(object.therapies)
        .sort_by { |d| -d['total'] }
        .map { |d| { name: d['name'], id: d['id'], link: "/therapies/#{d['id']}", deprecated: d['deprecated'] } }
    end
  end
end
