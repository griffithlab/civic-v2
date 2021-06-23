require 'search_object/plugin/graphql'

class Resolvers::BrowseEvidence < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::BrowseTables::BrowseEvidenceType.connection_type, null: false

  description 'List and filter evidence items.'

  scope { EvidenceBrowseTableRow.all }

  option(:id, type: GraphQL::Types::Int, description: 'Left anchored filtering on the ID of the evidence item.') do |scope, value|
    scope.where("evidence_items.id = ?", value)
  end

  option(:variant_name, type: GraphQL::Types::String, description: 'Substring filtering on variant name') do |scope, value|
    scope.where("variant_name ILIKE ?", "#{value}%")
  end

  option(:gene_name, type: GraphQL::Types::String, description: 'Substring filtering on gene name') do |scope, value|
    scope.where("gene_name ILIKE ?", "#{value}%")
  end

  option(:disease_name, type: GraphQL::Types::String, description: 'Substring filtering on disease name.') do |scope, value|
    scope.where('diseases.name ILIKE ?', "%#{value}%")
  end

  option(:drug_name, type: GraphQL::Types::String, description: 'Substring filtering on drug name.') do |scope, value|
    scope.where('drugs.name ILIKE ?', "%#{value}%")
  end

  option(:description, type: GraphQL::Types::String, description: 'Substring filtering on evidence item description.') do |scope, value|
    scope.where("evidence_items.description ILIKE ?", "%#{value}%")
  end

  option(:evidence_level, type: Types::EvidenceLevelType, description: 'Filtering on the evidence level.') do |scope, value|
    scope.where(evidence_level: value)
  end

  option(:evidence_type, type: Types::EvidenceTypeType, description: 'Filtering on the evidence type.') do |scope, value|
    scope.where(evidence_type: value)
  end

  option(:evidence_direction, type: Types::EvidenceDirectionType, description: 'Filtering on the evidence direction.') do |scope, value|
    scope.where(evidence_direction: value)
  end

  option(:clinical_significance, type: Types::EvidenceClinicalSignificanceType, description: 'Filtering on the evidence clinical significance.') do |scope, value|
    scope.where(clinical_significance: value)
  end

  option(:variant_origin, type: Types::VariantOriginType, description: 'Filtering on the evidence variant origin.') do |scope, value|
    scope.where(variant_origin: value)
  end

  option(:evidence_rating, type: GraphQL::Types::Int, description: 'Filtering on the evidence rating. Valid values: 1, 2, 3, 4, 5') do |scope, value|
    scope.where(rating: value)
  end

  option(:status, type: Types::EvidenceStatusType, description: 'Filtering on the evidence status.') do |scope, value|
    scope.where(status: value)
  end


  option :sort_by, type: Types::BrowseTables::EvidenceSortType, description: 'Columm and direction to sort evidence on.' do |scope, value|
    case value.column
    when 'ID'
      scope.order("id #{value.direction}")
    when 'DISEASE_NAME'
      scope.order("disease_name #{value.direction}")
    when 'DRUG_NAME'
      scope.order("drug_names #{value.direction}")
    when 'DESCRIPTION'
      scope.order("description #{value.direction}")
    when 'EVIDENCE_LEVEL'
      scope.order("evidence_level #{value.direction}")
    when 'EVIDENCE_RATING'
      scope.order("rating #{value.direction}")
    when 'STATUS'
      scope.order("status #{value.direction}")
    when 'EVIDENCE_TYPE'
      scope.order("evidence_type #{value.direction}")
    when 'EVIDENCE_DIRECTION'
      scope.order("evidence_direction #{value.direction}")
    when 'CLINICAL_SIGNIFICANCE'
      scope.order("clinical_significance #{value.direction}")
    when 'VARIANT_ORIGIN'
      scope.order("variant_origin #{value.direction}")
    when 'VARIANT_NAME'
      scope.order("variant_name #{value.direction}")
    when 'GENE_NAME'
      scope.order("gene_name #{value.direction}")
    end
  end
end