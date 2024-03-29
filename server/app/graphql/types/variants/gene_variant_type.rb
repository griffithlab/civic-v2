module Types::Variants
  class GeneVariantType < Types::Entities::VariantType

    field :coordinates, Types::Entities::GeneVariantCoordinateType, null: false
    field :allele_registry_id, String, null: true
    field :clinvar_ids, [String], null: false
    field :hgvs_descriptions, [String], null: false
    field :my_variant_info, Types::Entities::MyVariantInfoType, null: true
    field :mane_select_transcript, String, null: true
    field :open_cravat_url, String, null: true

    def coordinates
      Loaders::AssociationLoader.for(Variants::GeneVariant, :variant_coordinate).load(object)
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
  end
end
