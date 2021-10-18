#Conversion from a GraphQL GeneFields input object to Gene model type
class InputAdaptors::GeneInputAdaptor
  attr_reader :input

  def initialize(gene_input_object: )
    @input = gene_input_object
  end

  def perform
    Gene.new(
      description: input.description,
      source_ids: input.source_ids
    )
  end
end
