module Types
  class DateSortType < Types::BaseInputObject
    argument :column, Types::DateSortColumns, "Value to sort by.", required: true
    argument :direction, Types::SortDirection, "Sort direction.", required: true
  end
end
