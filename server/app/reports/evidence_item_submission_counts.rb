class EvidenceItemSubmissionCounts < Report
  MONTH_NAMES = Date::MONTHNAMES.compact
  YEAR_EXPRESSION = "EXTRACT(YEAR FROM activities.created_at)::integer"
  MONTH_EXPRESSION = "EXTRACT(MONTH FROM activities.created_at)::integer"

  attr_reader :illumina_organization, :vhl_feature

  def self.name
    "Evidence Item Submission Counts"
  end

  def self.description
    "Count evidence item submissions by year and month, excluding submissions credited to Illumina and evidence items currently associated with the VHL gene feature."
  end

  def setup
    @illumina_organization = find_exact_record!(
      Organization.where(name: "Illumina"),
      "Organization named 'Illumina'"
    )
    @vhl_feature = find_exact_record!(
      Feature.where(name: "VHL", feature_instance_type: "Features::Gene"),
      "VHL gene Feature"
    )
  end

  def headers
    [ "Year", *MONTH_NAMES, "Annual Total" ]
  end

  def execute
    monthly_counts = eligible_submission_activities
      .group(Arel.sql(YEAR_EXPRESSION), Arel.sql(MONTH_EXPRESSION))
      .count

    return if monthly_counts.empty?

    first_year, last_year = monthly_counts.keys.map(&:first).minmax
    (first_year..last_year).each do |year|
      counts = (1..12).map { |month| monthly_counts.fetch([ year, month ], 0) }
      data << [ year, *counts, counts.sum ]
    end
  end

  private
  def eligible_submission_activities
    vhl_evidence_item_ids = EvidenceItem
      .joins(molecular_profile: { variants: :feature })
      .where(features: { id: vhl_feature.id })
      .select(:id)
      .distinct

    SubmitEvidenceItemActivity
      .where(subject_type: "EvidenceItem")
      .where("activities.organization_id IS DISTINCT FROM ?", illumina_organization.id)
      .where.not(subject_id: vhl_evidence_item_ids)
  end

  def find_exact_record!(scope, description)
    match_count = scope.count
    if match_count != 1
      raise ArgumentError, "Expected exactly one #{description}, but found #{match_count}."
    end

    scope.first
  end
end
