module Types::BrowseTables
  class VariantGroupsSortType < Types::BaseInputObject
    argument :column, Types::BrowseTables::VariantGroupsSortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
