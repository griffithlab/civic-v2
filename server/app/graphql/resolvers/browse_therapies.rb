require "search_object"
require "search_object/plugin/graphql"

class Resolvers::BrowseTherapies < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)
  include Resolvers::Shared::SearchHelpers

  type Types::BrowseTables::BrowseTherapyType.connection_type, null: false

  scope { MaterializedViews::TherapyBrowseTableRow.all }

  option(:ncit_id, type: String, description: "Limit to therapies with a specific NCIT ID") do |scope, value|
    if value.upcase.starts_with?("C")
      scope.where(ncit_id: value.upcase)
    else
      scope.where(ncit_id: "C#{value}")
    end
  end

  option(:therapy_alias, type: String) do |scope, value|
    scope.where(array_query_for_column("alias_names"), "%#{value}%")
  end

  option(:id, type: Int, description: "Filter on a therapy's internal CIViC id") do |scope, value|
    scope.where(id: id)
  end

  option(:name, type: String, description: "Wildcard match on therapy name") do |scope, value|
    scope.where("name ILIKE ?", "%#{value}%")
  end

  option(:sort_by, type: Types::BrowseTables::TherapySortType, description: "Sort order for the therapies. Defaults to the highest evidence item count.") do |scope, value|
    scope.reorder("#{value.column} #{value.direction}")
  end
end
