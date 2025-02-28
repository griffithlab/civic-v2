module Resolvers::Leaderboards
  module UserLeaderboardQueries
    def self.included(klass)
      klass.send :option, :role, type: Types::Entities::UserRoleType do |scope, value|
        case value
        when "editor", "admin"
          scope.where(role: [ "editor", "admin" ])
        when "curator"
          scope.where(role: "curator")
        else
          scope
        end
      end
    end
  end
end
