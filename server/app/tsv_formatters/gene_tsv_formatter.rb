class GeneTsvFormatter
  def self.objects
    Feature.joins(variants: { molecular_profiles: [:evidence_items]})
      .where(feature_instance_type: 'Features::Gene')
      .includes(:feature_instance)
      .distinct
  end

  def self.headers
    [
      'gene_id',
      'gene_civic_url',
      'name',
      'entrez_id',
      'description',
      'last_review_date',
      'is_flagged'
    ]
  end

  def self.row_from_object(feature)
    [
      feature.feature_instance.id,
      LinkAdaptors::Gene.new(feature.feature_instance).permalink_path(include_domain: true),
      feature.name,
      feature.feature_instance.entrez_id,
      feature.description.squish,
      feature.updated_at,
      feature.flagged
    ]
  end

  def self.file_name
    'GeneSummaries.tsv'
  end
end

