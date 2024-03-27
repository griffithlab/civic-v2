Variants::GeneVariant.find_each do |variant|
  next if variant.start2.present?
  next if variant.variant_types.where(name: 'transcript_fusion').exists?
  next unless variant.start.present?

  coord = VariantCoordinate.create!(
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
  )
end
