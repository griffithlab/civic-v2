# Conversion from a GraphQL FusionFields input object to Fusion model type
class InputAdaptors::FusionInputAdaptor
  attr_reader :input

  def initialize(fusion_input_object:)
    @input = fusion_input_object
  end

  def perform
    f = Feature.new(
      description: input.description,
      source_ids: input.source_ids,
      feature_alias_ids: get_alias_ids,
    )
    known_partner_gene_instance_ids = Feature.find(input.known_partner_gene_ids)&.map { |f| f.feature_instance_id }
    i = Features::Fusion.new(
      known_partner_gene_ids: known_partner_gene_instance_ids,
      feature: f
    )
    # because there are validations on the fusion feature instance,
    # this ensures that the inverse relationship from feature instance -> feature is made
    f.feature_instance = i
    return i
  end

  private
  def get_alias_ids
    input.aliases.map do |a|
      FeatureAlias.get_or_create_by_name(a).id
    end
  end
end
