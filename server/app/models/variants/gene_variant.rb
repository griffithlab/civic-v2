module Variants
  class GeneVariant < Variant
    belongs_to :gene, class_name: 'Features::Gene', optional: true

    #not used in V2, delete when Fusions added?
    #belongs_to :secondary_gene, class_name: 'Features::Gene', optional: true

    enum reference_build: [:GRCh38, :GRCh37, :NCBI36]

    validates :reference_bases, format: {
      with: /\A[ACTG]+\z|\A[ACTG]+\/[ACTG]+\z/,
      message: "only allows A,C,T,G or /"
    }, allow_nil: true

    validates :variant_bases, format: {
      with: /\A[ACTG]+\z|\A[ACTG]+\/[ACTG]+\z/,
      message: "only allows A,C,T,G or /"
    }, allow_nil: true

    def editable_fields
      [
        :feature_id,
        :name,
        :variant_alias_ids,
        :hgvs_description_ids,
        :clinvar_entry_ids,
        :variant_type_ids,
        :reference_build,
        :ensembl_version,
        :chromosome,
        :start,
        :stop,
        :reference_bases,
        :variant_bases,
        :representative_transcript,
        :chromosome2,
        :start2,
        :stop2,
        :representative_transcript2,
      ]
    end

    def required_fields
      []
    end

    def compatible_features
      [
        Features::Gene
      ]
    end
  end
end
