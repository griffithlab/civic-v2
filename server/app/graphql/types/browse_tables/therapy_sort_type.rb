module Types::BrowseTables
  class TherapySortType < Types::BaseInputObject
    argument :column, Types::BrowseTables::TherapySortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
