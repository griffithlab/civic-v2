require "search_object"
require "search_object/plugin/graphql"

class Resolvers::TopLevelTherapies < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)
  include Resolvers::Shared::SearchHelpers

  type Types::Entities::TherapyType.connection_type, null: false

  description "List and filter Therapies from the NCI Thesaurus."

  scope {
    Therapy
      .where(deprecated: false)
      .order("therapies.name ASC")
  }

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
end
