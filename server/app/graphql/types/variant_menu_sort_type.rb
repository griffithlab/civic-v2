module Types
  class VariantMenuSortType < Types::BaseInputObject
    argument :column, Types::VariantMenuSortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
