module Types::AdvancedSearch
  class StringSearchOperator < Types::BaseEnum
    value 'EQ'
    value 'NE'
    value 'CONTAINS'
    value 'DOES_NOT_CONTAIN'
    value 'STARTS_WITH'
  end


  class StringSearchInput < Types::BaseInputObject
    argument :comparison_operator, Types::AdvancedSearch::StringSearchOperator, required: true
    argument :value, String, required: true
  end
end
