module Types::Entities
  class FactorType < Types::Entities::FeatureType

    field :ncit_id, String, null: true
    field :ncit_details, Types::Entities::NcitDetailsType, null: true
    field :variants, resolver: Resolvers::FactorVariants

    def ncit_details
      NcitDetails.new(object).response
    end
  end
end
