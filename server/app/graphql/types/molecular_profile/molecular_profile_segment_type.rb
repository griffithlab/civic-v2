module Types::MolecularProfile
  class MolecularProfileTextSegment < Types::BaseObject
    field :text, String, null: false

    def text
      object
    end
  end

  class MolecularProfileSegmentType < Types::BaseUnion
    description "A segment of a molecular profile. Either a string representing a boolean operator or a tag component representing a gene or variant"
    possible_types Types::MolecularProfile::MolecularProfileTextSegment,
      Types::Entities::FeatureType,
      Types::Entities::VariantType



    def self.resolve_type(object, context)
      if object.is_a?(String)
        Types::MolecularProfile::MolecularProfileTextSegment
      elsif object.is_a?(Feature)
        ::Types::Entities::FeatureType
      elsif object.is_a?(Variant)
        Types::Entities::VariantType
      else
        raise "Unexpected molecular profile segment type: #{object.class}"
      end
    end
  end
end
