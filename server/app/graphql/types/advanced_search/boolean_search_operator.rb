module Types::AdvancedSearch
  class BooleanSearchOperator < Types::BaseEnum
    value "EQ", description: "Equal To"
    value "NE", description: "Not Equal To"
    value "IS_NULL", description: "Is NULL"
    value "IS_NOT_NULL", description: "Is Not NULL"
  end
end