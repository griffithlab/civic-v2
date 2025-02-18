require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::TopLevelDiseases < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)
  include Resolvers::Shared::SearchHelpers

  type Types::Entities::DiseaseType.connection_type, null: false

  scope {
    Disease
      .where(deprecated: false)
      .order("diseases.name ASC")
  }

  option(:id, type: Int) do |scope, value|
    scope.where(id: value)
  end

  option(:name, type: String) do |scope, value|
    scope.where('name ILIKE ?', "%#{value}%")
  end

  option(:doid, type: String) do |scope, value|
    if value.upcase.starts_with?('DOID:')
      scope.where(doid: value.upcase.gsub('DOID:',''))
    else
      scope.where(doid: value)
    end
  end
end
