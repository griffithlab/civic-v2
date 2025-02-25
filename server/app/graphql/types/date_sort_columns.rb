module Types
  class DateSortColumns < Types::BaseEnum
    value "CREATED", value: "created_at"
    value "LAST_MODIFIED", value: "updated_at"
  end
end
