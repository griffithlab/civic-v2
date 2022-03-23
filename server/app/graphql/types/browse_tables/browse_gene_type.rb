module Types::BrowseTables
  class BrowseGeneType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :entrez_id, Int, null: false
    field :name, String, null: false
    field :link, String, null: false
    field :description, String, null: false
    field :gene_aliases, [String], null: true
    field :diseases, [Types::Entities::DiseaseType], null: true
    field :drugs, [Types::Entities::DrugType], null: true
    field :variant_count, Int, null: false
    field :evidence_item_count, Int, null: false
    field :assertion_count, Int, null: false

    def link
      Rails.application.routes.url_helpers.url_for("/genes/#{object.id}")
    end

    def gene_aliases
      object.alias_names.compact
    end

    def diseases
      Array(object.diseases)
        .sort_by { |d| -d['total'] }
        .map { |d| { name: d['name'], id: d['id'], link: "/diseases/#{d['id']}" } }
    end

    def drugs
      Array(object.drugs)
        .sort_by { |d| -d['total'] }
        .map { |d| { name: d['name'], id: d['id'], link: "/drugs/#{d['id']}"  } }
    end
  end
end
