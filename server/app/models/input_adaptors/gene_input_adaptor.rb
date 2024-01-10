#Conversion from a GraphQL GeneFields input object to Gene model type
class InputAdaptors::GeneInputAdaptor
  attr_reader :input

  def initialize(gene_input_object: )
    @input = gene_input_object
  end

  def perform
    g = Features::Gene.new()
    Feature.new(
      description: input.description,
      source_ids: input.source_ids,
      feature_instance: g
    )
  end
end
