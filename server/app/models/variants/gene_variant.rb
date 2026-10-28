module Variants
  class GeneVariant < Variant
    validate :name_does_not_use_fusion_syntax

    has_one :gene, through: :feature,
      source: :feature_instance, source_type: "Features::Gene"

    has_one :coordinates,
      ->() { where(coordinate_type: "Gene Variant Coordinate") },
      foreign_key: "variant_id",
      class_name: "VariantCoordinate"

    def self.valid_variant_coordinate_types
      [
       "Gene Variant Coordinate",
      ]
    end

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
        if coord.coordinate_type != "Gene Variant Coordinate"
          errors.add(:variant_coordinates, "Incorrect coordinate type #{coord.coordinate_type} for a Gene Variant")
        end
      end
    end

    def name_does_not_use_fusion_syntax
      return if name.blank?

      if name.include?("::") || name.match?(/fusion/i)
        errors.add(:name, "cannot contain fusion syntax or the word Fusion; use a Fusion Variant instead")
      end
    end
  end
end
