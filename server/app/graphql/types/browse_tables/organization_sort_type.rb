module Types::BrowseTables
  class OrganizationSortType < Types::BaseInputObject
    argument :column, Types::BrowseTables::OrganizationSortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
