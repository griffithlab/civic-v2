# run order: 1
# need to turn off VariantCoordinatorValidator validation first

Variants::GeneVariant.find_each do |variant|
  # maybe_fusion = [
  # variant.start2.present?,
  # variant.variant_types.where(name: 'transcript_fusion').exists?
  # ].all?

  coord = VariantCoordinate.where(
    variant: variant,
    reference_build: variant.reference_build,
    coordinate_type: "Gene Variant Coordinate",
    chromosome: variant.chromosome,
    start: variant.start,
    stop: variant.stop,
    reference_bases: variant.reference_bases,
    variant_bases: variant.variant_bases,
    representative_transcript: variant.representative_transcript,
    ensembl_version: variant.ensembl_version
  ).first_or_create
end
