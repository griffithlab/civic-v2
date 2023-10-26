class Revision < ApplicationRecord
  include Commentable
  include Subscribable
  include WithTimepointCounts
  include WithActivities

  belongs_to :subject, polymorphic: true
  belongs_to :revision_set
  #TODO: will we want a mixin someday?
  has_many :events, as: :originating_object
  has_many :comment_mentions, foreign_key: :comment_id, class_name: 'EntityMention'

  has_activity :creation_activity, activity_type: 'SuggestRevisionSetActivity'
  has_activity :rejection_activity, activity_type: 'RejectRevisionsActivity'
  has_activity :acceptance_activity, activity_type: 'AcceptRevisionsActivity'

  has_one :creation_event,
    ->() { where(action: 'revision suggested') },
    as: :originating_object,
    class_name: 'Event'

  has_one :resolving_event,
    ->() { where("events.action = 'revision rejected' OR events.action = 'revision accepted' OR events.action = 'revision superseded'") },
    as: :originating_object,
    class_name: 'Event'

  validates :status, inclusion: {
    in: ['accepted', 'rejected', 'superseded', 'new'],
    message: "%{value} is not a valid revision status"
  },
  allow_blank: false

  searchkick highlight: [:id], callbacks: :async

  def revisor
    creation_event.originating_user
  end

  def resolver
    resolving_event&.originating_user
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
    "/#{Constants::DB_TYPE_TO_PATH_SEGMENT[self.subject_type]}/#{self.subject_id}/revisions"
  end

  def self.timepoint_query
    ->(x) {
      Event.where(action: 'revision accepted')
        .where('created_at >= ?', x)
    }
  end
end
