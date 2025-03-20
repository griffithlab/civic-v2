module Types::Connections
  class FlagsConnection < Types::BaseConnection
    description "Connection type for objects with flagsincluding additional metadata."

    field :unique_flagging_users, [ Types::Entities::UserType ], null: false,
      description: "List of all users that have flagged this entity."

    field :unique_resolving_users, [ Types::Entities::UserType ], null: true,
      description: "List of all users that have resolved a flag on this entity."

    field :unfiltered_count_for_subject, Int, null: true,
      description: "When filtered on a subject, the total number of flags for that subject, irregardless of other filters. Returns null when there is no subject."

    def unique_flagging_users
      if flaggable
        subject = flaggable
      else
        subject = parent
      end

      User.where(id:
        Event.where(action: "flagged", subject: subject)
          .select(:originating_user_id)
      ).distinct
    end

    def unique_resolving_users
      if flaggable
        subject = flaggable
      else
        subject = parent
      end

      User.where(id:
        Event.where(action: "flag resolved", subject: subject)
          .select(:originating_user_id)
      ).distinct
    end

    def unfiltered_count_for_subject
      if flaggable
        subject = flaggable
      else
        subject = parent
      end

      if subject
        Flag.where(flaggable: flaggable).count
      else
        nil
      end
    end

    private
    def flaggable
      @flaggable ||= object.arguments[:flaggable]
    end
  end
end
