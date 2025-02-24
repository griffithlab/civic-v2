module Variants
  class GeneVariant < Variant
    #TODO remove?
    belongs_to :gene, class_name: 'Features::Gene', optional: true

    has_one :coordinates,
      ->() { where(coordinate_type: 'Gene Variant Coordinate') },
      foreign_key: 'variant_id',
      class_name: 'VariantCoordinate'

    def self.valid_variant_coordinate_types
      [
       'Gene Variant Coordinate'
      ]
    end

    #TODO not used in V2, delete when Fusions added?
    #belongs_to :secondary_gene, class_name: 'Features::Gene', optional: true

    #TODO remove after backfill/when columns removed
    enum :reference_build, [:GRCh38, :GRCh37, :NCBI36]

    def unique_editable_fields
      [
        :feature_id,
        :name,
        :hgvs_description_ids,
        :clinvar_entry_ids,
      ]
    end

    def required_fields
      []
    end

    def forbidden_fields
      [
        :ncit_id,
        :vicc_compliant_name,
      ]
    end

    def correct_coordinate_type
      if variant_coordinates.size > 1
        errors.add(:variant_coordinates, "Gene Variants can only have one coordinate object specified")
      end

      if coord = variant_coordinates.first
        if coord.coordinate_type != 'Gene Variant Coordinate'
          errors.add(:variant_coordinates, "Incorrect coordinate type #{coord.coordinate_type} for a Gene Variant")
        end
      end
    end
  end
end
