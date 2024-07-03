module Types::Variants
  class FusionVariantType < Types::Entities::VariantType

    field :five_prime_coordinates, Types::Entities::FivePrimeFusionVariantCoordinateType, null: true
    field :three_prime_coordinates, Types::Entities::ThreePrimeFusionVariantCoordinateType, null: true
    field :clinvar_ids, [String], null: false
    field :hgvs_descriptions, [String], null: false

    def five_prime_coordinates
      Loaders::AssociationLoader.for(Variants::FusionVariant, :five_prime_coordinates).load(object)
    end

    def three_prime_coordinates
      Loaders::AssociationLoader.for(Variants::FusionVariant, :three_prime_coordinates).load(object)
    end

    def clinvar_ids
      Loaders::AssociationLoader.for(Variant, :clinvar_entries).load(object).then do |clinvar_entries|
        clinvar_entries.map(&:clinvar_id)
      end
    end

    def hgvs_descriptions
      Loaders::AssociationLoader.for(Variant, :hgvs_descriptions).load(object).then do |hgvs|
        hgvs.map(&:description)
      end
    end
  end
end
