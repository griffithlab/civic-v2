module Types::Entities
  class ApprovalType < Types::BaseObject
    field :id, Int, null: false
    field :organization, Types::Entities::OrganizationType, null: false
    field :user, Types::Entities::UserType, null: false
    field :assertion, Types::Entities::AssertionType, null: false
    field :status, Types::ApprovalStatusType, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :last_reviewed, GraphQL::Types::ISO8601DateTime, null: false
    field :approval_activity, Types::Activities::ApproveAssertionActivityType, null: false
    field :revocation_activity, Types::Activities::RevokeApprovalActivityType, null: true
    field :ready_for_clinvar_submission, Boolean, null: false

    def organization
      Loaders::AssociationLoader.for(Approval, :organization).load(object)
    end

    def assertion
      Loaders::AssociationLoader.for(Approval, :assertion).load(object)
    end

    def user
      Loaders::AssociationLoader.for(Approval, :user).load(object)
    end

    def approval_activity
      Loaders::AssociationLoader.for(Approval, :approval_activity).load(object)
    end

    def revocation_activity
      Loaders::AssociationLoader.for(Approval, :revocation_activity).load(object)
    end

    def ready_for_clinvar_submission
      false
    end
  end
end
