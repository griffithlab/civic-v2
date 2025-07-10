module Types::AdvancedSearch
  class BooleanSearchInput < Types::BaseInputObject
    argument :comparison_operator, Types::AdvancedSearch::BooleanSearchOperator, required: true
    argument :value, Boolean, required: false

    def resolve_query_for_type(column_name)
      case comparison_operator
      when "EQ"
        [ "#{column_name} = ?", value ]
      when "NE"
        [ "#{column_name} != ?", value ]
      when "IS_NULL"
        [ "#{column_name} IS NULL" ]
      when "IS_NOT_NULL"
        [ "#{column_name} IS NOT NULL" ]
      end
    end
  end
end
