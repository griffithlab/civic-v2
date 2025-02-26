module Types::Popovers
  class VariantTypePopoverType < Types::Entities::VariantTypeType
    field :variant_count, Int, null: false

    def variant_count
      VariantType.where(id: object.id)
        .joins(:variants)
        .select("variants.id")
        .distinct
        .count
    end
  end
end
