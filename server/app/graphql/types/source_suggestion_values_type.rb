module Types
  class SourceSuggestionValuesType < Types::BaseObject
    field :gene, Types::Entities::GeneType, null: true
    field :variant, Types::Entities::VariantType, null: true
    field :disease, Types::Entities::DiseaseType, null: true
    field :source, Types::Entities::SourceType, null: true
  end
end
