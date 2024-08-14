module Types::Variants
  class GeneVariantType < Types::Entities::VariantType

    field :coordinates, Types::Entities::VariantCoordinateType, null: true
    field :primary_coordinates, Types::Entities::VariantCoordinateType, null: true,
      deprecation_reason: "The new Fusion variant type means Gene variants no longer have primary and secondary coordinates. Use 'coordinates' instead."
    field :allele_registry_id, String, null: true
    field :clinvar_ids, [String], null: false
    field :hgvs_descriptions, [String], null: false
    field :my_variant_info, Types::Entities::MyVariantInfoType, null: true
    field :mane_select_transcript, String, null: true
    field :open_cravat_url, String, null: true

    def coordinates
      Loaders::AssociationLoader.for(Variants::GeneVariant, :coordinates).load(object)
    end

    def primary_coordinates
      coordinates
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

    def my_variant_info
      MyVariantInfo.new(object).response
    end

    def mane_select_transcript
      ManeSelectTranscript.new(object).mane_select_transcript
    end

    def open_revision_count
      Loaders::AssociationCountLoader.for(object.class, association: :open_revisions).load(object.id).then do |count|
        Loaders::AssociationLoader.for(Variants::GeneVariant, :coordinates).load(object).then do |coord|
          Loaders::AssociationCountLoader.for(VariantCoordinate, association: :open_revisions).load(coord.id) do |coord_count|
            count + coord_count
          end
        end
      end
    end
  end
end
