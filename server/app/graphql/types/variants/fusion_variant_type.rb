module Types::Variants
  class FusionVariantType < Types::Entities::VariantType

    field :five_prime_coordinates, Types::Entities::VariantCoordinateType, null: true
    field :three_prime_coordinates, Types::Entities::VariantCoordinateType, null: true
    field :five_prime_start_exon_coordinates, Types::Entities::ExonCoordinateType, null: true
    field :five_prime_end_exon_coordinates, Types::Entities::ExonCoordinateType, null: true
    field :three_prime_start_exon_coordinates, Types::Entities::ExonCoordinateType, null: true
    field :three_prime_end_exon_coordinates, Types::Entities::ExonCoordinateType, null: true
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

    def open_revision_count
      Loaders::AssociationCountLoader.for(object.class, association: :open_revisions).load(object.id).then do |count|
        Loaders::AssociationLoader.for(Variants::FusionVariant, :exon_coordinates).load(object).then do |exon_coordinates|
          exon_counts = Promise.all(
            exon_coordinates.map do |ec|
              Loaders::AssociationCountLoader.for(ExonCoordinate, association: :open_revisions).load(ec.id)
            end)

          exon_counts.then { |ec_counts| ec_counts.sum + count }
        end
      end
    end
  end
end
