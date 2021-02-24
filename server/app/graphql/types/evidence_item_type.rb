module Types
  class EvidenceItemType < BaseObject
    field :id, Int, null: false
    field :description, String, null: false
    field :variant, [Type::VariantType], null: false
  end
end
