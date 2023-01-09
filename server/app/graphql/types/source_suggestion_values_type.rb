module Types
  class SourceSuggestionValuesType < Types::BaseObject
    field :molecularProfile, Types::Entities::MolecularProfileType, null: true
    field :disease, Types::Entities::DiseaseType, null: true
    field :source, Types::Entities::SourceType, null: true
  end
end
