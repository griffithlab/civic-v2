require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::LeaderboardBase < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)


  def organization_base_query(*actions)
    Organization.joins(users: [:events])
        .where('events.action' => actions)
        .where.not('users.id' => Constants::CIVICBOT_USER_ID)
        .group('organizations.id')
        .select('
                organizations.*,
                COUNT(DISTINCT(events.id)) as action_count,
                RANK() OVER (ORDER BY COUNT(DISTINCT(events.id)) DESC) rank
               ')
        .order('action_count DESC')
  end

  def user_base_query(*actions)
     User.joins(:events)
        .where('events.action' => actions)
        .where.not('users.id' => Constants::CIVICBOT_USER_ID)
        .group('users.id')
        .select('
                users.*, 
                COUNT(DISTINCT(events.id)) as action_count,
                RANK() OVER (ORDER BY COUNT(DISTINCT(events.id)) DESC) rank
                ')
        .order('action_count DESC')
  end

  def self.setup_options
    option(:direction, type: Types::SortDirection) do |scope, value|
      if value
        scope.reorder("action_count #{value}")
      else
        scope.reorder("action_count DESC")
      end
    end

    option(:window, type: Types::TimeWindow) do |scope, value|
      case value
      when "LAST_WEEK"
        scope.where('events.created_at >= ?', 1.week.ago)
      when "LAST_MONTH"
        scope.where('events.created_at >= ?', 1.month.ago)
      when "LAST_YEAR"
        scope.where('events.created_at >= ?', 1.year.ago)
      else
        scope
      end
    end
  end
end
