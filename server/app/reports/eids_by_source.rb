class EidsBySource < Report
  attr_reader :source

  def self.name
    "EIDs by Source"
  end

  def self.description
    "Generate a list of Evidence Items (EIDs) for a given source, showing submitter, acceptor, dates, flags, comments, and revision status."
  end

  def self.inputs
    {
      source_type: ["PubMed", "ASCO", "ASH"],
      source_id: :text,
    }
  end

  def setup(source_type:, source_id:)
    @source = Source.find_by(source_type: source_type, citation_id: source_id)
    
    unless @source
      errors << "Source not found with type '#{source_type}' and ID '#{source_id}'"
    end
  end

  def headers
    [
      "EID",
      "Link",
      "Source Type",
      "Source ID",
      "Molecular Profile",
      "Disease",
      "Evidence Type",
      "Status",
      "Submitter",
      "Submitted Date",
      "Acceptor",
      "Accepted Date",
      "Flags",
      "Comments",
      "Pending Revisions",
    ]
  end

  def execute
    return if errors.any?

    source.evidence_items.eager_load(
      :molecular_profile,
      :disease,
      :acceptance_event,
      :submission_event,
      :flags,
      :comments,
      :open_revisions
    ).each do |eid|
      data << [
        "EID#{eid.id}",
        "https://civicdb.org#{eid.link}",
        source.source_type,
        source.citation_id,
        eid.molecular_profile&.display_name || "N/A",
        eid.disease&.name || "N/A",
        eid.evidence_type || "N/A",
        eid.status || "N/A",
        eid.submitter&.username || "N/A",
        eid.submission_event&.created_at&.strftime("%Y-%m-%d") || "N/A",
        eid.acceptor&.username || "N/A",
        eid.acceptance_event&.created_at&.strftime("%Y-%m-%d") || "N/A",
        eid.flags.count,
        eid.comments.count,
        eid.open_revisions.any? ? "Yes" : "No",
      ]
    end
  end
end
