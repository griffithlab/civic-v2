module Types::Entities
  class EvidenceItemType < Types::BaseObject
    field :id, Int, null: false
    field :description, String, null: false
    field :variant, Types::Entities::VariantType, null: false
    field :events, Types::Entities::EventType.connection_type, null: false

    def variant
      Loaders::RecordLoader.for(Variant).load(object.variant_id)
    end

    def events
      Loaders::AssociationLoader.for(EvidenceItem, :events).load(object)
    end
  end
end
