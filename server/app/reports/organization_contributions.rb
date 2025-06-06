class OrganizationContributions < Report
  attr_reader :start_date, :end_date, :all_org_ids

  def self.name
    "Organization Contributions"
  end

  def self.description
    "Count contributions from an organization over a specified timespan."
  end

  def self.inputs
    {
      organization_id: Organization.order(:name).all.to_a,
      start_date: :date,
      end_date: :date,
      include_suborgs: :boolean,
    }
  end

  def setup(start_date:, end_date:, include_suborgs:, organization_id:)
    @start_date = Date.parse(start_date)
    @end_date = Date.parse(end_date)

    org = Organization.find(organization_id)
    if include_suborgs
      sub_groups = org.groups
      @all_org_ids = [ org.id ] + sub_groups.map(&:id)
    else
      @all_org_ids = org.id
    end
  end

  def headers
    [ "Contribution Type", "Count" ]
  end

  def execute
    data << [ "Assertions Submitted", SubmitAssertionActivity.where(organization_id: all_org_ids, created_at: (start_date..end_date)).count ]
    data << [ "Evidence Submitted", SubmitEvidenceItemActivity.where(organization_id: all_org_ids, created_at: (start_date..end_date)).count ]
    data << [ "Comments Made", CommentActivity.where(organization_id: all_org_ids, created_at: (start_date..end_date)).count ]
    data << [ "Revisions Suggested", Event.where(organization_id: all_org_ids, action: "revision suggested", created_at: (start_date..end_date)).count ]
    data << [ "Accepted Revisions Proposed by Organization", calculate_contribution("revision suggested", "revision suggested") ]
    data << [ "Accepted Evidence Submitted by Organization", calculate_contribution("accepted", "submitted") ]
    data << [ "Accepted Assertions Submitted by Organization", calculate_contribution("assertion accepted", "assertion submitted") ]
  end

  private
  def calculate_contribution(submission_event_name, accept_event_name)
    contributed_by_org = 0
    Event.where(action: accept_event_name, created_at: (start_date..end_date)).find_each do |e|
      if Event.where(action: submission_event_name, organization_id: all_org_ids, subject: e.subject).exists?
        contributed_by_org += 1
      end
    end
    contributed_by_org
  end
end
