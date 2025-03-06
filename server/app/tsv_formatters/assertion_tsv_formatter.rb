class AssertionTsvFormatter
  def self.objects
    Assertion.eager_load(:disease, :therapies, :phenotypes, :molecular_profile, :evidence_items)
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
      "assertion_type",
      "assertion_direction",
      "significance",
      "acmg_codes",
      "amp_category",
      "nccn_guideline",
      "nccn_guideline_version",
      "regulatory_approval",
      "fda_companion_test",
      "assertion_summary",
      "assertion_description",
      "assertion_id",
      "evidence_item_ids",
      "last_review_date",
      "assertion_civic_url",
      "evidence_items_civic_url",
      "molecular_profile_civic_url",
      "is_flagged",
    ]
  end

  def self.row_from_object(a)
    [
      a.molecular_profile.display_name,
      a.molecular_profile.id,
      a.disease.name,
      a.disease.doid,
      a.phenotypes.map(&:hpo_class).join(","),
      a.therapies.map(&:name).join(","),
      a.assertion_type,
      a.assertion_direction,
      a.significance,
      a.acmg_codes.map(&:code).join(","),
      a.amp_level,
      (a.nccn_guideline.nil? ? nil : a.nccn_guideline.name),
      a.nccn_guideline_version,
      a.fda_regulatory_approval,
      a.fda_companion_test,
      a.summary,
      a.description.squish,
      a.id,
      a.evidence_items.map(&:id).join(","),
      a.updated_at,
      LinkAdaptors::Assertion.new(a).permalink_path(include_domain: true),
      a.evidence_items.map { |ei| LinkAdaptors::EvidenceItem.new(ei).permalink_path(include_domain: true) }.join(","),
      LinkAdaptors::MolecularProfile.new(a.molecular_profile).permalink_path(include_domain: true),
      a.flagged,
    ]
  end

  def self.file_name
    "AssertionSummaries.tsv"
  end
end
