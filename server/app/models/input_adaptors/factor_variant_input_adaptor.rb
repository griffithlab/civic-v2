#Conversion from a GraphQL FactorVariantFields input object to FactorVariant model type
class InputAdaptors::FactorVariantInputAdaptor
  attr_reader :input

  def initialize(variant_input_object: )
    @input = variant_input_object
  end

  def perform
    Variants::FactorVariant.new(
      feature_id: input.feature_id,
      name: input.name,
      variant_type_ids: input.variant_type_ids,
      variant_alias_ids: get_alias_ids(),
      ncit_id: input.ncit_id
    )
  end

  private
  def get_alias_ids
    input.aliases.map do |a|
      VariantAlias.get_or_create_by_name(a).id
    end
  end
end
