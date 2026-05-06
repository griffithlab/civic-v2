module Types
  module AdvancedSearch
    class CoordinateSearchInput < Types::BaseInputObject
      argument :chromosome, Types::AdvancedSearch::EnumSearchInput.for(Types::ChromosomeType), required: false
      argument :start, Types::AdvancedSearch::IntSearchInput, required: false
      argument :stop, Types::AdvancedSearch::IntSearchInput, required: false
      argument :reference_bases, Types::AdvancedSearch::DnaBaseStringInput, required: false
      argument :variant_bases, Types::AdvancedSearch::DnaBaseStringInput, required: false
    end
  end
end
