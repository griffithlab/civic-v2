module Types::Activities
  class ApproveAssertionActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :assertion, Types::Entities::AssertionType, null: false
    field :approval, Types::Entities::ApprovalType, null: false

    def assertion
      Loaders::AssociationLoader.for(ApproveAssertionActivity, :subject).load(object)
    end

    def approval
      Loaders::AssociationLoader.for(ApproveAssertionActivity, :linked_approval).load(object)
    end
  end
end
