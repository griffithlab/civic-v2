module Types::BrowseTables
  class VariantTypeSortType < Types::BaseInputObject
    argument :column, Types::BrowseTables::VariantTypeSortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
