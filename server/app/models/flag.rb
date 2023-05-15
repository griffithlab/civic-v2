class Flag < ActiveRecord::Base
  include Subscribable
  include Commentable

  belongs_to :flaggable, polymorphic: true, validate: false
  belongs_to :flagging_user, class_name: 'User'
  belongs_to :resolving_user, class_name: 'User', required: false

  has_many :activities_linked_entities,
    ->() { where(entity_type: 'Flag') },
    foreign_key: :entity_id,
    class_name: 'ActivityLinkedEntity'
  has_many :activities, through: :activities_linked_entities

  has_one :open_activity_link,
    ->() { where(entity_type: 'Flag').eager_load(:activity).where("activities.type = 'FlagEntityActivity'") },
    foreign_key: :entity_id,
    class_name: 'ActivityLinkedEntity'
  has_one :open_activity, through: :open_activity_link, source: :activity

  has_one :resolution_activity_link,
    ->() { where(entity_type: 'Flag').eager_load(:activity).where("activities.type = 'ResolveFlagActivity'") },
    foreign_key: :entity_id,
    class_name: 'ActivityLinkedEntity'
  has_one :resolution_activity, through: :resolution_activity_link, source: :activity

  validates :state, inclusion: ['open', 'resolved']

  def name
    "FID#{self.id}"
  end

  def link
    "/#{Constants::DB_TYPE_TO_PATH_SEGMENT[self.flaggable_type]}/#{self.flaggable.id}/flags"
  end
end
