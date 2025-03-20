module Types::AdvancedSearch
  class BooleanSearchInput < Types::BaseInputObject
    argument :value, Boolean, required: true

    def resolve_query_for_type(column_name)
      [ "#{column_name} = ?", value ]
    end
  end
end
