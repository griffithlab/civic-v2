module Types::Revisions
  class RevisionType < Types::BaseObject
    connection_type_class Types::Connections::RevisionsConnection

    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::EventOriginObject
    implements Types::Interfaces::Commentable

    field :id, Int, null: false
    field :status, Types::Revisions::RevisionStatus, null: false
    field :current_value, GraphQL::Types::JSON, null: true
    field :suggested_value, GraphQL::Types::JSON, null: true
    field :field_name, String, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :revision_set_id, Int, null: false
    field :linkout_data, Types::Revisions::LinkoutData, null: false
    field :creation_activity, Types::Activities::SuggestRevisionSetActivityType, null: true
    field :acceptance_activity, Types::Activities::AcceptRevisionsActivityType, null: true
    field :superseding_activity, Types::Activities::AcceptRevisionsActivityType, null: true
    field :rejection_activity, Types::Activities::RejectRevisionsActivityType, null: true
    field :resolution_activity, Types::Interfaces::ActivityInterface, null: true
    field :subject, Types::Interfaces::EventSubject, null: false

    def comments
      Loaders::AssociationLoader.for(Revision, :comments).load(object)
    end

    def linkout_data
      Types::Revisions::LinkoutData.from_revision(object)
    end

    def creation_activity
      Loaders::AssociationLoader.for(Revision, :creation_activity).load(object)
    end

    def acceptance_activity
      if object.status == "accepted"
        Loaders::AssociationLoader.for(Revision, :acceptance_activity).load(object)
      else
        nil
      end
    end

    def superseding_activity
      if object.status == "superseded"
        Loaders::AssociationLoader.for(Revision, :acceptance_activity).load(object)
      else
        nil
      end
    end

    def rejection_activity
      if object.status == "rejected"
        Loaders::AssociationLoader.for(Revision, :rejection_activity).load(object)
      else
        nil
      end
    end

    def resolution_activity
      if object.status != "new"
        Loaders::AssociationLoader.for(Revision, :resolution_activity).load(object)
      else
        nil
      end
    end
  end
end
