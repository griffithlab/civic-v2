module Types::BrowseTables
  class MolecularProfilesSortType < Types::BaseInputObject
    argument :column, Types::BrowseTables::MolecularProfilesSortColumns, "Available columns for sorting", required: true
    argument :direction, Types::SortDirection, "Sort direction", required: true
  end
end
