require 'search_object/plugin/graphql'

class Resolvers::TopLevelFactors < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::FactorType.connection_type, null: false

  description 'List and filter factors.'

  scope do
    Features::Factor
      .eager_load(:feature)
      .joins(feature: {variants: [molecular_profiles: [:evidence_items]]})
      .order('features.name ASC').where("evidence_items.status != 'rejected'").distinct
  end

  option(:ncit_it, type: [GraphQL::Types::String], description: 'List of NCIt Codes to return Factors for') do |scope, value|
    scope.where('factors.ncit_id IN (?)', value.map(&:upcase))
  end

  option(:name, type: [GraphQL::Types::String], description: 'List of Factor names to return') do |scope, value|
    names = value.map(&:upcase)
    scope.where('upper(features.name) IN (?) OR upper(features.full_name) IN (?)', names, names)
  end
end
