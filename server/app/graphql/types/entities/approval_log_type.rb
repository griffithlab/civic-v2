module Types::Entities
  class ApprovalLogType < Types::BaseObject
    field :old_status, Types::ApprovalStatusType, null: true
    field :new_status, Types::ApprovalStatusType, null: false
    field :note, GraphQL::Types::String, null: false
    field :approval, Types::Entities::ApprovalType, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end

  def approval
    Loaders::AssociationLoader.for(ApprovalLog, :approval).load(object)
  end
end
