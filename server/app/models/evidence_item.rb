class EvidenceItem < ActiveRecord::Base
  validates_with EvidenceItemValidator

  include Subscribable
  include Commentable
  include Flaggable
  include Moderated
  include WithTimepointCounts

  belongs_to :molecular_profile
  belongs_to :disease, optional: true
  belongs_to :source
  has_and_belongs_to_many :therapies
  has_and_belongs_to_many :phenotypes
  has_and_belongs_to_many :assertions
  has_many :comment_mentions, foreign_key: :comment_id, class_name: "EntityMention"

  enum :evidence_type, Constants::EVIDENCE_TYPES, suffix: true
  enum :evidence_level, Constants::EVIDENCE_LEVELS
  enum :evidence_direction, Constants::EVIDENCE_DIRECTIONS, suffix: true
  # TODO make this an enum:
  # enum evidence_status: Constants::EVIDENCE_STATUS
  enum :variant_origin, Constants::VARIANT_ORIGINS, suffix: true
  enum :significance, Constants::SIGNIFICANCES
  enum :therapy_interaction_type, Constants::THERAPY_INTERACTION_TYPES

  has_one :submission_event,
    ->() { where(action: "submitted").includes(:originating_user) },
    as: :subject,
    class_name: "Event"
  has_one :submitter, through: :submission_event, source: :originating_user
  has_one :acceptance_event,
    ->() { where(action: "accepted").includes(:originating_user).order("events.created_at desc") },
    as: :subject,
    class_name: "Event"
  has_one :acceptor, through: :acceptance_event, source: :originating_user
  has_one :rejection_event,
    ->() { where(action: "rejected").includes(:originating_user).order("events.created_at desc") },
    as: :subject,
    class_name: "Event"
  has_one :rejector, through: :rejection_event, source: :originating_user

  has_many :activities, as: :subject, class_name: "Activity"

  has_one :submission_activity,
    ->() { where(type: "SubmitEvidenceItemActivity") },
    as: :subject,
    class_name: "Activity"

  validates :rating, inclusion: [ 1, 2, 3, 4, 5 ]


  searchkick highlight: [ :id ], callbacks: :async

  def search_data
    {
      id: name
    }
  end

  def name
    "EID#{self.id}"
  end

  def display_name
    self.name
  end

  def link
    Rails.application.routes.url_helpers.url_for("/evidence/#{self.id}")
  end

  def self.timepoint_query
    ->(x) {
      self.where("evidence_items.status != 'rejected'")
        .where("evidence_items.created_at >= ?", x)
        .distinct
    }
  end

  def editable_fields
    [
      :molecular_profile_id,
      :variant_origin,
      :source_id,
      :evidence_type,
      :significance,
      :disease_id,
      :description,
      :evidence_level,
      :evidence_direction,
      :phenotype_ids,
      :rating,
      :therapy_interaction_type,
      :therapy_ids
    ]
  end
end
