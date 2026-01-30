module Types
  class ApprovalStatusType < Types::BaseEnum
    value "ACTIVE", value: "active"
    value "REVOKED", value: "revoked"
    value "REQUIRES_REVIEW", value: "requires_review"
  end
end
