class Event < ActiveRecord::Base
  belongs_to :subject, ->() { unscope(where: :deleted) }, polymorphic: true
  belongs_to :originating_user, foreign_key: :originating_user_id, class_name: 'User'
  belongs_to :organization, required: false
  belongs_to :originating_object, polymorphic: true

  serialize :state_params, JSON

  validates :originating_object, :originating_user, { presence: true }

  before_create :capture_user_role

  #TODO: Validation of action, user, and subject
  #TODO: validate that subject can be subscribed to
  #TODO: Notify subscribers to event's subject

  def capture_user_role
    self.user_role = self.originating_user.role
  end
end
