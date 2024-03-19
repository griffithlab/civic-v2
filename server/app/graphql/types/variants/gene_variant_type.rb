module Types::Variants
  class GeneVariantType < Types::BaseObject
    implements Types::Interfaces::VariantInterface

    field :reference_build, Types::ReferenceBuildType, null: true
    field :ensembl_version, Int, null: true
    field :primary_coordinates, Types::Entities::CoordinateType, null: true
    field :secondary_coordinates, Types::Entities::CoordinateType, null: true
    field :reference_bases, String, null: true
    field :variant_bases, String, null: true
    field :allele_registry_id, String, null: true
    field :clinvar_ids, [String], null: false
    field :hgvs_descriptions, [String], null: false
    field :my_variant_info, Types::Entities::MyVariantInfoType, null: true
    field :mane_select_transcript, String, null: true
    field :open_cravat_url, String, null: true


    def primary_coordinates
      if (object.representative_transcript.blank? && object.chromosome.blank? && object.start.blank? && object.stop.blank?)
        return nil
      else
        return {
          representative_transcript: object.representative_transcript,
          chromosome: object.chromosome,
          start: object.start,
          stop: object.stop,
        }
      end
    end

    def secondary_coordinates
      if (object.representative_transcript2.blank? && object.chromosome2.blank? && object.start2.blank? && object.stop2.blank?)
        return nil
      else
        return {
          representative_transcript: object.representative_transcript2,
          chromosome: object.chromosome2,
          start: object.start2,
          stop: object.stop2,
        }
      end
    end

    def variant_bases
      if (object.variant_bases.blank?)
        return nil
      else
        return object.variant_bases
      end
    end

    def reference_bases
      if (object.reference_bases.blank?)
        return nil
      else
        return object.reference_bases
      end
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
