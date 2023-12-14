module Types::Entities
  class VariantType < Types::BaseObject
    connection_type_class Types::Connections::VariantsConnection

    implements Types::Interfaces::Commentable
    implements Types::Interfaces::Flaggable
    implements Types::Interfaces::WithRevisions
    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::EventOriginObject
    implements Types::Interfaces::MolecularProfileComponent

    field :id, Int, null: false
    field :name, String, null: false
    field :gene, "Types::Entities::GeneType", null: false
    field :feature, Types::Entities::FeatureType, null: false
    field :reference_build, Types::ReferenceBuildType, null: true
    field :ensembl_version, Int, null: true
    field :primary_coordinates, Types::Entities::CoordinateType, null: true
    field :secondary_coordinates, Types::Entities::CoordinateType, null: true
    field :reference_bases, String, null: true
    field :variant_bases, String, null: true
    field :allele_registry_id, String, null: true
    field :variant_aliases, [String], null: false
    field :variant_types, [Types::Entities::VariantTypeType], null: false
    field :clinvar_ids, [String], null: false
    field :hgvs_descriptions, [String], null: false
    field :my_variant_info, Types::Entities::MyVariantInfoType, null: true
    field :mane_select_transcript, String, null: true
    field :link, String, null: false
    field :single_variant_molecular_profile, Types::Entities::MolecularProfileType, null: false
    field :single_variant_molecular_profile_id, Int, null: false
    field :deprecation_activity, Types::Activities::DeprecateVariantActivityType, null: true
    field :deprecated, Boolean, null: false
    field :deprecation_reason, Types::VariantDeprecationReasonType, null: true
    field :creation_activity, Types::Activities::CreateVariantActivityType, null: true #TODO: should try to make this non-nullable if complete backfill is possible
    field :molecular_profiles, Types::Entities::MolecularProfileType.connection_type, null: false
    field :open_cravat_url, String, null: true

    def gene
      Loaders::RecordLoader.for(Features::Gene).load(object.gene_id)
    end

    def feature
      Loaders::AssociationLoader.for(Variant, :feature).load(object)
    end

    def variant_types
      Loaders::AssociationLoader.for(Variant, :variant_types).load(object)
    end

    def molecular_profiles
      Loaders::AssociationLoader.for(Variant, :molecular_profiles).load(object)
    end

    def single_variant_molecular_profile
      Loaders::AssociationLoader.for(Variant, :single_variant_molecular_profile).load(object)
    end

    def deprecation_activity
      Loaders::AssociationLoader.for(Variant, :deprecation_activity).load(object)
    end

    def creation_activity
      Loaders::AssociationLoader.for(Variant, :creation_activity).load(object)
    end

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

    def variant_aliases
      Loaders::AssociationLoader.for(Variant, :variant_aliases).load(object).then do |va|
        va.map(&:name)
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
