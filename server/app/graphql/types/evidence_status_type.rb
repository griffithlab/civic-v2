module Types
  class EvidenceStatusType < Types::BaseEnum
    value "ACCEPTED", value: "accepted"
    value "SUBMITTED", value: "submitted"
    value "REJECTED", value: "rejected"
  end
end
