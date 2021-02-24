module Types
  class GeneType < BaseObject
    field :id, Int, null: false
    field :entrez_id, Int, null: false
    field :name, String, null: false
    field :description, String, null: false
    field :official_name, String, null: false
    field :gene_aliases, [Types::GeneAliasType], null: true
    field :diseases, [Types::DiseaseType], null: true
    field :drugs, [Types::DrugType], null: true
    field :variant_count, Int, null: false
    field :evidence_item_count, Int, null: false
    field :assertion_count, Int, null: false
  end
end
