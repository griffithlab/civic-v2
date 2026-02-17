require "search_object"
require "search_object/plugin/graphql"

class Resolvers::TopLevelRevisionSets < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::RevisionSetType.connection_type, null: false

  description "List and filter revision sets."

  scope { RevisionSet.order("revision_sets.created_at DESC") }

  option(:originating_user_id, type: Int, description: "Limit to revisions by a certain user using the user CIViC ID") do |scope, value|
    scope.joins(:activities).where("activities.user_id = ?", value).where("activities.type = ?", "SuggestRevisionSetActivity")
  end

  option(:originating_user_name, type: String, description: "Limit to revisions by a certain user using the user name") do |scope, value|
    scope.joins(activities: [ :user ]).where("users.name ILIKE '%#{value}%' OR users.username ILIKE '%#{value}%'").where("activities.type = ?", "SuggestRevisionSetActivity")
  end

  option(:status, type: Types::Revisions::RevisionStatus, description: "Limit to revision sets that include revisions with a certain status") do |scope, value|
    scope.joins(:revisions).where("revisions.status = ?", value).distinct
  end

  option(:sort_by, type: Types::DateSortType, description: "Sort order for the revision sets. Defaults to most recent.") do |scope, value|
    scope.reorder("revision_sets.#{value.column} #{value.direction}")
  end

  option(:field_name, type: String, description: "Limit to revision sets that include revisions on a particular field.") do |scope, value|
    scope.joins(:revisions).where("revisions.field_name ILIKE '#{value.gsub(" ", "_")}%'").distinct
  end

  option(:subject, type: Types::Revisions::ModeratedInput, description: "Limit to revision sets of a specific CIViC entity") do |scope, value|
    scope.joins(:revisions).where("revisions.subject_type = ? AND revisions.subject_id = ?", value.entity_type, value.id).distinct
  end

  option(:subject_type, type: Types::Activities::ActivitySubjectInputType, description: "Limit to revision sets of a specific CIViC entity type") do |scope, value|
    scope.joins(:revisions).where("revisions.subject_type = ?", value).distinct
  end

  option(:exclude_revisions_from_user_id, type: Int, description: "Exclude revision sets submitted by the user with the given CIViC ID") do |scope, value|
    scope.joins(:activities).where.not("activities.user_id = ?", value).where("activities.type = ?", "SuggestRevisionSetActivity")
  end

  option(:organization_id, type: Int, description: "Limit to revisions by a certian organization using the organization CIViC ID") do |scope, value|
    scope.joins(:activities).where("activities.organization_id = ?", value).where("activities.type = ?", "SuggestRevisionSetActivity")
  end

  option(:organization_name, type: String, description: "Limit to revisions by a organization user using the organization name") do |scope, value|
    scope.joins(activities: [ :organization ]).where("organizations.name ILIKE '%#{value}%'").where("activities.type = ?", "SuggestRevisionSetActivity")
  end

end
