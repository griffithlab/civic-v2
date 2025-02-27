module Types::Connections
  class ActivitiesConnection < Types::BaseConnection
    description 'Connection type for the activity feed'

    field :unique_participants, [Types::Entities::UserType], null: false,
      description: 'List of all users that have performed an activity on the subject entity.'

    field :participating_organizations, [Types::Entities::OrganizationType], null: false,
      description: 'List of all organizations who are involved in this activity stream.'

    field :unfiltered_count, Int, null: false,
      description: 'When filtered on a subject, user, or organization, the total number of events for that subject/user/organization, irregardless of other filters.'

    field :activity_types, [Types::Activities::ActivityTypeInputType], null: false,
      description: 'List of activity types that have occurred on this entity.'

    field :subject_types, [Types::Activities::ActivitySubjectInputType], null: false

    def unique_participants
      #Users who's originating ids appear in the activities query,
      #joined to activities table, limited to only activities in the activities query
      #select the user id and the time of the newest relevant activity
      ranked_user_ids = User.where(id: unscoped_activities_base_query.select(:user_id))
        .joins(:activities)
        .where(activities: { id: unscoped_activities_base_query.select(:id) } )
        .select("users.id as user_id, max(activities.created_at) newest_activity_timestamp")
        .group("users.id")


      #users, ranked by most recent relevant event
      User.joins("INNER JOIN (#{ranked_user_ids.to_sql}) ordered ON ordered.user_id = users.id")
        .order('ordered.newest_activity_timestamp desc')
        .limit(15)
    end

    def participating_organizations
      Organization.where(id:
                         unscoped_activities_base_query.select(:organization_id)
                        ).distinct
    end

    def unfiltered_count
      unscoped_activities_base_query.distinct.count
    end

    def activity_types
      unscoped_activities_base_query.distinct.pluck(:type)
    end

    def subject_types
      unscoped_activities_base_query.distinct.pluck(:subject_type)
    end

    private
    def unscoped_activities_base_query
      @unscoped_base ||= unscoped_activities
    end

    def unscoped_activities
      if feed_mode = object.arguments[:mode]
        if feed_mode == :user
          if !object.arguments[:user_id]
            raise GraphQL::ExecutionError, "Must provide a user id when activity feed is in User mode."
          end
          return Activity.where(user_id: object.arguments[:user_id])
        elsif feed_mode == :organization
          if !object.arguments[:organization] || object.arguments[:organization][:ids].blank?
            raise GraphQL::ExecutionError, "Must provide an organization id when activity feed is in Organization mode."
          end
          return Activity.where(organization_id: object.arguments[:organization][:ids])
        elsif feed_mode == :unscoped
          Activity.all
        #subject mode
        else 
          if !object.arguments[:subject]
            raise GraphQL::ExecutionError, "Must provide a subject when activity feed is in Subject mode."
          end
          return Activity.where(subject: object.arguments[:subject])
        end
      end

      #no mode,no parent, unscoped
      return Activity.all
    end
  end
end
