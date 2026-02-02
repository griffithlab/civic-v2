class AcceptedAndSubmittedAssertionTsvFormatter < AssertionTsvFormatter
  def self.objects
    Assertion.eager_load(:disease, :therapies, :phenotypes, :molecular_profile, :evidence_items)
      .where(status: ["accepted", "submitted"])
  end

  def self.file_name
    "AcceptedAndSubmittedAssertionSummaries.tsv"
  end
end
