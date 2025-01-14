class FeatureTsvFormatter
  def self.objects
    Feature.joins(variants: { molecular_profiles: [:evidence_items]})
      .includes(:feature_instance)
      .distinct
  end

  def self.headers
    shared_headers = [
      'feature_id',
      'feature_civic_url',
      'feature_type',
      'name',
      'feature_aliases',
      'description',
      'last_review_date',
      'is_flagged'
    ]
    shared_headers + gene_headers + factor_headers + fusion_headers
  end

  def self.gene_headers
    ['entrez_id']
  end

  def self.factor_headers
    ['ncit_id']
  end

  def self.fusion_headers
    [
      'five_prime_partner_status',
      'three_prime_partner_status',
      'five_prime_gene_id',
      'five_prime_gene_name',
      'five_prime_gene_entrez_id',
      'three_prime_gene_id',
      'three_prime_gene_name',
      'three_prime_gene_entrez_id',
    ]
  end

  def self.create_gene_row(feature)
    row = [
      feature.feature_instance.entrez_id
    ]
    row += Array.new(factor_headers.size)
    row += Array.new(fusion_headers.size)
    return row
  end

  def self.create_factor_row(feature)
    row = Array.new(gene_headers.size)
    row += [
      feature.feature_instance.ncit_id
    ]
    row += Array.new(fusion_headers.size)
  end

  def self.create_fusion_row(feature)
    feature_instance = feature.feature_instance
    row = Array.new(gene_headers.size)
    row += Array.new(factor_headers.size)
    row += [
      feature_instance.five_prime_partner_status,
      feature_instance.three_prime_partner_status,
      feature_instance.five_prime_gene_id,
      feature_instance.five_prime_gene&.name,
      feature_instance.five_prime_gene&.entrez_id,
      feature_instance.three_prime_gene_id,
      feature_instance.three_prime_gene&.name,
      feature_instance.three_prime_gene&.entrez_id,
    ]
  end

  def self.row_from_object(feature)
    shared_cols = [
      feature.id,
      LinkAdaptors::Feature.new(feature).permalink_path(include_domain: true),
      feature.feature_instance_type.demodulize,
      feature.name,
      feature.feature_aliases.map(&:name).join(","),
      feature.description&.squish,
      feature.updated_at,
      feature.flagged
    ]

    feature_cols = case feature.feature_instance
                   when Features::Gene
                     create_gene_row(feature)
                   when Features::Factor
                     create_factor_row(feature)
                   when Features::Fusion
                     create_fusion_row(feature)
                   else
                     raise StandardError.new("Unknown feature type for TSV export: #{feature.feature_instance_type}")
                   end
    shared_cols + feature_cols
  end

  def self.file_name
    'FeatureSummaries.tsv'
  end

  def self.file_aliases
    [
      'GeneSummaries.tsv'
    ]
  end
end

