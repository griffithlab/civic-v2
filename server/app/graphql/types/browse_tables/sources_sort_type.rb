module Types::BrowseTables
  class SourcesSortType < Types::BaseInputObject
    argument :column, Types::BrowseTables::SourcesSortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
