class Event < ActiveRecord::Base
  belongs_to :subject, ->() { unscope(where: :deleted) }, polymorphic: true
  belongs_to :originating_user, foreign_key: :originating_user_id, class_name: 'User'
  belongs_to :organization
end
