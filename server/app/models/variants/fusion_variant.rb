module Variants
  class FusionVariant < Variant
    has_one :fusion, through: :feature, source: :feature_instance, source_type: 'Features::Fusion'

    has_one :five_prime_coordinates,
      ->() { where(coordinate_type: 'Five Prime Fusion Coordinate') },
      foreign_key: 'variant_id',
      class_name: 'VariantCoordinate'

    has_one :three_prime_coordinates,
      ->() { where(coordinate_type: 'Three Prime Fusion Coordinate') },
      foreign_key: 'variant_id',
      class_name: 'VariantCoordinate'

    has_one :five_prime_start_exon_coordinates,
      ->() { where(coordinate_type: 'Five Prime Start Exon Coordinate') },
      foreign_key: 'variant_id',
      class_name: 'ExonCoordinate'

    has_one :five_prime_end_exon_coordinates,
      ->() { where(coordinate_type: 'Five Prime End Exon Coordinate') },
      foreign_key: 'variant_id',
      class_name: 'ExonCoordinate'

    has_one :three_prime_start_exon_coordinates,
      ->() { where(coordinate_type: 'Three Prime Start Exon Coordinate') },
      foreign_key: 'variant_id',
      class_name: 'ExonCoordinate'

    has_one :three_prime_end_exon_coordinates,
      ->() { where(coordinate_type: 'Three Prime End Exon Coordinate') },
      foreign_key: 'variant_id',
      class_name: 'ExonCoordinate'

    def self.valid_variant_coordinate_types
      [
       'Five Prime Fusion Coordinate',
       'Three Prime Fusion Coordinate'
      ]
    end

    def self.valid_exon_coordinate_types
      [
        'Five Prime Start Exon Coordinate',
        'Five Prime End Exon Coordinate',
        'Three Prime Start Exon Coordinate',
        'Three Prime End Exon Coordinate'
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
      [
        :vicc_compliant_name
      ]
    end

    def mp_name
      if name == 'Fusion'
        "#{feature.name} Fusion"
      else
        [
          construct_five_prime_name(name_type: :molecular_profile),
          construct_three_prime_name(name_type: :molecular_profile)
        ].join("::")
      end

    end

    def generate_vicc_name
      if name == 'Fusion'
        "#{construct_five_prime_name(name_type: :representative)}::#{construct_three_prime_name(name_type: :representative)}"
      else
        "#{construct_five_prime_name(name_type: :vicc)}::#{construct_three_prime_name(name_type: :vicc)}"
      end
    end

    def generate_name
      if name == 'Fusion'
        name
      else
        [
          construct_five_prime_name(name_type: :civic),
          construct_three_prime_name(name_type: :civic)
        ].join("::")
      end
    end

    private
    def construct_five_prime_name(name_type:)
          construct_partner_name(
            name_type: name_type,
            partner_status: fusion.five_prime_partner_status,
            gene: fusion.five_prime_gene,
            coords: five_prime_coordinates
          )
    end

    def construct_three_prime_name(name_type:)
          construct_partner_name(
            name_type: name_type,
            partner_status: fusion.three_prime_partner_status,
            gene: fusion.three_prime_gene,
            coords: three_prime_coordinates
          )
    end

    def construct_partner_name(name_type:, partner_status:, gene:, coords:)
      if partner_status == 'known'
        case name_type
        when :representative
          "#{gene.name}(entrez:#{gene.entrez_id})"
        when :civic
          "e.#{coords.exon_boundary}#{coords.formatted_offset}#{coords.exon_offset}"
        when :vicc
          "#{coords.representative_transcript}(#{gene.name}):e.#{coords.exon_boundary}#{coords.formatted_offset}#{coords.exon_offset}"
        when :molecular_profile
          "#{gene.name}:e.#{coords.exon_boundary}#{coords.formatted_offset}#{coords.exon_offset}"
        end
      elsif partner_status == 'unknown'
        '?'
      elsif partner_status == 'multiple'
        'v'
      end
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
