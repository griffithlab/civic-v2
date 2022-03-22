class Revision < ApplicationRecord
  include Commentable
  include Subscribable
  include WithTimepointCounts

  belongs_to :subject, polymorphic: true
  #TODO: will we want a mixin someday?
  has_many :events, as: :originating_object
  has_many :comment_mentions, foreign_key: :comment_id, class_name: 'EntityMention'

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

  searchkick highlight: [:id]

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
    "#{self.subject.link}/revisions"
  end

  def self.timepoint_query
    ->(x) {
      Event.where(action: 'revision accepted')
        .where('created_at >= ?', x)
    }
  end
end
