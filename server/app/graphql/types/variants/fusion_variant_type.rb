module Types::Variants
  class FusionVariantType < Types::Entities::VariantType

    field :five_prime_coordinates, Types::Entities::VariantCoordinateType, null: false
    field :three_prime_coordinates, Types::Entities::VariantCoordinateType, null: false
    field :five_prime_start_exon_coordinates, Types::Entities::ExonCoordinateType, null: false
    field :five_prime_end_exon_coordinates, Types::Entities::ExonCoordinateType, null: false
    field :three_prime_start_exon_coordinates, Types::Entities::ExonCoordinateType, null: false
    field :three_prime_end_exon_coordinates, Types::Entities::ExonCoordinateType, null: false
    field :clinvar_ids, [String], null: false
    field :hgvs_descriptions, [String], null: false
    field :vicc_compliant_name, String, null: false
    field :fusion, "Types::Entities::FusionType", null: false

    def five_prime_coordinates
      Loaders::AssociationLoader.for(Variants::FusionVariant, :five_prime_coordinates).load(object)
    end

    def three_prime_coordinates
      Loaders::AssociationLoader.for(Variants::FusionVariant, :three_prime_coordinates).load(object)
    end

    def five_prime_start_exon_coordinates
      Loaders::AssociationLoader.for(Variants::FusionVariant, :five_prime_start_exon_coordinates).load(object)
    end

    def five_prime_end_exon_coordinates
      Loaders::AssociationLoader.for(Variants::FusionVariant, :five_prime_end_exon_coordinates).load(object)
    end

    def three_prime_start_exon_coordinates
      Loaders::AssociationLoader.for(Variants::FusionVariant, :three_prime_start_exon_coordinates).load(object)
    end

    def three_prime_end_exon_coordinates
      Loaders::AssociationLoader.for(Variants::FusionVariant, :three_prime_end_exon_coordinates).load(object)
    end

    def fusion
      Loaders::AssociationLoader.for(Variants::FusionVariant, :fusion).load(object)
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
