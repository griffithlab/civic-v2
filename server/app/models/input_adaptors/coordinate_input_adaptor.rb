# Conversion from a GraphQL Coordinate input object to VariantCoordinate model type
class InputAdaptors::CoordinateInputAdaptor
  attr_reader :input

  def initialize(coordinate_input_object:)
    @input = coordinate_input_object
  end

  def perform
    VariantCoordinate.new(
      reference_build: input.reference_build,
      ensembl_version: input.ensembl_version,
      representative_transcript: input.representative_transcript,
      chromosome: input.chromosome,
      start: input.start,
      stop: input.stop,
      reference_bases: input.reference_bases,
      variant_bases: input.variant_bases,
    )
  end
end
