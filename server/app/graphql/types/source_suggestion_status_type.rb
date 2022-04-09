module Types
  class SourceSuggestionStatusType < Types::BaseEnum
    value "NEW", value: "new"
    value "CURATED", value: "curated"
    value "REJECTED", value: "rejected"
  end
end
