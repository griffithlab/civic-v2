module Types::BrowseTables
  class ClinicalTrialSortType < Types::BaseInputObject
    argument :column, Types::BrowseTables::ClinicalTrialSortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
