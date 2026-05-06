class ActivityLinkedEntity < ApplicationRecord
  belongs_to :entity, polymorphic: true
  belongs_to :activity
end
