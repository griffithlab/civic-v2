module Types::Connections
  class RevisionsConnection < Types::BaseConnection
    description 'Connection type for objects with revisions including additional metadata.'

    field :unique_revisors, [Types::Entities::UserType], null: false,
      description: 'List of all users that have submitted a revision to this entity.'

    field :revised_field_names, [Types::Revisions::FieldNameType], null: false,
      description: 'List of all fields that have at least one revision.'

    def unique_revisors
       User.where(id:
            Event.where(action: 'revision suggested', subject: parent)
             .select(:originating_user_id)
       ).distinct

    end

    def revised_field_names
      names = Revision.where(subject: parent).distinct.pluck(:field_name)
      names.map do|n|
        {
          name: n,
          display_name: Types::Revisions::LinkoutData.display_name(n)
        }
      end
    end

  end
end
