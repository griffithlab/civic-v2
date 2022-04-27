class EvidenceItemTsvFormatter
  def self.objects
    EvidenceItem.eager_load(:disease, :source, :drugs, :phenotypes, variant: [:gene])
      .where(status: 'accepted')
  end


  def self.headers
    [
      'gene',
      'entrez_id',
      'variant',
      'disease',
      'doid',
      'phenotypes',
      'drugs',
      'drug_interaction_type',
      'evidence_type',
      'evidence_direction',
      'evidence_level',
      'clinical_significance',
      'evidence_statement',
      'citation_id',
      'source_type',
      'asco_abstract_id',
      'citation',
      'nct_ids',
      'rating',
      'evidence_status',
      'evidence_id',
      'variant_id',
      'gene_id',
      'chromosome',
      'start',
      'stop',
      'reference_bases',
      'variant_bases',
      'representative_transcript',
      'chromosome2',
      'start2',
      'stop2',
      'representative_transcript2',
      'ensembl_version',
      'reference_build',
      'variant_summary',
      'variant_origin',
      'last_review_date',
      'evidence_civic_url',
      'variant_civic_url',
      'gene_civic_url',
      'is_flagged'
    ]
  end

  def self.row_from_object(ei)
    [
      ei.variant.gene.name,
      ei.variant.gene.entrez_id,
      ei.variant.name,
      ei.disease.nil? ? "" : ei.disease.name,
      ei.disease.nil? ? "" : ei.disease.doid,
      ei.phenotypes.map(&:hpo_class).join(','),
      ei.drugs.map(&:name).join(','),
      ei.drug_interaction_type,
      ei.evidence_type,
      ei.evidence_direction,
      ei.evidence_level,
      ei.clinical_significance,
      ei.description.gsub("\n", ' '),
      ei.source.citation_id,
      ei.source.source_type,
      ei.source.asco_abstract_id,
      ei.source.description,
      ei.source.clinical_trials.map(&:nct_id).join(','),
      ei.rating,
      ei.status,
      ei.id,
      ei.variant.id,
      ei.variant.gene.id,
      ei.variant.chromosome,
      ei.variant.start,
      ei.variant.stop,
      ei.variant.reference_bases,
      ei.variant.variant_bases,
      ei.variant.representative_transcript,
      ei.variant.chromosome2,
      ei.variant.start2,
      ei.variant.stop2,
      ei.variant.representative_transcript2,
      ei.variant.ensembl_version,
      ei.variant.reference_build,
      ei.variant.description&.gsub("\n", ' '),
      ei.variant_origin,
      ei.updated_at,
      LinkAdaptors::EvidenceItem.new(ei).permalink_path(include_domain: true),
      LinkAdaptors::Variant.new(ei.variant).permalink_path(include_domain: true),
      LinkAdaptors::Gene.new(ei.variant.gene).permalink_path(include_domain: true),
      ei.flagged
    ]
  end

  def self.file_name
    'ClinicalEvidenceSummaries.tsv'
  end
end

