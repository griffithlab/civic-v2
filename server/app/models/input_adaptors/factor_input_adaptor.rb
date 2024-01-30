#Conversion from a GraphQL FactorFields input object to Gene model type
class InputAdaptors::FactorInputAdaptor
  attr_reader :input

  def initialize(factor_input_object: )
    @input = factor_input_object
  end

  def perform
    f = Features::Factor.new(
      ncit_id: input.ncit_id
    )

    Feature.new(
      description: input.description,
      source_ids: input.source_ids,
      name: input.name,
      full_name: input.full_name,
      feature_alias_ids: get_alias_ids,
      feature_instance: f
    )
  end

  private
  def get_alias_ids
    input.aliases.map do |a|
      FeatureAliases.get_or_create_by_name(a).id
    end
  end
end
