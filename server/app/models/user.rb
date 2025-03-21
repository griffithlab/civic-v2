class User < ActiveRecord::Base
 include WithTimepointCounts
  # include SoftDeletable

  has_many :authorizations

  has_many :comments
  # has_many :subscriptions
  has_many :events,
    ->() { order("events.created_at DESC") },
    foreign_key: :originating_user_id
  has_many :activities,
    ->() { order("activities.created_at DESC") }


  has_one :most_recent_event,
    ->() { order("created_at DESC").limit(1) },
    class_name: "Event", foreign_key: :originating_user_id
  # has_many :domain_expert_tags
  # has_many :badge_awards
  # has_many :badge_claims
  has_many :affiliations
  has_many :organizations, through: :affiliations
  has_many :organizations_with_endorsement_privileges,
    ->() { where("affiliations.can_endorse = 't'") },
    through: :affiliations,
    source: :organization
  has_many :api_keys, as: :bearer
  has_many :notifications, foreign_key: :notified_user_id
  belongs_to :most_recent_organization, class_name: "Organization", optional: true
  belongs_to :country, optional: true
  has_many :conflict_of_interest_statements, dependent: :destroy
  has_one :most_recent_conflict_of_interest_statement,
    ->() { order("created_at DESC").limit(1) },
    class_name: "ConflictOfInterestStatement"

  has_many :comment_mentions, foreign_key: :user_id, class_name: "UserMention"

  enum :area_of_expertise, [ "Patient Advocate", "Clinical Scientist", "Research Scientist" ]
  enum :role, [ "curator", "editor", "admin" ]

  validates :username, format: { without: /\s|@/, message: "cannot contain whitespace or @ symbols" }
  validate :username_is_not_role_name
  validate :require_email_for_editors
  validate :social_media_handles
  after_create :assign_default_username

  has_one_attached :profile_image
  validates :profile_image, content_type: [ "image/png", "image/jpg", "image/jpeg" ],
    size: { less_than: 5.megabytes, message: "Image must be smaller than 15MB" }

  def self.create_from_omniauth(auth_hash, authorization)
    auth_provider_adaptor(auth_hash["provider"]).create_from_omniauth(auth_hash).tap do |user|
      user.authorizations << authorization
      user.role = "curator"
      user.save
    end
  end

  def stats_hash
    # TODO no longer a direct relation from user -> revision
    r_ids = Event.where(originating_user_id: self.id, action: "revision suggested").distinct.select(:originating_object_id)
    e_ids = Event.where(originating_user_id: self.id, action: "submitted").distinct.select(:subject_id)
    a_ids = Event.where(originating_user_id: self.id, action: "assertion submitted").distinct.select(:subject_id)
    {
      'comments': Event.where(originating_user_id: self.id).where(action: "commented").count,
      'revisions': r_ids.count,
      'applied_revisions': Revision.where(id: r_ids, status: "accepted").count,
      'submitted_evidence_items': e_ids.count,
      'accepted_evidence_items': EvidenceItem.where(id: e_ids, status: "accepted").count,
      'suggested_sources': Event.where(originating_user_id: self.id).where(action: "publication suggested").count,
      'submitted_assertions': a_ids.count,
      'accepted_assertions': Assertion.where(id: a_ids, status: "accepted").count,
    }
  end

  def display_name
    if username.present?
      username
    elsif name.present?
      name
    elsif email.present?
      email
    else
      id.to_s
    end
  end

  def submitted_evidence_items
    EvidenceItem.joins(:submission_event).where(events: { originating_user: self })
  end

  def submitted_assertions
    Assertion.joins(:submission_event).where(events: { originating_user: self })
  end

  def make_admin!
    self.role = "admin"
    self.save
  end

  def username_is_not_role_name
    if username.present?
      if (User.roles.keys + User.roles.keys.map(&:pluralize)).include?(username.downcase)
        errors.add(:username, "cannot be the same as a role name")
      end
    end
  end

  def require_email_for_editors
    if self.role == "editor" && self.email.blank?
      errors.add(:email, "cannot be blank for editors")
    end
  end

  def social_media_handles
    [ :twitter_handle, :orcid, :facebook_profile, :linkedin_profile ].each do |platform|
      username = self.send(platform)
      if username.present?
        self.errors.add(platform, "should not contain the URL, only your username") if username.include?("/")
      end
    end
  end

  def self.timepoint_query
    ->(x) {
      self.joins(:events)
        .group("users.id")
        .select("users.id")
        .where("events.created_at >= ?", x)
        .distinct
        .count
    }
  end

  def self.auth_provider_adaptor(provider)
    @providers_hash ||= {
      "github"        => UserAdaptors::GitHub,
      "orcid"         => UserAdaptors::Orcid,
      "google_oauth2" => UserAdaptors::Google,
      "developer"     => UserAdaptors::Developer,
    }
    @providers_hash[provider]
  end

  def has_valid_coi_statement?
    most_recent_conflict_of_interest_statement.present? && !most_recent_conflict_of_interest_statement.expired?
  end

  def can_act_for_org?(organization_id: nil)
    # The user is acting on behalf of an org of which they're a member
    if organization_id.present? && self.organization_ids.include?(organization_id)
      true
    # The user is acting on behalf of an org of which they're not a member
    elsif organization_id.present? && !self.organization_ids.include?(organization_id)
      false
    # The user is not acting on behalf of an org
    else
      true
    end
  end

  def can_endorse_for_org?(organization_id: nil)
    if !can_act_for_org?(organization_id: organization_id)
      return false
    end

    return self.organizations_with_endorsement_privileges
      .map(&:id)
      .include?(organization_id)
  end

  def self.timepoint_query
    ->(x) {
      self.joins(:events)
        .group("users.id")
        .select("users.id")
        .where("events.created_at >= ?", x)
        .distinct
        .count
    }
  end

  private
  def default_username
    basename = if username.present?
                 username
    elsif name.present?
                 name
    elsif email.present?
                 email
    else
                 "unknown_user"
    end
    sanitized_name = basename.gsub(/[@#\s]/, "")
    counter = 1
    appended = false
    while User.where(username: sanitized_name).exists? do
      if appended
        sanitized_name[-1] = counter
      else
        sanitized_name = sanitized_name + "_#{counter}"
        appended = true
      end
      counter += 1
    end
    sanitized_name
  end

  def assign_default_username
    self.username = default_username
    self.save
  end
end
