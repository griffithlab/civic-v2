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
      object.disease_names
        .compact
        .map { |d| { name: d } }
    end

    def drugs
      object.drug_names
        .compact
        .map { |d| { name: d } }
    end
  end
end
