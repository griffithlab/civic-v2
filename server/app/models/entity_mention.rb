class EntityMention < ApplicationRecord
  belongs_to :comment
  belongs_to :entity, polymorphic: true
end
