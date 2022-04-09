module Types::BrowseTables
  class SourceSuggestionsSortType < Types::BaseInputObject
    argument :column, Types::BrowseTables::SourceSuggestionsSortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
