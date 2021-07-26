module Types::BrowseTables
  class DrugSortType < Types::BaseInputObject
    argument :column, Types::BrowseTables::DrugSortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
