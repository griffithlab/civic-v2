module Types::AdvancedSearch
  class IntSearchOperators < Types::BaseEnum
    value 'EQ', description: 'Equal To'
    value 'NE'
    value 'LT'
    value 'GT'
    value 'LE'
    value 'GE'
  end


  class IntSearchInput < Types::BaseInputObject
    argument :comparison_operator, Types::AdvancedSearch::IntSearchOperators, required: true
    argument :value, Int, required: true
  end
end
