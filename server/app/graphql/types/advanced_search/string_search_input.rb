module Types::AdvancedSearch
  class StringSearchOperations < Types::BaseEnum
    value 'EQ'
    value 'NE'
    value 'CONTAINS'
    value 'DOES_NOT_CONTAIN'
    value 'STARTS_WITH'
  end


  class StringSearchInput < Types::BaseInputObject
    argument :operation_type, Types::AdvancedSearch::StringSearchOperations, required: true
    argument :value, String, required: true
  end
end
