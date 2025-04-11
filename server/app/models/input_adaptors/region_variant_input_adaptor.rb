# Conversion from a GraphQL RegionVariantFields input object to RegionVariant model type
class InputAdaptors::RegionVariantInputAdaptor
  attr_reader :input

  def initialize(variant_input_object:)
    @input = variant_input_object
  end

  def perform
    Variants::RegionVariant.new(
      variant_type_ids: input.variant_type_ids,
      variant_alias_ids: get_alias_ids(),
    )
  end

  private
  def get_alias_ids
    input.aliases.map do |a|
      VariantAlias.get_or_create_by_name(a).id
    end
  end
end
