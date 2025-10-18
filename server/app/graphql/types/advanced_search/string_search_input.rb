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

    def resolve_query_for_type(column_name, value_override: nil)
      v = if value_override.present?
        value_override
      else
        value
      end

      case operator
      when "EQ"
        [ "#{column_name} = ?", v ]
      when "NE"
        [ "#{column_name} != ?", v ]
      when "CONTAINS"
        [ "#{column_name} ILIKE ?", "%#{v}%" ]
      when "DOES_NOT_CONTAIN"
        [ "#{column_name} IS NULL OR #{column_name} NOT ILIKE ?", "%#{v}%" ]
      when "STARTS_WITH"
        [ "#{column_name} ILIKE ?", "#{v}%" ]
      end
    end
  end
end
