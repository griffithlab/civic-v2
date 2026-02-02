class AcceptedEvidenceItemTsvFormatter < EvidenceItemTsvFormatter
  def self.objects
    EvidenceItem.eager_load(:disease, :source, :therapies, :phenotypes, :molecular_profile)
      .where(status: "accepted")
  end

  def self.file_name
    "AcceptedClinicalEvidenceSummaries.tsv"
  end
end
