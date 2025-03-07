module Types::Activities
  class EndorseAssertionActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :assertion, Types::Entities::AssertionType, null: false
    field :endorsement, Types::Entities::EndorsementType, null: false
    field :endorsement_log_entry, Types::Entities::EndorsementLogType, null: false

    def assertion
      Loaders::AssociationLoader.for(EndorseAssertionActivity, :subject).load(object)
    end

    def endorsement
      Loaders::AssociationLoader.for(EndorseAssertionActivity, :linked_endorsement).load(object)
    end

    def endorsement_log_entry
      Loaders::AssociationLoader.for(EndorseAssertionActivity, :linked_endorsement_log).load(object)
    end
  end
end
