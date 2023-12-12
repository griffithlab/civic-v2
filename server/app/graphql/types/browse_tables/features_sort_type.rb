module Types::BrowseTables
  class FeaturesSortType < Types::BaseInputObject
    argument :column, Types::BrowseTables::FeaturesSortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
