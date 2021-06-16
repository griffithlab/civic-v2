module Types::BrowseTables
  class VariantsSortType < Types::BaseInputObject
    argument :column, Types::BrowseTables::VariantsSortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
