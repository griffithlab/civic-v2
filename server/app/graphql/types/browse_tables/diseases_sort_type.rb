module Types::BrowseTables
  class DiseasesSortType < Types::BaseInputObject
    argument :column, Types::BrowseTables::DiseasesSortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
