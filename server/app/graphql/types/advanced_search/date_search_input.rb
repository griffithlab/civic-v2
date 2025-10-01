module Types::AdvancedSearch
  class DateSearchOperator < Types::BaseEnum
    value "BEFORE"
    value "AFTER"
  end

  class DateSearchInput < Types::BaseInputObject
    argument :operator, Types::AdvancedSearch::DateSearchOperator, required: true
    argument :date, GraphQL::Types::ISO8601DateTime, required: true

    def resolve_query_for_type(column_name)
      case operator
      when "BEFORE"
        [ "#{column_name} <= ?", date ]
      when "AFTER"
        [ "#{column_name} >= ?", date ]
      end
    end
  end
end
