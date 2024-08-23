class Comment < ActiveRecord::Base
  include WithTimepointCounts
  ##before_destroy :mark_events_unlinkable

  belongs_to :user
  belongs_to :commentable, ->() { unscope(where: :deleted) }, polymorphic: true

  has_many :events, as: :originating_object
  has_many :user_mentions
  has_many :entity_mentions
  has_many :role_mentions

  has_one :creation_event,
    ->() { where(action: 'commented') },
    as: :originating_object,
    class_name: 'Event'

  default_scope -> { order('created_at ASC') }

  alias_attribute :text, :comment

  def link
    if self.commentable_type == 'Revision' or self.commentable_type == 'Flag'
      self.commentable.link
    else
      "/#{Constants::DB_TYPE_TO_PATH_SEGMENT[self.commentable_type]}/#{self.commentable_id}/comments"
    end
  end

  def deleted?
    deleted_at.present?
  end

  private
  def mark_events_unlinkable
    if self.commentable.respond_to?(:events)
      unlinkable_events = self.commentable.events.where(action: 'commented')
        .select { |e| e.state_params['comment'] && e.state_params['comment']['id'] == self.id }
      unlinkable_events.each do |e|
        e.unlinkable = true
        e.save
      end
    end
  end

  def self.timepoint_query
    ->(x) {
      Event.where(action: 'commented')
        .where('events.created_at >= ?', x)
        .distinct
    }
  end
end
