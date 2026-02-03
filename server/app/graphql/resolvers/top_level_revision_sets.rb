require "search_object"
require "search_object/plugin/graphql"

class Resolvers::TopLevelRevisionSets < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::RevisionSetType.connection_type, null: false

  description "List and filter revision sets."

  scope { RevisionSet.preload(:revisions).order("revision_sets.created_at DESC") }

  option(:originating_user_id, type: Int, description: "Limit to revisions by a certain user") do |scope, value|
    scope.joins(:activities).where("activities.user_id = ?", value).where("activities.type = ?", "SuggestRevisionSetActivity")
  end

  option(:resolving_user_id, type: Int, description: "Limit to revisions accepted, rejected, or superseded by a certain user") do |scope, value|
    scope.joins(:activities).where("activities.user_id = ?", value).where("activities.type IN (?)", [ "AcceptRevisionsActivity",  "RejectRevisionsActivity" ])
  end

  option(:status, type: Types::Revisions::RevisionStatus, description: "Limit to revisions with a certain status") do |scope, value|
    scope.joins(:revisions).where("revisions.status = ?", value)
  end

  option(:sort_by, type: Types::DateSortType, description: "Sort order for the comments. Defaults to most recent.") do |scope, value|
    scope.reorder("revisions.#{value.column} #{value.direction}")
  end

  option(:field_name, type: String, description: "Limit to revisions on a particular field.") do |scope, value|
    scope.where(field_name: value)
  end

  option(:subject, type: Types::Revisions::ModeratedInput, description: "Limit to revisions of a specific CIViC entity") do |scope, value|
    scope.where(subject: value)
  end
end
