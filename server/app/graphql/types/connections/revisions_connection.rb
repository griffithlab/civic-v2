module Types::Connections
  class RevisionsConnection < Types::BaseConnection
    attr_reader :revisions_subject

    description "Connection type for objects with revisions including additional metadata."

    field :unique_revisors, [ Types::Entities::UserType ], null: false,
      description: "List of all users that have submitted a revision to this entity."

    field :revised_field_names, [ Types::Revisions::FieldNameType ], null: false,
      description: "List of all fields that have at least one revision."

    field :unfiltered_count_for_subject, Int, null: true,
      description: "When filtered on a subject, the total number of revisions for that subject, irregardless of other filters. Null when no subject provided."

    field :unique_resolvers, [ Types::Entities::UserType ], null: false,
      description: "List of all users that have accepted/rejected/superseded a revision to this entity."

    def unique_revisors
      if revision_subject
        subject = revision_subject
      else
        subject = parent
      end

      if subject
        User.where(id:
              Event.where(action: "revision suggested", subject: subject)
               .select(:originating_user_id)
        ).distinct
      else
        User.where(id:
              Event.where(action: "revision suggested")
               .select(:originating_user_id)
        ).distinct
      end
    end

    def revised_field_names
      if revision_subject
        subject = revision_subject
      else
        subject = parent
      end

      if subject
        names = Revision.where(subject: subject).distinct.pluck(:field_name)
      else
        names = Revision.distinct.pluck(:field_name)
      end

      names.map do |n|
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

      if subject
        Revision.where(subject: subject).count
      else
        nil
      end
    end

    def unique_resolvers
      if revision_subject
        subject = revision_subject
      else
        subject = parent
      end

      review_actions = [ "revision accepted", "revision rejected", "revision superseded" ]
      if subject
        User.where(id:
            Event.where(action: review_actions, subject: subject)
             .select(:originating_user_id)
        ).distinct
      else
        User.where(id:
              Event.where(action: review_actions)
               .select(:originating_user_id)
        ).distinct
      end
    end

    private
    def revision_subject
      @revision_subject ||= object.arguments[:subject]
    end
  end
end
