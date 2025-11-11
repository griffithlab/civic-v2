module Types::AdvancedSearch
  class IntSearchOperator < Types::BaseEnum
    value "EQ", description: "Equal To"
    value "NE", description: "Not Equal To"
    value "LT", description: "Less Than"
    value "GT", description: "Greater Than"
    value "LE", description: "Less Than or Equal To"
    value "GE", description: "Greater Than or Equal To"
  end


  class IntSearchInput < Types::BaseInputObject
    argument :operator, Types::AdvancedSearch::IntSearchOperator, required: true
    argument :value, Int, required: true

    def resolve_query_for_type(column_name)
      case operator
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
