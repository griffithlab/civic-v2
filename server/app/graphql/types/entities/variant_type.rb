module Types::Entities
  class VariantType < Types::BaseObject
    connection_type_class Types::Connections::VariantsConnection

    implements Types::Interfaces::Commentable
    implements Types::Interfaces::Flaggable
    implements Types::Interfaces::WithRevisions
    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::EventOriginObject

    field :id, Int, null: false
    field :name, String, null: false
    field :description, String, null: true
    field :gene, Types::Entities::GeneType, null: false
    field :evidence_items, Types::Entities::EvidenceItemType.connection_type, null: false
    field :sources, [Types::Entities::SourceType], null: false
    field :reference_build, Types::ReferenceBuildType, null: true
    field :ensembl_version, Int, null: true
    field :primary_coordinates, Types::Entities::CoordinateType, null: true
    field :secondary_coordinates, Types::Entities::CoordinateType, null: true
    field :reference_bases, String, null: false
    field :variant_bases, String, null: false
    field :allele_registry_id, String, null: true
    field :evidence_score, Float, null: false
    field :variant_aliases, [String], null: false
    field :variant_types, [Types::Entities::VariantTypeType], null: false
    field :clinvar_ids, [String], null: false
    field :hgvs_descriptions, [String], null: false
    field :my_variant_info, Types::Entities::MyVariantInfoType, null: true
    field :link, String, null: false

    def gene
      Loaders::RecordLoader.for(Gene).load(object.gene_id)
    end

    def evidence_items
      Loaders::AssociationLoader.for(Variant, :evidence_items).load(object)
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

    def evidence_score
      object.civic_actionability_score
    end

    def variant_aliases
      object.variant_aliases.map{|a| a.name}
    end

    def clinvar_ids
      object.clinvar_entries.map{|e| e.clinvar_id}
    end

    def hgvs_descriptions
      object.hgvs_expressions.map{|e| e.expression}
    end

    def my_variant_info
      MyVariantInfo.new(object).response
    end
  end
end
