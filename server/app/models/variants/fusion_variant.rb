module Variants
  class FusionVariant < Variant
    belongs_to :fusion, class_name: 'Features::Fusion', optional: true

    has_one :five_prime_coordinates,
      ->() { where(coordinate_type: 'Five Prime Fusion Coordinate') },
      foreign_key: 'variant_id',
      class_name: 'VariantCoordinate'

    has_one :three_prime_coordinates,
      ->() { where(coordinate_type: 'Three Prime Fusion Coordinate') },
      foreign_key: 'variant_id',
      class_name: 'VariantCoordinate'

    def self.valid_coordinate_types
      [
       'Five Prime Fusion Coordinate',
       'Three Prime Fusion Coordinate'
      ]
    end

    #TODO remove after backfill/when columns removed
    enum reference_build: [:GRCh38, :GRCh37, :NCBI36]

    def unique_editable_fields
      [
        :hgvs_description_ids,
        :clinvar_entry_ids,
      ]
    end

    def required_fields
      []
    end

    def correct_coordinate_type
      if variant_coordinates.size > 2
        errors.add(:variant_coordinates, "Fusion Variants can only have two sets of coordinates specified")
      end

      variant_coordinates.each do |coord|
        if !self.class.valid_coordinate_types.include?(coord.coordinate_type)
          errors.add(:variant_coordinates, "Incorrect coordinate type #{coord.coordinate_type} for a Fusion Variant")
        end
      end

      #Can have Three Prime or Five Prime or both, but not duplicates
      if variant_coordinates.map(&:coordinate_type).uniq.size != variant_coordinates.size
        errors.add(:variant_coordinates, 'Fusion Variants may not have duplicate coordinate types')
      end

      if fusion.five_prime_gene.nil? && five_prime_coordinates.present?
        errors.add(:variant_coordinates, 'Cannot specify five prime coordinates if the feature lacks a five prime gene')
      end

      if fusion.three_prime_gene.nil? && three_prime_coordinates.present?
        errors.add(:variant_coordinates, 'Cannot specify three prime coordinates if the feature lacks a three prime gene')
      end
    end
  end
end
