module Types::BrowseTables
  class GenesSortType < Types::BaseInputObject
    argument :column, Types::BrowseTables::GenesSortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
