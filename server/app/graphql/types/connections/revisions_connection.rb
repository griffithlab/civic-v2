module Types::Connections
  class RevisionsConnection < Types::BaseConnection
    description 'Connection type for objects with revisions including additional metadata.'

    field :unique_revisors, [Types::Entities::UserType], null: false,
      description: 'List of all users that have submitted a revision to this entity.'

    field :revised_field_names, [Types::Revisions::FieldNameType], null: false,
      description: 'List of all fields that have at least one revision.'

    field :unfiltered_count_for_subject, Int, null: true,
      description: 'When filtered on a subject, the total number of revisions for that subject, irregardless of other filters'

    def unique_revisors
      if revision_subject
        subject = revision_subject
      else
        subject = parent
      end

       User.where(id:
            Event.where(action: 'revision suggested', subject: subject)
             .select(:originating_user_id)
       ).distinct
    end

    def revised_field_names
      if revision_subject
        subject = revision_subject
      else
        subject = parent
      end
      names = Revision.where(subject: subject).distinct.pluck(:field_name)
      names.map do|n|
        {
          name: n,
          display_name: Types::Revisions::LinkoutData.display_name(n)
        }
      end
    end

    def unfiltered_count_for_subject
      if revision_subject
        subject = revision_subject
      else
        subject = parent
      end
      Revision.where(subject: subject).count
    end

    private
    def revision_subject
      @revision_subject ||= object.arguments[:subject]
    end
  end
end
