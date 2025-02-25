class EvidenceItemTsvFormatter
  def self.objects
    EvidenceItem.eager_load(:disease, :source, :therapies, :phenotypes, :molecular_profile)
      .where(status: "accepted")
  end


  def self.headers
    [
      "molecular_profile",
      "molecular_profile_id",
      "disease",
      "doid",
      "phenotypes",
      "therapies",
      "therapy_interaction_type",
      "evidence_type",
      "evidence_direction",
      "evidence_level",
      "significance",
      "evidence_statement",
      "citation_id",
      "source_type",
      "asco_abstract_id",
      "citation",
      "nct_ids",
      "rating",
      "evidence_status",
      "evidence_id",
      "variant_origin",
      "last_review_date",
      "evidence_civic_url",
      "molecular_profile_civic_url",
      "is_flagged"
    ]
  end

  def self.row_from_object(ei)
    [
      ei.molecular_profile.display_name,
      ei.molecular_profile.id,
      ei.disease.nil? ? "" : ei.disease.name,
      ei.disease.nil? ? "" : ei.disease.doid,
      ei.phenotypes.map(&:hpo_class).join(","),
      ei.therapies.map(&:name).join(","),
      ei.therapy_interaction_type,
      ei.evidence_type,
      ei.evidence_direction,
      ei.evidence_level,
      ei.significance,
      ei.description.gsub("\n", " "),
      ei.source.citation_id,
      ei.source.source_type,
      ei.source.asco_abstract_id,
      ei.source.citation,
      ei.source.clinical_trials.map(&:nct_id).join(","),
      ei.rating,
      ei.status,
      ei.id,
      ei.variant_origin,
      ei.updated_at,
      LinkAdaptors::EvidenceItem.new(ei).permalink_path(include_domain: true),
      LinkAdaptors::MolecularProfile.new(ei.molecular_profile).permalink_path(include_domain: true),
      ei.flagged
    ]
  end

  def self.file_name
    "ClinicalEvidenceSummaries.tsv"
  end
end
