module Variants
  class RegionVariant < Variant
    has_one :region, through: :feature, source: :feature_instance, source_type: "Features::Region"

    validate :number_of_cytogenetic_regions
    validate :region_variant_subtype

    VALID_SINGLE_REGION_VARIANT_NAMES = [
      "Deletion",
      "Addition",
      "Homozygous Deletion",
      "Duplication",
      "Triplication",
      "Amplification",
      "Trisomy",
      "Monosomy",
      "Nullisomy",
      "Tetrasomy",
      "Disomy",
      "Ring",
      "Derivative",
    ]

    VALID_MULTIPLE_REGION_VARIANT_NAMES = [
      "Inversion",
      "Translocation",
      "Deletion",
      "Insertion",
      "Ring",
      "Derivative",
    ]

    def unique_editable_fields
      []
    end

    def required_fields
      [
        :iscn_name,
      ]
    end

    def forbidden_fields
      [
        :vicc_compliant_name,
        :hgvs_description_ids,
        :clinvar_entry_ids,
        :ncit_id,
      ]
    end

    # TODO
    def generate_iscn_name
      variant_adapter.generate_iscn_name
    end

    def correct_coordinate_type
      if variant_coordinates.size > 0
        errors.add(:variant_coordinates, "Region Variants may not have coordinates")
      end
    end

    def region_variant_subtype
      variant_adapter.validate
    end

    def number_of_cytogenetic_regions
      if VALID_SINGLE_REGION_VARIANT_NAMES.include?(name) && VALID_MULTIPLE_REGION_VARIANT_NAMES.include?(name)
        # no op
      elsif VALID_SINGLE_REGION_VARIANT_NAMES.include?(name)
        if region.region_members.size > 1
          errors.add(:name, "#{name} Variants can only have a single cytogenetic region specified.")
        end
      elsif VALID_MULTIPLE_REGION_VARIANT_NAMES.include?(name)
        if region.region_members.size == 1
          errors.add(:name, "#{name} Variants must specify more than one cytogenetic region")
        end
      else
        errors.add(:name, "Invalid Region Variant Name: #{name}")
      end
    end

    private
    def variant_adapter
      if VALID_SINGLE_REGION_VARIANT_NAMES.include?(name) || VALID_MULTIPLE_REGION_VARIANT_NAMES.include?(name)
        @adapter ||= "Variants::Regions::#{name.gsub(" ", "").classify}Variant".constantize.new(self)
      else
        raise StandardError.new("Invalid Region Variant Name: #{name}")
      end
    end
  end
end
