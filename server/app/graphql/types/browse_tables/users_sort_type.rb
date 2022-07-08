module Types::BrowseTables
  class UsersSortType < Types::BaseInputObject
    argument :column, Types::BrowseTables::UsersSortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
