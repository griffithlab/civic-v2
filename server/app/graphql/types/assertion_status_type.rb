module Types
  class AssertionStatusType < Types::BaseEnum
    value "ACCEPTED", value: "accepted"
    value "SUBMITTED", value: "submitted"
    value "REJECTED", value: "rejected"
    value "WITHDRAWN", value: "withdrawn"
  end
end
