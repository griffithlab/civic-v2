module Types::Interfaces
  module WithRevisions
    include Types::BaseInterface

    description 'A CIViC entity that can have revisions proposed to it.'
    field :revisions, resolver: Resolvers::Revisions
    field :last_submitted_revision_event, Types::Entities::EventType, null: true
    field :last_accepted_revision_event, Types::Entities::EventType, null: true

    def last_submitted_revision_event
      Loaders::AssociationLoader.for(object.class, :last_submitted_revision_event).load(object)
    end

    def last_accepted_revision_event
      Loaders::AssociationLoader.for(object.class, :last_accepted_revision_event).load(object)
    end
  end
end
