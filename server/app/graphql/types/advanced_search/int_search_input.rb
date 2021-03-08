module Types::AdvancedSearch
  class IntSearchOperations < Types::BaseEnum
    value 'EQ', description: 'Equal To'
    value 'NE'
    value 'LT'
    value 'GT'
    value 'LE'
    value 'GE'
  end


  class IntSearchInput < Types::BaseInputObject
    argument :operation_type, Types::AdvancedSearch::IntSearchOperations, required: true
    argument :value, Int, required: true
  end
end
