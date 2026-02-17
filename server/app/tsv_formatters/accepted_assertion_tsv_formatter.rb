class AcceptedAssertionTsvFormatter < AssertionTsvFormatter
  def self.objects
    Assertion.eager_load(:disease, :therapies, :phenotypes, :molecular_profile, :evidence_items)
      .where(status: "accepted")
  end

  def self.file_name
    "AcceptedAssertionSummaries.tsv"
  end

  def self.file_aliases
    [
      "AssertionSummaries.tsv",
    ]
  end
end
