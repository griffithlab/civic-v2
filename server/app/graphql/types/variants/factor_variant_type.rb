module Types::Variants
  class FactorVariantType < Types::Entities::VariantType

    field :ncit_id, String, null: true
    field :ncit_details, Types::Entities::NcitDetailsType, null: true

    def ncit_details
      NcitDetails.new(object).response
    end
  end
end
