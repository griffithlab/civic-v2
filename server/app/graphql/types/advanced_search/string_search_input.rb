module Types::AdvancedSearch
  class StringSearchOperator < Types::BaseEnum
    value "EQ"
    value "NE"
    value "CONTAINS"
    value "DOES_NOT_CONTAIN"
    value "STARTS_WITH"
  end


  class StringSearchInput < Types::BaseInputObject
    argument :operator, Types::AdvancedSearch::StringSearchOperator, required: true
    argument :value, String, required: true

    def resolve_query_for_type(column_name)
      case operator
      when "EQ"
        [ "#{column_name} = ?", value ]
      when "NE"
        [ "#{column_name} != ?", value ]
      when "CONTAINS"
        [ "#{column_name} ILIKE ?", "%#{value}%" ]
      when "DOES_NOT_CONTAIN"
        [ "#{column_name} IS NULL OR #{column_name} NOT ILIKE ?", "%#{value}%" ]
      when "STARTS_WITH"
        [ "#{column_name} ILIKE ?", "#{value}%" ]
      end
    end
  end
end
