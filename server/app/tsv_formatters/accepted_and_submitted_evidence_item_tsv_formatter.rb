class AcceptedAndSubmittedEvidenceItemTsvFormatter < EvidenceItemTsvFormatter
  def self.objects
    EvidenceItem.eager_load(:disease, :source, :therapies, :phenotypes, :molecular_profile)
      .where(status: ["accepted", "submitted"])
  end

  def self.file_name
    "AcceptedAndSubmittedClinicalEvidenceSummaries.tsv"
  end
end
