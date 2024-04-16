class VariantTsvFormatter
  def self.objects
    Variant.joins(molecular_profiles: [:evidence_items])
      .includes(:variant_groups, :variant_types, :hgvs_descriptions, :variant_aliases, :feature)
      .where("evidence_items.status = 'accepted'")
      .where(features: { feature_instance_type: 'Features::Gene'})
      .distinct
  end

  def self.headers
    [
      'variant_id',
      'variant_civic_url',
      'gene',
      'entrez_id',
      'variant',
      'variant_groups',
      'chromosome',
      'start',
      'stop',
      'reference_bases',
      'variant_bases',
      'representative_transcript',
      'ensembl_version',
      'reference_build',
      'chromosome2',
      'start2',
      'stop2',
      'representative_transcript2',
      'variant_types',
      'hgvs_descriptions',
      'last_review_date',
      'allele_registry_id',
      'clinvar_ids',
      'variant_aliases',
      'is_flagged',
      'single_variant_molecular_profile_id'
    ]
  end

  def self.row_from_object(variant)
    [
      variant.id,
      LinkAdaptors::Variant.new(variant).permalink_path(include_domain: true),
      variant.feature.name,
      variant.feature.feature_instance.entrez_id,
      variant.name,
      variant.variant_groups.map(&:name).join(','),
      variant.chromosome,
      variant.start,
      variant.stop,
      variant.reference_bases,
      variant.variant_bases,
      variant.representative_transcript,
      variant.ensembl_version,
      variant.reference_build,
      variant.chromosome2,
      variant.start2,
      variant.stop2,
      variant.representative_transcript2,
      variant.variant_types.map(&:name).join(','),
      variant.hgvs_descriptions.map(&:description).join(','),
      variant.updated_at,
      variant.allele_registry_id,
      variant.clinvar_entries.map(&:clinvar_id).join(','),
      variant.variant_aliases.map(&:name).join(','),
      variant.flagged,
      variant.single_variant_molecular_profile_id
    ]
  end

  def self.file_name
    'VariantSummaries.tsv'
  end
end

