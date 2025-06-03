class Assertion < ActiveRecord::Base
  validates_with AssertionValidator

  include Commentable
  include Subscribable
  include Flaggable
  include Moderated
  include WithTimepointCounts

  belongs_to :molecular_profile
  has_and_belongs_to_many :evidence_items
  has_and_belongs_to_many :therapies
  belongs_to :disease
  belongs_to :nccn_guideline, optional: true
  has_and_belongs_to_many :acmg_codes
  has_and_belongs_to_many :clingen_codes
  has_and_belongs_to_many :phenotypes
  has_many :comment_mentions, foreign_key: :comment_id, class_name: "EntityMention"
  has_many :endorsements

  enum :amp_level, Constants::AMP_LEVELS
  enum :assertion_type, Constants::ASSERTION_TYPES, suffix: true
  enum :assertion_direction, Constants::EVIDENCE_DIRECTIONS, suffix: true
  enum :significance, Constants::SIGNIFICANCES
  enum :therapy_interaction_type, Constants::THERAPY_INTERACTION_TYPES
  enum :variant_origin, Constants::VARIANT_ORIGINS, suffix: true

  has_one :submission_event,
    ->() { where(action: "assertion submitted").includes(:originating_user) },
    as: :subject,
    class_name: "Event"
  has_one :submitter, through: :submission_event, source: :originating_user
  has_one :acceptance_event,
    ->() { where(action: "assertion accepted").includes(:originating_user).order("events.created_at desc") },
    as: :subject,
    class_name: "Event"
  has_one :acceptor, through: :acceptance_event, source: :originating_user
  has_one :rejection_event,
    ->() { where(action: "assertion rejected").includes(:originating_user).order("events.created_at desc") },
    as: :subject,
    class_name: "Event"
  has_one :rejector, through: :rejection_event, source: :originating_user

  has_many :activities, as: :subject, class_name: "Activity"

  has_one :submission_activity,
    ->() { where(type: "SubmitAssertionActivity") },
    as: :subject,
    class_name: "Activity"


  searchkick highlight: [ :id ], callbacks: :async

  def search_data
    {
      id: name,
    }
  end

  def name
    "AID#{self.id}"
  end

  def link
    Rails.application.routes.url_helpers.url_for("/assertions/#{self.id}")
  end

  def self.timepoint_query
    ->(x) {
      self.where("assertions.status != 'rejected'")
        .where("assertions.created_at >= ?", x)
        .distinct
    }
  end

  def on_revision_accepted
    self.evidence_items_count = self.evidence_items.count
    self.save!
  end


  def editable_fields
    [
      :molecular_profile_id,
      :description,
      :summary,
      :variant_origin,
      :assertion_type,
      :significance,
      :disease_id,
      :assertion_direction,
      :phenotype_ids,
      :therapy_ids,
      :therapy_interaction_type,
      :amp_level,
      :evidence_item_ids,
      :nccn_guideline_id,
      :nccn_guideline_version,
      :acmg_code_ids,
      :clingen_code_ids,
      :fda_companion_test,
      :fda_regulatory_approval,
    ]
  end
end
