module Types::BrowseTables
  class BrowseGeneType < Types::BaseObject
    field :id, Int, null: false
    field :entrez_id, Int, null: false
    field :name, String, null: false
    field :description, String, null: false
    field :gene_aliases, [Types::Entities::GeneAliasType], null: true
    field :diseases, [Types::Entities::DiseaseType], null: true
    field :drugs, [Types::Entities::DrugType], null: true
    field :variant_count, Int, null: false
    field :evidence_item_count, Int, null: false
    field :assertion_count, Int, null: false

    def gene_aliases
      object.alias_names
        .compact
        .map { |d| { name: d } }
    end

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
