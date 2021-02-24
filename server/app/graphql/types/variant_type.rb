module Types
  class VariantType < BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :description, String, null: false
    field :gene, [Type::GeneType], null: false
    field :evidence_items, [Type::EvidenceType], null: true
  end
end
