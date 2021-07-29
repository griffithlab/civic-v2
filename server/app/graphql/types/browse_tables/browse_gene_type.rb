module Types::BrowseTables
  class BrowseGeneType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :entrez_id, Int, null: false
    field :name, String, null: false
    field :description, String, null: false
    field :aliases, [Types::Entities::GeneAliasType], null: true
    field :diseases, [Types::Entities::DiseaseType], null: true
    field :drugs, [Types::Entities::DrugType], null: true
    field :variant_count, Int, null: false
    field :evidence_item_count, Int, null: false
    field :assertion_count, Int, null: false

    def aliases
      object.alias_names
        .compact
        .map { |d| { name: d } }
    end

    def diseases
      Array(object.diseases)
        .sort_by { |d| -d['total'] }
        .map { |d| { name: d['name'], id: d['id'] } }
    end

    def drugs
      Array(object.drugs)
        .sort_by { |d| -d['total'] }
        .map { |d| { name: d['name'], id: d['id'] } }
    end
  end
end
