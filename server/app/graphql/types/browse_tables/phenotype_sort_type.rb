module Types::BrowseTables
  class PhenotypeSortType < Types::BaseInputObject
    argument :column, Types::BrowseTables::PhenotypeSortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
