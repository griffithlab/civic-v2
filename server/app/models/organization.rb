class Organization < ActiveRecord::Base
  has_many :events
  has_many :affiliations
  has_many :clinvar_api_keys
  has_many :users, through: :affiliations
  has_many :users_with_endorsement_privileges,
    ->() { where("affiliations.can_endorse = 't'") },
    through: :affiliations,
    source: :user

  has_many :groups, class_name: "Organization", foreign_key: "parent_id"
  belongs_to :parent, class_name: "Organization", optional: true

  has_one_attached :profile_image
  validates :profile_image, content_type: [ "image/png", "image/jpg", "image/jpeg" ],
    size: { less_than: 5.megabytes, message: "Image must be smaller than 15MB" }

  has_one :most_recent_event,
    ->() { order("created_at DESC").limit(1) },
    class_name: "Event", foreign_key: :organization_id

  has_many :endorsements
  validate :no_endorsing_users

  # TODO: org membership helper methods
  # TODO: only allow one level of nesting

  def org_and_suborgs_stats_hash
    r_ids = Event.where(organization_id: org_and_suborg_ids, action: "revision suggested").pluck(:originating_object_id).compact.uniq
    e_ids = Event.where(organization_id: org_and_suborg_ids, action: "submitted").pluck(:subject_id).uniq
    a_ids = Event.where(organization_id: org_and_suborg_ids, action: "assertion submitted").pluck(:subject_id).uniq
    {
      'comments': Event.where(organization_id: org_and_suborg_ids).where(action: "commented").count,
      'revisions': r_ids.count,
      'applied_revisions': Revision.where(id: r_ids, status: "accepted").count,
      'submitted_evidence_items': e_ids.count,
      'accepted_evidence_items': EvidenceItem.where(id: e_ids, status: "accepted").count,
      'suggested_sources': Event.where(organization_id: org_and_suborg_ids).where(action: "publication suggested").count,
      'submitted_assertions': a_ids.count,
      'accepted_assertions': Assertion.where(id: a_ids, status: "accepted").count,
    }
  end

  def org_stats_hash
    r_ids = Event.where(organization_id: self.id, action: "revision suggested").pluck(:originating_object_id).compact.uniq
    e_ids = Event.where(organization_id: self.id, action: "submitted").pluck(:subject_id).uniq
    a_ids = Event.where(organization_id: self.id, action: "assertion submitted").pluck(:subject_id).uniq
    {
      'comments': Event.where(organization_id: self.id).where(action: "commented").count,
      'revisions': r_ids.count,
      'applied_revisions': Revision.where(id: r_ids, status: "accepted").count,
      'submitted_evidence_items': e_ids.count,
      'accepted_evidence_items': EvidenceItem.where(id: e_ids, status: "accepted").count,
      'suggested_sources': Event.where(organization_id: self.id).where(action: "publication suggested").count,
      'submitted_assertions': a_ids.count,
      'accepted_assertions': Assertion.where(id: a_ids, status: "accepted").count,
    }
  end

  def org_and_suborg_ids
    return [ self.id ] + self.group_ids
  end

  def no_endorsing_users
    if !self.can_endorse? && self.users_with_endorsement_privileges.exists?
      self.errors.add(:can_endorse, "cannot unset can_endorse while users still have endorsement permissions.")
    end
  end
end
