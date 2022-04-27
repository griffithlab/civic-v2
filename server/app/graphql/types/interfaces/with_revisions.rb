module Types::Interfaces
  module WithRevisions
    include Types::BaseInterface

    description 'A CIViC entity that can have revisions proposed to it.'
    field :revisions, resolver: Resolvers::Revisions
    field :last_submitted_revision_event, Types::Entities::EventType, null: true
    field :last_accepted_revision_event, Types::Entities::EventType, null: true
    field :fields_with_new_revisions, [String], null: false

    def last_submitted_revision_event
      Loaders::AssociationLoader.for(object.class, :last_submitted_revision_event).load(object)
    end

    def last_accepted_revision_event
      Loaders::AssociationLoader.for(object.class, :last_accepted_revision_event).load(object)
    end

    def fields_with_new_revisions
      Loaders::AssociationLoader.for(object.class, :revisions).load(object).then do |revisions|
        revisions.select{|r| r.status == 'new'}.map{|r| r.field_name}.uniq
      end
    end
  end
end
