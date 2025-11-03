module Types::Activities
  class RevokeApprovalActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :assertion, Types::Entities::AssertionType, null: false
    field :approval, Types::Entities::ApprovalType, null: false

    def assertion
      Loaders::AssociationLoader.for(RevokeApprovalActivity, :subject).load(object)
    end

    def approval
      Loaders::AssociationLoader.for(RevokeApprovalActivity, :linked_approval).load(object)
    end
  end
end
