# Conversion from a GraphQL RegionFields input object to Region model type
class InputAdaptors::RegionInputAdaptor
  attr_reader :input

  def initialize(region_input_object:)
    @input = region_input_object
  end

  def perform
    r = Features::Region.new()
    Feature.new(
      description: input.description,
      source_ids: input.source_ids,
      feature_alias_ids: get_alias_ids,
      feature_instance: r
    )
  end

  private
  def get_alias_ids
    input.aliases.map do |a|
      FeatureAlias.get_or_create_by_name(a).id
    end
  end
end
