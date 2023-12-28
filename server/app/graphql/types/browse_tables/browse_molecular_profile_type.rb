require_relative '../linkable_tag.rb'

module Types::BrowseTables
  class BrowseMolecularProfileType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :name, String, null: false
    field :diseases, [Types::LinkableDisease], null: false
    field :therapies, [Types::LinkableTherapy], null: false
    field :features, [Types::LinkableFeature], null: false
    field :variants,[Types::LinkableVariant], null: false
    field :link, String, null: false
    field :evidence_item_count, Int, null: false
    field :assertion_count, Int, null: false
    field :variant_count, Int, null: false
    field :aliases, [Types::Entities::MolecularProfileAliasType], null: false
    field :molecular_profile_score, Float, null: false

    def molecular_profile_score
      object.evidence_score
    end

    def name
      Loaders::MolecularProfileSegmentsLoader.for(MolecularProfile).load(object.id).then do |segments|
        segments.map { |s| s.respond_to?(:name) ? s.name : s }.join(' ')
      end
    end

    def link
      Rails.application.routes.url_helpers.url_for("/molecular-profiles/#{object.id}")
    end

    def features
      Array(object.features)
        .sort_by { |f| f['name'] }
        .map { |f| { name: f['name'], id: f['id'], link: "/features/#{f['id']}"} }
    end

    def variants
      Array(object.variants)
        .sort_by { |v| v['name'] }
        .map { |v| { name: v['name'], id: v['id'], link: "/variants/#{v['id']}"} }
    end

    def diseases
      Array(object.diseases)
        .sort_by { |d| -d['total']}
        .map { |d| { name: d['name'], id: d['id'], link: "/disease/#{d['id']}"} }
    end

    def therapies
      Array(object.therapies)
        .sort_by { |d| -d['total']}
        .map { |d| { name: d['name'], id: d['id'], link: "/therapies/#{d['id']}"} }
    end

    def aliases
      object.alias_names
        .compact
        .map { |d| { name: d } }
    end
  end
end
