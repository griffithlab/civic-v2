module Types
  class LifecycleType < BaseObject
    field :last_reviewed, Types::Entities::EventType, null: true
    field :last_modified, Types::Entities::EventType, null: true
    field :last_commented_on, Types::Entities::EventType, null: true
  end
end
