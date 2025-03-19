module Types::Activities
  class RevokeEndorsementActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :assertion, Types::Entities::AssertionType, null: false
    field :endorsement, Types::Entities::EndorsementType, null: false

    def assertion
      Loaders::AssociationLoader.for(EndorseAssertionActivity, :subject).load(object)
    end

    def endorsement
      Loaders::AssociationLoader.for(EndorseAssertionActivity, :linked_endorsement).load(object)
    end
  end
end
