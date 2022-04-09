module Types::BrowseTables
  class AssertionSortType < Types::BaseInputObject
    argument :column, Types::BrowseTables::AssertionSortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
