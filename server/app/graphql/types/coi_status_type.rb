module Types
  class CoiStatusType < Types::BaseEnum
    value "MISSING"
    value "EXPIRED"
    value "CONFLICT"
    value "VALID"
  end
end
