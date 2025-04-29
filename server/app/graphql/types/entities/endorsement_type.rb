module Types::Entities
  class EndorsementType < Types::BaseObject
    field :id, Int, null: false
    field :organization, Types::Entities::OrganizationType, null: false
    field :user, Types::Entities::UserType, null: false
    field :assertion, Types::Entities::AssertionType, null: false
    field :status, Types::EndorsementStatusType, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :last_reviewed, GraphQL::Types::ISO8601DateTime, null: false
    field :ready_for_clinvar_submission, Boolean, null: false

    def organization
      Loaders::AssociationLoader.for(Endorsement, :organization).load(object)
    end

    def assertion
      Loaders::AssociationLoader.for(Endorsement, :assertion).load(object)
    end

    def user
      Loaders::AssociationLoader.for(Endorsement, :user).load(object)
    end

    def ready_for_clinvar_submission
      object.ready_for_clinvar_submission?
    end
  end
end
