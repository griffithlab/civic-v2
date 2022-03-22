class Flag < ActiveRecord::Base
  include Commentable

  belongs_to :flaggable, polymorphic: true
  belongs_to :flagging_user, class_name: 'User'
  belongs_to :resolving_user, class_name: 'User', required: false

  validates :state, inclusion: ['open', 'resolved']

  def name
    "a flag on #{flaggable.name}"
  end

  def link
    "/#{Constants::DB_TYPE_TO_PATH_SEGMENT[self.flaggable_type]}/#{self.flaggable.id}/flags"
  end
end
