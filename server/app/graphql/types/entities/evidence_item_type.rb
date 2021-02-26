module Types::Entities
  class EvidenceItemType < Types::BaseObject
    field :id, Int, null: false
    field :description, String, null: false
    field :variant, Types::Entities::VariantType, null: false

    def variant
      Loaders::RecordLoader.for(Variant).load(object.variant_id)
    end
  end
end
