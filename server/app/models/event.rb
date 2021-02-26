class Event < ActiveRecord::Base
  belongs_to :subject, ->() { unscope(where: :deleted) }, polymorphic: true
  belongs_to :originating_user, foreign_key: :originating_user_id, class_name: 'User'
  belongs_to :organization
  
  #TODO:  Validation of action, user, and subject
  #TODO: capture event and org to credit
  #TODO: validate that subject can be subscribed to
  #TODO: Notify subscribers to event's subject
end
