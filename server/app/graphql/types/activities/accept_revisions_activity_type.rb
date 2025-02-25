module Types::Activities
  class AcceptRevisionsActivityType < Types::BaseObject
    implements Types::Interfaces::ActivityInterface

    field :revisions, [ Types::Revisions::RevisionType ], null: false
    field :superseded_revisions, [ Types::Revisions::RevisionType ], null: false

    def revisions
      Loaders::AssociationLoader.for(AcceptRevisionsActivity, :linked_revisions).load(object)
    end

    def superseded_revisions
      Loaders::AssociationLoader.for(AcceptRevisionsActivity, :linked_superseded_revisions).load(object)
    end
  end
end
