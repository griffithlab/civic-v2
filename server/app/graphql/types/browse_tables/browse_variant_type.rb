module Types::BrowseTables
  class BrowseVariantType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :name, String, null: false
    field :gene_id, Int, null: false
    field :gene_name, String, null: false
    field :diseases, [Types::Entities::DiseaseType], null: false
    field :drugs, [Types::Entities::DrugType], null: false
    field :evidence_item_count, Int, null: false
    field :assertion_count, Int, null: false
    field :evidence_score, Float, null: false

    def diseases
      Array(object.diseases)
        .sort_by { |d| -d['total']}
        .map { |d| { name: d['name'], id: d['id'] } }
    end

    def drugs
      Array(object.drugs)
        .sort_by { |d| -d['total']}
        .map { |d| { name: d['name'], id: d['id'] } }
    end
  end
end
