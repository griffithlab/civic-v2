require "search_object"
require "search_object/plugin/graphql"

class Resolvers::TopLevelPhenotypes < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::PhenotypeType.connection_type, null: false

  description "List and filter Phenotypes from the Human Phenotype Ontology."

  scope do
    Phenotype
      .order("phenotypes.hpo_class ASC")
  end

  option(:hpo_id, type: String, description: "Limit to phenotypes with a specific HPO ID") do |scope, value|
    if value.upcase.starts_with?("HP:")
      scope.where("hpo_id ILIKE ?", "#{value}%")
    else
      scope.where("hpo_id ILIKE ?", "HP:#{value}%")
    end
  end

  option(:id, type: Int, description: "Filter Phenotype on internal CIViC id") do |scope, value|
    scope.where(id: value)
  end

  option(:name, type: String, description: "Wildcard match on phenotype name (class)") do |scope, value|
    scope.where("hpo_class ILIKE ?", "%#{value}%")
  end
end
