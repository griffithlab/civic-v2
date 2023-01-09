class GeneTsvFormatter
  def self.objects
    Gene.joins(variants: { molecular_profiles: [:evidence_items]}).distinct
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

  def self.row_from_object(gene)
    [
      gene.id,
      LinkAdaptors::Gene.new(gene).permalink_path(include_domain: true),
      gene.name,
      gene.entrez_id,
      gene.description.squish,
      gene.updated_at,
      gene.flagged
    ]
  end

  def self.file_name
    'GeneSummaries.tsv'
  end
end

