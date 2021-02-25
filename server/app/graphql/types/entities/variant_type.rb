module Types::Entities
  class VariantType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :description, String, null: false
    field :gene, [Types::Entities::GeneType], null: false
    field :evidence_items, [Types::Entities::EvidenceItemType], null: true
  end
end
