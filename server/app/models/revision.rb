class Revision < ApplicationRecord
  include Commentable
  include Subscribable
  include WithTimepointCounts
  include WithActivities

  belongs_to :subject, polymorphic: true
  belongs_to :revision_set
  # TODO: will we want a mixin someday?
  has_many :events, as: :originating_object
  has_many :comment_mentions, foreign_key: :comment_id, class_name: "EntityMention"

  has_activity :creation_activity, activity_type: "SuggestRevisionSetActivity"
  has_activity :rejection_activity, activity_type: "RejectRevisionsActivity"
  has_activity :acceptance_activity, activity_type: "AcceptRevisionsActivity"
  has_activity :resolution_activity, activity_type: [ "AcceptRevisionsActivity",  "RejectRevisionsActivity" ]

  validates :status, inclusion: {
    in: [ "accepted", "rejected", "superseded", "new" ],
    message: "%{value} is not a valid revision status"
  },
  allow_blank: false

  searchkick highlight: [ :id ], callbacks: :async

  def revisor
    creation_activity.user
  end

  def resolver
    if status == "rejected"
      rejection_activity.user
    else
      acceptance_activity.user
    end
  end

  def search_data
    {
      id: name
    }
  end

  def name
    "RID#{self.id}"
  end

  def link
    if self.subject_type == "ExonCoordinate" || self.subject_type == "VariantCoordinate"
      "/variants/#{self.subject.variant.id}/revisions"
    else
      "/#{Constants::DB_TYPE_TO_PATH_SEGMENT[self.subject_type]}/#{self.subject_id}/revisions"
    end
  end

  def self.timepoint_query
    ->(x) {
      Event.where(action: "revision accepted")
        .where("created_at >= ?", x)
    }
  end
end
