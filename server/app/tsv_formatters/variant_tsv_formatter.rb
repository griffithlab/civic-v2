class VariantTsvFormatter
  def self.objects
    Variant.joins(molecular_profiles: [:evidence_items])
      .includes(:variant_groups, :variant_types, :hgvs_descriptions, :variant_aliases, :feature)
      .where("evidence_items.status = 'accepted'")
      .distinct
  end

  def self.headers
    shared_headers = [
      'variant_id',
      'variant_civic_url',
      'feature_type',
      'feature_id',
      'feature_name',
      'feature_civic_url',
      'variant',
      'variant_aliases',
      'is_flagged',
      'variant_groups',
      'variant_types',
      'single_variant_molecular_profile_id',
      'last_review_date',
    ]

    shared_headers + gene_headers + factor_headers + fusion_headers
  end

  def self.gene_headers
    [
      'gene',
      'entrez_id',
      'chromosome',
      'start',
      'stop',
      'reference_bases',
      'variant_bases',
      'representative_transcript',
      'ensembl_version',
      'reference_build',
      'hgvs_descriptions',
      'allele_registry_id',
      'clinvar_ids',
    ]
  end

  def self.factor_headers 
    [
      'ncit_id'
    ]
  end

  def self.fusion_headers
    [
      '5_prime_partner_status',
      '5_prime_partner',
      '3_prime_partner_status',
      '3_prime_partner',
      'vicc_compliant_name',
      '5_prime_transcript',
      '5_prime_end_exon',
      '5_prime_exon_offset',
      '5_prime_exon_offset_direction',
      '3_prime_transcript',
      '3_prime_start_exon',
      '3_prime_exon_offset',
      '3_prime_exon_offset_direction',
    ]
  end

  def self.create_gene_row(variant)
    row = [
      variant.feature.name,
      variant.feature.feature_instance.entrez_id,
      variant.chromosome,
      variant.start,
      variant.stop,
      variant.reference_bases,
      variant.variant_bases,
      variant.representative_transcript,
      variant.ensembl_version,
      variant.reference_build,
      variant.hgvs_descriptions.map(&:description).join(','),
      variant.allele_registry_id,
      variant.clinvar_entries.map(&:clinvar_id).join(','),
    ]
    row += Array.new(factor_headers.size)
    row += Array.new(fusion_headers.size)
    return row
  end

  def self.create_factor_row(variant)
    row = Array.new(gene_headers.size)
    row += [
      variant.ncit_id
    ]
    row += Array.new(fusion_headers.size)
    return row
  end

  def self.create_fusion_row(variant)
    fusion_feature = variant.feature.feature_instance
    five_prime_coords = variant.five_prime_end_exon_coordinates
    three_prime_coords = variant.three_prime_start_exon_coordinates

    row = Array.new(gene_headers.size)
    row += Array.new(factor_headers.size)
    row += [
      fusion_feature.five_prime_partner_status,
      fusion_feature.five_prime_gene&.name,
      fusion_feature.three_prime_partner_status,
      fusion_feature.three_prime_gene&.name,
      variant.vicc_compliant_name,
      five_prime_coords&.representative_transcript,
      five_prime_coords&.exon,
      five_prime_coords&.exon_offset,
      five_prime_coords&.exon_offset_direction,
      three_prime_coords&.representative_transcript,
      three_prime_coords&.exon,
      three_prime_coords&.exon_offset,
      three_prime_coords&.exon_offset_direction,
    ]
    return row
  end

  def self.row_from_object(variant)
    shared_cols = [
      variant.id,
      LinkAdaptors::Variant.new(variant).permalink_path(include_domain: true),
      variant.feature.feature_instance_type.demodulize,
      variant.feature.id,
      variant.feature.name,
      LinkAdaptors::Feature.new(variant.feature).permalink_path(include_domain: true),
      variant.name,
      variant.variant_aliases.map(&:name).join(','),
      variant.flagged,
      variant.variant_groups.map(&:name).join(','),
      variant.variant_types.map(&:name).join(','),
      variant.single_variant_molecular_profile_id,
      variant.updated_at,
    ]

    variant_cols = case variant
    when Variants::GeneVariant
      create_gene_row(variant)
    when Variants::FactorVariant
      create_factor_row(variant)
    when Variants::FusionVariant
      create_fusion_row(variant)
    else
      raise StandardError.new("Unknown variant type for TSV export: #{variant.class}")
    end

    shared_cols + variant_cols
  end

  def self.file_name
    'VariantSummaries.tsv'
  end
end

