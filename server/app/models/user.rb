class User < ActiveRecord::Base
 #include WithTimepointCounts
 #include SoftDeletable

  has_many :authorizations

  #has_many :comments
  #has_many :suggested_changes
  #has_many :subscriptions
  #has_many :events, foreign_key: :originating_user_id
  #has_one :most_recent_event,
    #->() { order('created_at DESC').limit(1) },
    #class_name: 'Event', foreign_key: :originating_user_id
  #has_many :domain_expert_tags
  #has_many :badge_awards
  #has_many :badge_claims
  has_many :affiliations
  has_many :organizations, through: :affiliations
  #has_one :most_recent_organization, through: :most_recent_event, source: :organization
  #belongs_to :country
  #has_many :conflict_of_interest_statements, dependent: :destroy
  #has_one :most_recent_conflict_of_interest_statement,
    #->() { order('created_at DESC').limit(1) },
    #class_name: 'ConflictOfInterestStatement'

  enum area_of_expertise: ['Patient Advocate', 'Clinical Scientist', 'Research Scientist']
  enum role: ['curator', 'editor', 'admin']

  validates :username, format: { without: /\s|@/, message: 'cannot contain whitespace or @ symbols' }
  validate :username_is_not_role_name
  validate :require_email_for_editors
  after_create :assign_default_username

  #has_attached_file :profile_image,
    #styles: { x256: '256x256', x128: '128x128', x64: '64x64', x32: '32x32', x14: '14x14' }
  #validates_attachment :profile_image,
      #content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] },
      #size: { in: 0..15.megabytes }

  def self.datatable_scope
    joins('LEFT OUTER JOIN events ON events.originating_user_id = users.id')
      .joins('LEFT OUTER JOIN affiliations ON users.id = affiliations.user_id')
      .joins('LEFT OUTER JOIN organizations ON affiliations.organization_id = organizations.id')
      .includes(:badge_awards, domain_expert_tags: [:domain_of_expertise])
  end

  def self.index_scope
    includes(:organizations, :most_recent_conflict_of_interest_statement, domain_expert_tags: [:domain_of_expertise])
  end

  def self.view_scope
    includes(:organizations, :badge_awards, :most_recent_conflict_of_interest_statement, domain_expert_tags: [:domain_of_expertise])
  end

  def self.domain_experts_scope
    joins(:domain_expert_tags)
      .includes(domain_expert_tags: [:domain_of_expertise])
  end

  def self.create_from_omniauth(auth_hash, authorization)
    auth_provider_adaptor(auth_hash['provider']).create_from_omniauth(auth_hash).tap do |user|
      user.authorizations << authorization
      user.role = 'curator'
    end
    user.save
  end

  def stats_hash
    {
      comments: events.where(action: 'commented').count,
      suggested_changes: suggested_changes.count,
      applied_changes: suggested_changes.where(status: 'applied').count,
      submitted_evidence_items: submitted_evidence_items.count,
      accepted_evidence_items: submitted_evidence_items.where(status: 'accepted').count,
      suggested_sources: events.where(action: 'publication suggested').count,
      submitted_assertions: submitted_assertions.count,
      accepted_assertions: submitted_assertions.where(status: 'accepted').count,
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
    EvidenceItem.joins(:submission_event).where(events: {originating_user: self})
  end

  def submitted_assertions
    Assertion.joins(:submission_event).where(events: {originating_user: self})
  end

  def make_admin!
    self.role = 'admin'
    self.save
  end

  def username_is_not_role_name
    if username.present?
      if (User.roles.keys + User.roles.keys.map(&:pluralize)).include?(username.downcase)
        errors.add(:username, 'cannot be the same as a role name')
      end
    end
  end

  def require_email_for_editors
    if self.role == 'editor' && self.email.blank?
      errors.add(:email, 'cannot be blank for editors')
    end
  end

  def self.timepoint_query
    ->(x) {
      self.joins(:events)
        .group('users.id')
        .select('users.id')
        .where('events.created_at >= ?', x)
        .distinct
        .count
    }
  end

  def self.auth_provider_adaptor(provider)
    @providers_hash ||= {
      'github'        => UserAdaptors::GitHub,
      'orcid'         => UserAdaptors::Orcid,
      'google_oauth2' => UserAdaptors::Google,
      'developer'     => UserAdaptors::Developer
    }
    @providers_hash[provider]
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
                 'unknown_user'
               end
    sanitized_name = basename.gsub(/[@#\s]/,'')
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
