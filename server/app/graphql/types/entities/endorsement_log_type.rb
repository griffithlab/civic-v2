module Types::Entities
  class EndorsementLogType < Types::BaseObject
    field :old_status, Types::EndorsementStatusType, null: true
    field :new_status, Types::EndorsementStatusType, null: false
    field :note, GraphQL::Types::String, null: false
    field :endorsement, Types::Entities::EndorsementType, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end

  def endorsement
    Loaders::AssociationLoader.for(EndorsementLog, :endorsement).load(object)
  end
end
