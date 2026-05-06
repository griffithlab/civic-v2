module Types::Activities
  class RejectRevisionsActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :revisions, [ Types::Revisions::RevisionType ], null: false

    def revisions
      Loaders::AssociationLoader.for(RejectRevisionsActivity, :linked_revisions).load(object)
    end
  end
end
