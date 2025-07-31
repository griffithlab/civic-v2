module Types::AdvancedSearch
  class FloatSearchOperator < Types::BaseEnum
    value "EQ", description: "Equal To"
    value "NE"
    value "LT"
    value "GT"
    value "LE"
    value "GE"
  end


  class FloatSearchInput < Types::BaseInputObject
    argument :comparison_operator, Types::AdvancedSearch::FloatSearchOperator, required: true
    argument :value, Float, required: true

    def resolve_query_for_type(column_name)
      case comparison_operator
      when "EQ"
        [ "#{column_name} = ?", value ]
      when "NE"
        [ "#{column_name} <> ?", value ]
      when "LT"
        [ "#{column_name} < ?", value ]
      when "GT"
        [ "#{column_name} > ?", value ]
      when "LE"
        [ "#{column_name} <= ?", value ]
      when "GE"
        [ "#{column_name} >= ?", value ]
      end
    end
  end
end
