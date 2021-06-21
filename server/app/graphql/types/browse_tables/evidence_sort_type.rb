module Types::BrowseTables
  class EvidenceSortType < Types::BaseInputObject
    argument :column, Types::BrowseTables::EvidenceSortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
