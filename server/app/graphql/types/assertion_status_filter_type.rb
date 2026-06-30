module Types
  class AssertionStatusFilterType < Types::BaseEnum
    value "ACCEPTED", value: "accepted"
    value "SUBMITTED", value: "submitted"
    value "REJECTED", value: "rejected"
    value "WITHDRAWN", value: "withdrawn"
    value "NON_REJECTED"
    value "ALL"
  end
end
