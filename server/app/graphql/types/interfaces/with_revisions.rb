module Types::Interfaces
  module WithRevisions
    include Types::BaseInterface

    description "A CIViC entity that can have revisions proposed to it."
    field :revisions, resolver: Resolvers::Revisions
    field :last_submitted_revision_event, Types::Entities::EventType, null: true
    field :last_accepted_revision_event, Types::Entities::EventType, null: true
    field :open_revision_count, Int, null: false

    def last_submitted_revision_event
      Loaders::AssociationLoader.for(object.class, :last_submitted_revision_event).load(object)
    end

    def last_accepted_revision_event
      Loaders::AssociationLoader.for(object.class, :last_accepted_revision_event).load(object)
    end

    def open_revision_count
      Loaders::AssociationCountLoader.for(object.class, association: :open_revisions).load(object.id)
    end
  end
end
