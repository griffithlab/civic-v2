module Types::Entities
  class VariantType < Types::BaseObject
    connection_type_class Types::Connections::VariantsConnection

    implements Types::Interfaces::Commentable
    implements Types::Interfaces::Flaggable
    implements Types::Interfaces::WithRevisions
    implements Types::Interfaces::EventSubject

    field :id, Int, null: false
    field :name, String, null: false
    field :description, String, null: false
    field :gene, Types::Entities::GeneType, null: false
    field :evidence_items, Types::Entities::EvidenceItemType.connection_type, null: false
    field :sources, [Types::Entities::SourceType], null: false
    field :reference_build, Types::ReferenceBuildType, null: true
    field :ensembl_version, Int, null: true
    field :five_prime_coordinates, Types::Entities::CoordinateType, null: true
    field :three_prime_coordinates, Types::Entities::CoordinateType, null: true
    field :allele_registry_id, String, null: true
    field :evidence_score, Float, null: false
    field :variant_aliases, [String], null: true
    field :variant_types, [Types::Entities::VariantTypeType], null: true
    field :clinvar_entries, [String], null: true
    field :hgvs_expressions, [String], null: true

    def gene
      Loaders::RecordLoader.for(Gene).load(object.gene_id)
    end

    def evidence_items
      Loaders::AssociationLoader.for(Variant, :evidence_items).load(object)
    end

    def five_prime_coordinates
      {
        representative_transcript: object.representative_transcript,
        chromosome: object.chromosome,
        start: object.start,
        stop: object.stop,
        reference_bases: object.reference_bases,
        variant_bases: object.variant_bases
      }
    end

    def three_prime_coordinates
      {
        representative_transcript: object.representative_transcript2,
        chromosome: object.chromosome2,
        start: object.start2,
        stop: object.stop2,
        reference_bases: nil,
        variant_bases: nil,
      }
    end

    def evidence_score
      object.civic_actionability_score
    end

    def variant_aliases
      object.variant_aliases.map{|a| a.name}
    end

    def clinvar_entries
      object.clinvar_entries.map{|e| e.clinvar_id}
    end

    def hgvs_expressions
      object.hgvs_expressions.map{|e| e.expression}
    end
  end
end
