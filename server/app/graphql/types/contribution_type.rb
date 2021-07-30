module Types
  class ContributionType < Types::BaseObject
    field :action, Types::Events::EventActionType, null: false
    field :count, Int, null: false
  end
end
